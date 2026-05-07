import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "zh-CN",
    baseUrl: "www.linkcf.top",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: { name: "Inter", weights: [400, 600, 700], includeItalic: false },
        body: { name: "Inter", weights: [400, 500, 600], includeItalic: true },
        code: { name: "JetBrains Mono", weights: [400, 500], includeItalic: false },
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e1dfdd",
          gray: "#707070",
          darkgray: "#242424",
          dark: "#0f0f0f",
          secondary: "#0f6cbd",
          tertiary: "#115ea3",
          highlight: "rgba(0,0,0,.04)",
          textHighlight: "rgba(15,108,189,.2)",
        },
        darkMode: {
          light: "#1f1f1f",
          lightgray: "#484644",
          gray: "#adadad",
          darkgray: "#f5f5f5",
          dark: "#ffffff",
          secondary: "#479ef5",
          tertiary: "#62abf5",
          highlight: "rgba(255,255,255,.06)",
          textHighlight: "rgba(71,158,245,.25)",
        },
      },
    },
    pwa: {
      enabled: true,
      name: "Link's Digital Garden",
      shortName: "Garden",
      description: "A personal digital garden built with Quartz",
      themeColor: "#284b63",
      backgroundColor: "#faf8f8",
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["git", "frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
      Plugin.LinkcccpPWA(),
    ],
  },
}

export default config
