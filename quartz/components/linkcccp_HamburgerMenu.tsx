import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { concatenateResources } from "../util/resources"
import ExplorerFactory, { defaultOptions as explorerDefaults } from "./Explorer"
import RecentNotesFactory from "./RecentNotes"
import style from "./styles/explorer.scss"
import recentNotesStyle from "./styles/linkcccp_recentNotes.scss"

interface Options {
  explorerTitle?: string
  recentNotesTitle?: string
  recentNotesLimit?: number
  showTags?: boolean
}

const defaultOptions: Options = {
  recentNotesLimit: 10,
  showTags: false,
}

export default ((userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const explorerInstance = ExplorerFactory({ bare: true })
  const recentNotesInstance = RecentNotesFactory({
    title: opts.recentNotesTitle,
    limit: opts.recentNotesLimit,
    showTags: opts.showTags,
  })

  const HamburgerMenu: QuartzComponent = (props: QuartzComponentProps) => {
    const { cfg, displayClass } = props
    const BareExplorer = explorerInstance
    const RecentNotesComp = recentNotesInstance
    return (
      <div
        class={classNames(displayClass, "explorer")}
        data-behavior={explorerDefaults.folderClickBehavior}
        data-collapsed={explorerDefaults.folderDefaultState}
        data-savestate={explorerDefaults.useSavedState}
        data-data-fns={JSON.stringify({
          order: explorerDefaults.order,
          sortFn: explorerDefaults.sortFn.toString(),
          filterFn: explorerDefaults.filterFn.toString(),
          mapFn: explorerDefaults.mapFn.toString(),
        })}
      >
        <button type="button" class="explorer-toggle mobile-explorer hide-until-loaded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <button
          type="button"
          class="title-button explorer-toggle desktop-explorer"
          data-mobile={false}
          aria-expanded={true}
        >
          <h2>{opts.explorerTitle ?? i18n(cfg.locale).components.explorer.title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="5 8 14 8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fold"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="explorer-drawer">
          <BareExplorer {...props} />
          <RecentNotesComp {...props} />
        </div>
      </div>
    )
  }

  HamburgerMenu.css = concatenateResources(style, recentNotesStyle)
  HamburgerMenu.beforeDOMLoaded = concatenateResources(
    explorerInstance.beforeDOMLoaded,
    recentNotesInstance.beforeDOMLoaded,
  )
  HamburgerMenu.afterDOMLoaded = concatenateResources(
    explorerInstance.afterDOMLoaded,
    recentNotesInstance.afterDOMLoaded,
  )
  return HamburgerMenu
}) satisfies QuartzComponentConstructor
