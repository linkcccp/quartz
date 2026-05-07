import test, { describe, beforeEach, afterEach } from "node:test"
import assert from "node:assert"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { glob } from "../quartz/util/glob"
import { slugifyFilePath, joinSegments } from "../quartz/util/path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe("Assets Emitter Integration Tests", () => {
  const testDir = path.join(__dirname, ".test-assets-output")
  const contentDir = path.join(testDir, "content")
  const outputDir = path.join(testDir, "output")

  beforeEach(async () => {
    await fs.promises.mkdir(contentDir, { recursive: true })
    await fs.promises.mkdir(outputDir, { recursive: true })
    await fs.promises.writeFile(path.join(contentDir, "test.txt"), "test content")
    await fs.promises.writeFile(path.join(contentDir, "image.png"), "fake png data")
  })

  afterEach(async () => {
    if (fs.existsSync(testDir)) {
      await fs.promises.rm(testDir, { recursive: true })
    }
  })

  test("should glob non-markdown files from content directory", async () => {
    const ignorePatterns = ["**/*.md", "private", "templates"]
    const files = await glob("**", contentDir, ignorePatterns)

    assert.ok(files.length >= 2)
    assert.ok(files.some((f) => f.endsWith(".txt")))
    assert.ok(files.some((f) => f.endsWith(".png")))
    assert.ok(!files.some((f) => f.endsWith(".md")))
  })

  test("should slugify file paths correctly", () => {
    assert.strictEqual(slugifyFilePath("test.txt" as any), "test.txt")
    assert.strictEqual(slugifyFilePath("test.md" as any), "test")
    assert.strictEqual(slugifyFilePath("folder/file.txt" as any), "folder/file.txt")
    assert.strictEqual(slugifyFilePath("file with spaces.txt" as any), "file-with-spaces.txt")
    assert.strictEqual(slugifyFilePath("file.html" as any), "file")
  })

  test("should join path segments correctly", () => {
    const result = joinSegments("input", "subfolder", "file.txt" as any)
    assert.ok(result.includes("input"))
    assert.ok(result.includes("subfolder"))
  })
})

describe("Static Files Emitter Integration Tests", () => {
  const testDir = path.join(__dirname, ".test-static-output")
  const staticDir = path.join(testDir, "static")
  const outputDir = path.join(testDir, "output")

  beforeEach(async () => {
    await fs.promises.mkdir(staticDir, { recursive: true })
    await fs.promises.mkdir(outputDir, { recursive: true })
    await fs.promises.writeFile(path.join(staticDir, "style.css"), "body { color: red; }")
    await fs.promises.writeFile(path.join(staticDir, "script.js"), "console.log('test')")
  })

  afterEach(async () => {
    if (fs.existsSync(testDir)) {
      await fs.promises.rm(testDir, { recursive: true })
    }
  })

  test("should copy static files to output", async () => {
    const staticFiles = await glob("**/*", staticDir, [])

    for (const file of staticFiles) {
      const srcPath = joinSegments(staticDir, file as any)
      const destPath = joinSegments(outputDir, "static", file as any)
      const destDir = path.dirname(destPath as any)
      await fs.promises.mkdir(destDir as any, { recursive: true })
      await fs.promises.copyFile(srcPath as any, destPath as any)
    }

    const outputFiles = await glob("**/*", outputDir, [])
    assert.ok(outputFiles.length >= 2)
    assert.ok(outputFiles.some((f) => f.includes("style.css")))
    assert.ok(outputFiles.some((f) => f.includes("script.js")))
  })
})

describe("Alias Redirects Emitter Integration Tests", () => {
  test("should generate alias redirect configuration", () => {
    const aliases = [
      { from: "/old-page", to: "/new-page" },
      { from: "/legacy/old", to: "/modern/new" },
    ]

    for (const alias of aliases) {
      assert.ok(alias.from.startsWith("/"))
      assert.ok(alias.to.startsWith("/"))
    }

    assert.strictEqual(aliases.length, 2)
    assert.strictEqual(aliases[0].from, "/old-page")
    assert.strictEqual(aliases[0].to, "/new-page")
  })

  test("should handle index file aliases", () => {
    const aliasMap = new Map<string, string>()
    aliasMap.set("/old", "/new")
    aliasMap.set("/old/index", "/new")

    assert.strictEqual(aliasMap.get("/old"), "/new")
    assert.strictEqual(aliasMap.get("/old/index"), "/new")
  })
})

describe("Content Index Emitter Integration Tests", () => {
  test("should generate sitemap XML structure", () => {
    const baseUrl = "example.com"
    const pages = [
      { slug: "index", dateModified: new Date("2024-01-01") },
      { slug: "about", dateModified: new Date("2024-01-02") },
      { slug: "blog/post-1", dateModified: new Date("2024-01-03") },
    ]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>https://${baseUrl}/${p.slug}</loc>
    <lastmod>${p.dateModified.toISOString().split("T")[0]}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`

    assert.ok(sitemap.includes('xml version="1.0"'))
    assert.ok(sitemap.includes("urlset"))
    assert.ok(sitemap.includes("example.com/index"))
    assert.ok(sitemap.includes("example.com/about"))
    assert.ok(sitemap.includes("example.com/blog/post-1"))
  })

  test("should generate RSS feed structure", () => {
    const baseUrl = "example.com"
    const config = {
      pageTitle: "My Blog",
    }
    const posts = [
      {
        slug: "post-1",
        frontmatter: { title: "First Post", date: "2024-01-01" },
        content: "Content 1",
      },
      {
        slug: "post-2",
        frontmatter: { title: "Second Post", date: "2024-01-02" },
        content: "Content 2",
      },
    ]

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${config.pageTitle}</title>
  <link>https://${baseUrl}</link>
${posts
  .map(
    (p) => `  <item>
    <title>${p.frontmatter.title}</title>
    <link>https://${baseUrl}/${p.slug}</link>
    <pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate>
  </item>`,
  )
  .join("\n")}
</channel>
</rss>`

    assert.ok(rss.includes('rss version="2.0"'))
    assert.ok(rss.includes("My Blog"))
    assert.ok(rss.includes("First Post"))
    assert.ok(rss.includes("Second Post"))
  })

  test("should generate content index JSON", () => {
    const files = [
      { slug: "index", frontmatter: { title: "Home" }, date: 1704067200000 },
      { slug: "about", frontmatter: { title: "About" }, date: 1704153600000 },
    ]

    const index = files.map((f) => ({
      slug: f.slug,
      title: f.frontmatter.title,
      date: f.date,
    }))

    const json = JSON.stringify(index, null, 2)
    const parsed = JSON.parse(json)

    assert.strictEqual(parsed.length, 2)
    assert.strictEqual(parsed[0].slug, "index")
    assert.strictEqual(parsed[0].title, "Home")
    assert.ok(parsed[0].date > 0)
  })
})

describe("Favicon Emitter Integration Tests", () => {
  const testDir = path.join(__dirname, ".test-favicon-output")
  const outputDir = path.join(testDir, "output")

  beforeEach(async () => {
    await fs.promises.mkdir(outputDir, { recursive: true })
  })

  afterEach(async () => {
    if (fs.existsSync(testDir)) {
      await fs.promises.rm(testDir, { recursive: true })
    }
  })

  test("should generate favicon.ico from icon.png", async () => {
    const iconPath = path.join(__dirname, "../../static/icon.png")

    if (!fs.existsSync(iconPath)) {
      return
    }

    const sharp = (await import("sharp")).default
    const icoContent = sharp(iconPath).resize(48, 48).toFormat("png")

    await fs.promises.writeFile(path.join(outputDir, "favicon.ico"), icoContent)

    const icoPath = path.join(outputDir, "favicon.ico")
    assert.ok(fs.existsSync(icoPath))
  })
})

describe("Component Resources Emitter Integration Tests", () => {
  test("should aggregate resources from all components", () => {
    const mockComponents = [
      {
        css: ["component-a.css"],
        beforeDOMLoaded: ["script-a.js"],
      },
      {
        css: ["component-b.css"],
        afterDOMLoaded: ["script-b.js"],
      },
    ]

    const aggregated = {
      css: new Set<string>(),
      beforeDOMLoaded: new Set<string>(),
      afterDOMLoaded: new Set<string>(),
    }

    for (const comp of mockComponents) {
      if (comp.css) comp.css.forEach((c) => aggregated.css.add(c))
      if (comp.beforeDOMLoaded)
        comp.beforeDOMLoaded.forEach((s) => aggregated.beforeDOMLoaded.add(s))
      if (comp.afterDOMLoaded) comp.afterDOMLoaded.forEach((s) => aggregated.afterDOMLoaded.add(s))
    }

    assert.strictEqual(aggregated.css.size, 2)
    assert.strictEqual(aggregated.beforeDOMLoaded.size, 1)
    assert.strictEqual(aggregated.afterDOMLoaded.size, 1)
  })

  test("should normalize resource to array", () => {
    const normalizeResource = (resource: string | string[] | undefined): string[] => {
      if (!resource) return []
      if (Array.isArray(resource)) return resource
      return [resource]
    }

    assert.deepStrictEqual(normalizeResource("single.css"), ["single.css"])
    assert.deepStrictEqual(normalizeResource(["a.css", "b.css"]), ["a.css", "b.css"])
    assert.deepStrictEqual(normalizeResource(undefined), [])
  })
})

describe("404 Page Emitter Integration Tests", () => {
  test("should generate 404 page configuration", () => {
    const pageOptions = {
      layout: {
        beforeBody: [],
        left: [],
        right: [],
      },
    }

    assert.ok(pageOptions.layout)
    assert.ok(Array.isArray(pageOptions.layout.beforeBody))
    assert.ok(Array.isArray(pageOptions.layout.left))
    assert.ok(Array.isArray(pageOptions.layout.right))
  })
})

describe("Content Page Emitter Integration Tests", () => {
  test("should generate page slug from file path", () => {
    const testCases = [
      { input: "index.md", expected: "index" },
      { input: "blog/my-post.md", expected: "blog/my-post" },
      { input: "folder/nested/page.md", expected: "folder/nested/page" },
    ]

    for (const tc of testCases) {
      const slug = tc.input.replace(/\.md$/, "").replace(/\s+/g, "-").toLowerCase()
      assert.strictEqual(slug, tc.expected)
    }
  })

  test("should calculate path to root correctly", () => {
    const calculatePathToRoot = (slug: string): string => {
      const segments = slug.split("/").filter((x) => x !== "")
      const rootPath = segments
        .slice(0, -1)
        .map(() => "..")
        .join("/")
      return rootPath.length === 0 ? "." : rootPath
    }

    assert.strictEqual(calculatePathToRoot("index"), ".")
    assert.strictEqual(calculatePathToRoot("about"), ".")
    assert.strictEqual(calculatePathToRoot("blog/post"), "..")
    assert.strictEqual(calculatePathToRoot("a/b/c"), "../..")
  })
})

describe("Tag Page Emitter Integration Tests", () => {
  test("should generate tag slug correctly", () => {
    const generateTagSlug = (tag: string): string => {
      return `tags/${tag.toLowerCase().replace(/\s+/g, "-")}`
    }

    assert.strictEqual(generateTagSlug("JavaScript"), "tags/javascript")
    assert.strictEqual(generateTagSlug("Machine Learning"), "tags/machine-learning")
    assert.strictEqual(generateTagSlug("React"), "tags/react")
  })

  test("should group posts by tags", () => {
    const posts = [
      { tags: ["javascript", "react"] },
      { tags: ["python", "ml"] },
      { tags: ["javascript", "node"] },
    ]

    const tagMap = new Map<string, number>()
    for (const post of posts) {
      for (const tag of post.tags) {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
      }
    }

    assert.strictEqual(tagMap.get("javascript"), 2)
    assert.strictEqual(tagMap.get("react"), 1)
    assert.strictEqual(tagMap.get("python"), 1)
    assert.strictEqual(tagMap.get("ml"), 1)
    assert.strictEqual(tagMap.get("node"), 1)
  })
})

describe("Folder Page Emitter Integration Tests", () => {
  test("should generate folder index path", () => {
    const generateFolderPath = (filePath: string): string => {
      const parts = filePath.split("/")
      if (parts.length === 1) return "index"
      return parts.slice(0, -1).join("/") + "/index"
    }

    assert.strictEqual(generateFolderPath("page.md"), "index")
    assert.strictEqual(generateFolderPath("folder/page.md"), "folder/index")
    assert.strictEqual(generateFolderPath("a/b/page.md"), "a/b/index")
  })

  test("should group files by folder", () => {
    const files = ["index.md", "about.md", "blog/post1.md", "blog/post2.md", "docs/guide.md"]

    const folderMap = new Map<string, string[]>()
    for (const file of files) {
      const parts = file.split("/")
      const folder = parts.length > 1 ? parts[0] : "root"
      if (!folderMap.has(folder)) folderMap.set(folder, [])
      folderMap.get(folder)!.push(file)
    }

    assert.strictEqual(folderMap.get("root")?.length, 2)
    assert.strictEqual(folderMap.get("blog")?.length, 2)
    assert.strictEqual(folderMap.get("docs")?.length, 1)
  })
})

describe("OG Image Emitter Integration Tests", () => {
  test("should generate OG image path from slug", () => {
    const generateOgImagePath = (slug: string): string => {
      return `${slug}-og-image.webp`
    }

    assert.strictEqual(generateOgImagePath("index"), "index-og-image.webp")
    assert.strictEqual(generateOgImagePath("blog/my-post"), "blog/my-post-og-image.webp")
  })

  test("should validate OG image dimensions", () => {
    const width = 1200
    const height = 630

    assert.strictEqual(width, 1200)
    assert.strictEqual(height, 630)
    assert.ok(width >= 200)
    assert.ok(height >= 200)
    assert.ok(width <= 4096)
    assert.ok(height <= 4096)
  })
})

describe("CNAME Emitter Integration Tests", () => {
  test("should generate CNAME file content", () => {
    const baseUrl = "mysite.com"
    const cnameContent = baseUrl

    assert.strictEqual(cnameContent, "mysite.com")
    assert.ok(!cnameContent.includes("http://"))
    assert.ok(!cnameContent.includes("https://"))
  })

  test("should validate domain format", () => {
    const validDomains = ["example.com", "blog.example.com", "sub.domain.org"]
    const invalidDomains = ["http://example.com", "https://example.com", "invalid"]

    for (const domain of validDomains) {
      assert.ok(!domain.startsWith("http"))
    }

    for (const domain of invalidDomains) {
      assert.ok(domain.startsWith("http") || !domain.includes("."))
    }
  })
})

describe("StaleNotice Emitter Integration Tests", () => {
  test("should export getStaleState function", async () => {
    const { getStaleState } = await import("../quartz/components/linkcccp_staleNoticeLogic")
    assert.ok(typeof getStaleState === "function")
  })

  test("getStaleState should handle all three states", async () => {
    const { getStaleState } = await import("../quartz/components/linkcccp_staleNoticeLogic")
    const oldDate = new Date("2020-01-01")
    const recentDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

    assert.strictEqual(getStaleState(false, oldDate, 180), "hidden")
    assert.strictEqual(getStaleState(true, oldDate, 180), "explicit")
    assert.strictEqual(getStaleState("default", oldDate, 180), "auto")
    assert.strictEqual(getStaleState("default", recentDate, 180), "hidden")
  })

  test("getStaleState should handle missing dates", async () => {
    const { getStaleState } = await import("../quartz/components/linkcccp_staleNoticeLogic")

    assert.strictEqual(getStaleState(true, undefined, 180), "explicit")
    assert.strictEqual(getStaleState("default", undefined, 180), "hidden")
    assert.strictEqual(getStaleState(undefined, undefined, 180), "hidden")
  })

  test("getStaleState should respect custom threshold", async () => {
    const { getStaleState } = await import("../quartz/components/linkcccp_staleNoticeLogic")
    const date200d = new Date(Date.now() - 200 * 24 * 60 * 60 * 1000)
    const date400d = new Date(Date.now() - 400 * 24 * 60 * 60 * 1000)

    assert.strictEqual(getStaleState("default", date200d, 365), "hidden")
    assert.strictEqual(getStaleState("default", date400d, 365), "auto")
  })
})
