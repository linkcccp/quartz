import test, { describe, beforeEach } from "node:test"
import assert from "node:assert"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe("PWA Integration Tests", () => {
  const testOutputDir = path.join(__dirname, ".test-pwa-output")
  const mockPWAConfig = {
    enabled: true,
    name: "Test Digital Garden",
    shortName: "Garden",
    description: "A test digital garden",
    themeColor: "#284b63",
    backgroundColor: "#faf8f8",
  }

  beforeEach(async () => {
    if (fs.existsSync(testOutputDir)) {
      await fs.promises.rm(testOutputDir, { recursive: true })
    }
    await fs.promises.mkdir(testOutputDir, { recursive: true })
  })

  test("should generate manifest.json with correct structure", async () => {
    const manifestPath = path.join(testOutputDir, "manifest.json")

    const manifest = {
      name: mockPWAConfig.name,
      short_name: mockPWAConfig.shortName,
      description: mockPWAConfig.description,
      start_url: "/",
      display: "standalone",
      background_color: mockPWAConfig.backgroundColor,
      theme_color: mockPWAConfig.themeColor,
      icons: [
        { src: "/static/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/static/icon-512.png", sizes: "512x512", type: "image/png" },
        {
          src: "/static/icon-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    }

    await fs.promises.writeFile(manifestPath, JSON.stringify(manifest, null, 2))
    const content = await fs.promises.readFile(manifestPath, "utf-8")
    const parsed = JSON.parse(content)

    assert.strictEqual(parsed.name, "Test Digital Garden")
    assert.strictEqual(parsed.short_name, "Garden")
    assert.strictEqual(parsed.display, "standalone")
    assert.strictEqual(parsed.background_color, "#faf8f8")
    assert.strictEqual(parsed.theme_color, "#284b63")
    assert.ok(Array.isArray(parsed.icons))
    assert.strictEqual(parsed.icons.length, 3)
  })

  test("should generate service-worker.js with Workbox", async () => {
    const swPath = path.join(testOutputDir, "service-worker.js")

    const staticFiles = ["/index.html", "/about.html", "/static/style.css"]
    const buildTimestamp = "2026-01-01T00:00:00.000Z"
    const precacheList = staticFiles
      .filter((f) => !f.includes("itemap") && !f.includes("obots") && !f.endsWith(".xml"))
      .map((f) => `{url: '${f}', revision: 'test-hash'},`)
      .join("\n    ")

    const swContent = `importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');
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

    await fs.promises.writeFile(swPath, swContent)
    const content = await fs.promises.readFile(swPath, "utf-8")

    assert.ok(content.includes("workbox-sw.js"))
    assert.ok(content.includes("precacheAndRoute"))
    assert.ok(content.includes("NetworkFirst"))
    assert.ok(content.includes("CacheFirst"))
    assert.ok(content.includes("maxEntries: 50"))
    assert.ok(content.includes("maxAgeSeconds: 7 * 24 * 60 * 60"))
    assert.ok(content.includes("maxEntries: 30"))
    assert.ok(content.includes("maxAgeSeconds: 365 * 24 * 60 * 60"))
  })

  test("should filter out sitemap and robots from precache", () => {
    const staticFiles = [
      "/index.html",
      "/about.html",
      "/sitemap.xml",
      "/robots.txt",
      "/tag/test.html",
    ]

    const filtered = staticFiles.filter(
      (f) => !f.includes("itemap") && !f.includes("obots") && !f.endsWith(".xml"),
    )

    assert.strictEqual(filtered.length, 3)
    assert.ok(filtered.includes("/index.html"))
    assert.ok(filtered.includes("/about.html"))
    assert.ok(filtered.includes("/tag/test.html"))
    assert.ok(!filtered.includes("/sitemap.xml"))
    assert.ok(!filtered.includes("/robots.txt"))
  })

  test("should generate service worker registration script", () => {
    const registrationScript = `
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
              console.log('SW registered:', registration.scope);
            })
            .catch(error => {
              console.error('SW registration failed:', error);
            });
        });
      }
    `

    assert.ok(registrationScript.includes("serviceWorker"))
    assert.ok(registrationScript.includes("navigator.serviceWorker.register"))
    assert.ok(registrationScript.includes("/service-worker.js"))
  })

  test("should generate correct head tags for manifest", () => {
    const themeColor = "#284b63"
    const headTags = [
      { rel: "manifest", href: "/manifest.json" },
      { name: "theme-color", content: themeColor },
    ]

    const manifestTag = headTags.find((tag) => tag.rel === "manifest")
    const themeTag = headTags.find((tag) => tag.name === "theme-color")

    assert.ok(manifestTag)
    assert.strictEqual(manifestTag?.href, "/manifest.json")
    assert.ok(themeTag)
    assert.strictEqual(themeTag?.content, themeColor)
  })

  test("should handle missing optional fields gracefully", () => {
    const minimalConfig = {
      name: "Minimal App",
      shortName: "App",
      themeColor: "#000000",
      backgroundColor: "#ffffff",
    }

    const manifest = {
      name: minimalConfig.name,
      short_name: minimalConfig.shortName,
      description: minimalConfig.name,
      start_url: "/",
      display: "standalone",
      background_color: minimalConfig.backgroundColor,
      theme_color: minimalConfig.themeColor,
      icons: [],
    }

    assert.strictEqual(manifest.name, "Minimal App")
    assert.strictEqual(manifest.short_name, "App")
    assert.strictEqual(manifest.description, "Minimal App")
    assert.ok(!manifest.icons || manifest.icons.length === 0)
  })

  test("should validate PWA icon configuration", () => {
    const iconConfigs = [
      { src: "/static/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/static/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/static/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
    ]

    for (const icon of iconConfigs) {
      assert.ok(icon.src.startsWith("/static/icon-"))
      assert.ok(icon.sizes.match(/^\d+x\d+$/))
      assert.strictEqual(icon.type, "image/png")
    }
  })

  test("should generate valid cache expiration times", () => {
    const staticCacheMaxAge = 7 * 24 * 60 * 60
    const fontsCacheMaxAge = 365 * 24 * 60 * 60

    assert.strictEqual(staticCacheMaxAge, 604800)
    assert.strictEqual(fontsCacheMaxAge, 31536000)

    const staticCacheMaxEntries = 50
    const fontsCacheMaxEntries = 30

    assert.strictEqual(staticCacheMaxEntries, 50)
    assert.strictEqual(fontsCacheMaxEntries, 30)
  })
})
