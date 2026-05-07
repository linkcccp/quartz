import test, { describe } from "node:test"
import assert from "node:assert"
import { PWAOptions, generateServiceWorker } from "./linkcccp_pwa"

describe("PWA Options", () => {
  test("should have required properties", () => {
    const options: PWAOptions = {
      name: "Test App",
      shortName: "Test",
      themeColor: "#284b63",
      backgroundColor: "#faf8f8",
    }

    assert.strictEqual(options.name, "Test App")
    assert.strictEqual(options.shortName, "Test")
    assert.strictEqual(options.themeColor, "#284b63")
    assert.strictEqual(options.backgroundColor, "#faf8f8")
  })

  test("should allow optional description", () => {
    const options: PWAOptions = {
      name: "Test App",
      shortName: "Test",
      themeColor: "#284b63",
      backgroundColor: "#faf8f8",
      description: "My description",
    }

    assert.strictEqual(options.description, "My description")
  })

  test("should allow custom icon path", () => {
    const options: PWAOptions = {
      name: "Test App",
      shortName: "Test",
      themeColor: "#284b63",
      backgroundColor: "#faf8f8",
      icon: "static/custom-icon.png",
    }

    assert.strictEqual(options.icon, "static/custom-icon.png")
  })
})

function makeMap(files: string[]): Map<string, string> {
  return new Map(files.map((f) => [f, "test-hash"]))
}

describe("Service Worker Generator", () => {
  test("should generate valid service worker code", () => {
    const staticFiles = ["/index.html", "/about.html", "/static/style.css"]
    const swCode = generateServiceWorker(staticFiles, makeMap(staticFiles))

    assert.ok(swCode.includes("importScripts"))
    assert.ok(swCode.includes("workbox-sw.js"))
    assert.ok(swCode.includes("precacheAndRoute"))
    assert.ok(swCode.includes("NetworkFirst"))
    assert.ok(swCode.includes("CacheFirst"))
  })

  test("should include build timestamp", () => {
    const staticFiles: string[] = []
    const swCode = generateServiceWorker(staticFiles, new Map())

    assert.ok(swCode.includes("// Build:"))
  })

  test("should include static files in precache", () => {
    const staticFiles = ["/index.html", "/about.html"]
    const swCode = generateServiceWorker(staticFiles, makeMap(staticFiles))

    assert.ok(swCode.includes("/index.html"))
    assert.ok(swCode.includes("/about.html"))
  })

  test("should filter out sitemap and robots files", () => {
    const staticFiles = ["/index.html", "/sitemap.xml", "/robots.txt", "/feed.xml"]
    const swCode = generateServiceWorker(staticFiles, makeMap(staticFiles))

    assert.ok(swCode.includes("/index.html"))
    assert.ok(!swCode.includes("sitemap"))
    assert.ok(!swCode.includes("robots"))
    assert.ok(!swCode.includes("feed.xml"))
  })

  test("should use {url, revision} format for precache entries", () => {
    const staticFiles = ["/index.html"]
    const swCode = generateServiceWorker(staticFiles, makeMap(staticFiles))

    assert.ok(swCode.includes("{url: '/index.html', revision: 'test-hash'}"))
  })

  test("should register routes for documents", () => {
    const staticFiles: string[] = []
    const swCode = generateServiceWorker(staticFiles, new Map())

    assert.ok(swCode.includes("request.destination === 'document'"))
    assert.ok(swCode.includes("NetworkFirst"))
    assert.ok(swCode.includes("cacheName: 'pages'"))
  })

  test("should register routes for static assets", () => {
    const staticFiles: string[] = []
    const swCode = generateServiceWorker(staticFiles, new Map())

    assert.ok(swCode.includes("request.destination === 'style'"))
    assert.ok(swCode.includes("request.destination === 'script'"))
    assert.ok(swCode.includes("request.destination === 'image'"))
    assert.ok(swCode.includes("CacheFirst"))
    assert.ok(swCode.includes("cacheName: 'static'"))
  })

  test("should register routes for fonts", () => {
    const staticFiles: string[] = []
    const swCode = generateServiceWorker(staticFiles, new Map())

    assert.ok(swCode.includes("fonts.googleapis.com"))
    assert.ok(swCode.includes("fonts.gstatic.com"))
    assert.ok(swCode.includes("CacheFirst"))
    assert.ok(swCode.includes("cacheName: 'fonts'"))
  })

  test("should include install and activate handlers", () => {
    const staticFiles: string[] = []
    const swCode = generateServiceWorker(staticFiles, new Map())

    assert.ok(swCode.includes("self.addEventListener('install'"))
    assert.ok(swCode.includes("self.skipWaiting()"))
    assert.ok(swCode.includes("self.addEventListener('activate'"))
    assert.ok(swCode.includes("clients.claim()"))
  })

  test("should set correct expiration for static cache", () => {
    const staticFiles: string[] = []
    const swCode = generateServiceWorker(staticFiles, new Map())

    assert.ok(swCode.includes("maxEntries: 50"))
    assert.ok(swCode.includes("maxAgeSeconds: 7 * 24 * 60 * 60"))
  })

  test("should set correct expiration for fonts cache", () => {
    const staticFiles: string[] = []
    const swCode = generateServiceWorker(staticFiles, new Map())

    assert.ok(swCode.includes("maxEntries: 30"))
    assert.ok(swCode.includes("maxAgeSeconds: 365 * 24 * 60 * 60"))
  })
})
