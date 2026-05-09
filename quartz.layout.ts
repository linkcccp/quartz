import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "linkcccp/BlogTalk",
        repoId: "R_kgDOMqZVXQ",
        category: "General",
        categoryId: "DIC_kwDOMqZVXc4CiEPV",
        lang: "zh-CN",
        mapping: "pathname",
        inputPosition: "top",
        reactionsEnabled: true,
        strict: false,
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/linkcccp/quartz",
      Email: "mailto:winstonforwork@outlook.com",
      RSS: "/index.xml",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.StaleNotice({ threshold: 180 }),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.HamburgerMenu({
      explorerTitle: "目录",
      recentNotesTitle: "最近更新",
      recentNotesLimit: 10,
      showTags: false,
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.HamburgerMenu({
      explorerTitle: "目录",
      recentNotesTitle: "最近更新",
      recentNotesLimit: 10,
      showTags: false,
    }),
  ],
  right: [],
}
