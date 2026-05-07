import crypto from "crypto"
import sharp from "sharp"
import fs from "fs"
import path from "path"
import { joinSegments, QUARTZ, FullSlug } from "../../../util/path"
import { QuartzEmitterPlugin } from "../../types"
import { write } from "../helpers"

export interface PWAOptions {
  name: string
  shortName: string
  description?: string
  themeColor: string
  backgroundColor: string
  icon?: string
}

async function computeRevisions(
  outputDir: string,
  staticFiles: string[],
): Promise<Map<string, string>> {
  const revisions = new Map<string, string>()
  for (const filePath of staticFiles) {
    const diskPath = path.join(outputDir, filePath.replace(/^\//, ""))
    try {
      const content = await fs.promises.readFile(diskPath)
      const hash = crypto.createHash("sha256").update(content).digest("hex").slice(0, 8)
      revisions.set(filePath, hash)
    } catch {
      revisions.set(filePath, "00000000")
    }
  }
  return revisions
}

export function generateServiceWorker(
  staticFiles: string[],
  revisionMap: Map<string, string>,
): string {
  const buildTimestamp = new Date().toISOString()

  const precacheList = staticFiles
    .filter((f) => !f.includes("itemap") && !f.includes("obots") && !f.endsWith(".xml"))
    .map((f) => {
      const revision = revisionMap.get(f) || buildTimestamp
      return `{url: '${f}', revision: '${revision}'},`
    })
    .join("\n    ")

  return `importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');
// Build: ${buildTimestamp}

const precacheFiles = [
  {url: '/', revision: '${buildTimestamp}'},
  ${precacheList}
];

workbox.precaching.precacheAndRoute(precacheFiles);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'document',
  new workbox.strategies.NetworkFirst({
    cacheName: 'pages',
  })
);

workbox.routing.registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'image',
  new workbox.strategies.CacheFirst({
    cacheName: 'static',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
  new workbox.strategies.CacheFirst({
    cacheName: 'fonts',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 365 * 24 * 60 * 60,
      }),
    ],
  })
);

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
`
}

async function getStaticFiles(outputDir: string): Promise<string[]> {
  const files: string[] = []

  async function walkDir(dir: string) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walkDir(fullPath)
      } else if (entry.isFile()) {
        files.push("/" + path.relative(outputDir, fullPath).replace(/\\/g, "/"))
      }
    }
  }

  await walkDir(outputDir)
  return files
}

export const LinkcccpPWA: QuartzEmitterPlugin<PWAOptions> = () => {
  return {
    name: "LinkcccpPWA",
    async *emit(ctx) {
      const cfg = ctx.cfg.configuration
      const pwaOpts = cfg.pwa

      if (!pwaOpts || !pwaOpts.enabled) {
        return
      }

      const output = ctx.argv.output

      const iconPath = pwaOpts.icon
        ? joinSegments(QUARTZ, pwaOpts.icon)
        : joinSegments(QUARTZ, "static", "icon.png")

      const icon192 = await sharp(iconPath).resize(192, 192).png().toBuffer()
      const icon512 = await sharp(iconPath).resize(512, 512).png().toBuffer()

      yield write({
        ctx,
        slug: "static/icon-192" as FullSlug,
        ext: ".png",
        content: icon192,
      })

      yield write({
        ctx,
        slug: "static/icon-512" as FullSlug,
        ext: ".png",
        content: icon512,
      })

      const manifest = {
        name: pwaOpts.name,
        short_name: pwaOpts.shortName,
        description: pwaOpts.description || pwaOpts.name,
        start_url: "/",
        display: "standalone",
        background_color: pwaOpts.backgroundColor,
        theme_color: pwaOpts.themeColor,
        icons: [
          {
            src: "/static/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/static/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/static/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      }

      yield write({
        ctx,
        slug: "manifest" as FullSlug,
        ext: ".json",
        content: JSON.stringify(manifest, null, 2),
      })

      const staticFiles = await getStaticFiles(output)
      const revisionMap = await computeRevisions(output, staticFiles)
      const swContent = generateServiceWorker(staticFiles, revisionMap)

      yield write({
        ctx,
        slug: "service-worker" as FullSlug,
        ext: ".js",
        content: swContent,
      })
    },
    externalResources(ctx) {
      const cfg = ctx.cfg.configuration
      const pwaOpts = cfg.pwa

      if (!pwaOpts || !pwaOpts.enabled) {
        return {}
      }

      return {
        js: [
          {
            loadTime: "afterDOMReady",
            contentType: "inline",
            script: `
              if ('serviceWorker' in navigator) {
                let refreshing = false
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                  if (!refreshing) {
                    refreshing = true
                    window.location.reload()
                  }
                })
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/service-worker.js', {updateViaCache: 'none'})
                    .then(registration => {
                      registration.addEventListener('updatefound', () => {
                        const installingWorker = registration.installing
                        if (installingWorker) {
                          installingWorker.addEventListener('statechange', () => {
                            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                              window.location.reload()
                            }
                          })
                        }
                      })
                    })
                })
              }
            `,
          },
        ],
        additionalHead: [
          <link rel="manifest" href="/manifest.json" />,
          <meta name="theme-color" content={pwaOpts.themeColor} />,
        ],
      }
    },
  }
}
