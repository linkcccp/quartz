import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/linkcccp_staleNotice.scss"
import { formatDate } from "./Date"
import { i18n } from "../i18n"
import { getStaleState } from "./linkcccp_staleNoticeLogic"

interface StaleNoticeOptions {
  threshold: number
}

const defaultOptions: StaleNoticeOptions = {
  threshold: 180,
}

export default ((opts?: Partial<StaleNoticeOptions>) => {
  const options = { ...defaultOptions, ...opts }

  function StaleNotice({ cfg, fileData }: QuartzComponentProps) {
    const staleFlag = fileData.frontmatter?.stale
    const modified = fileData.dates?.modified
    const state = getStaleState(staleFlag, modified, options.threshold)

    if (state === "hidden") return null

    const modifiedDate = modified ? formatDate(modified, cfg.locale) : ""
    const i18nKey =
      state === "explicit"
        ? i18n(cfg.locale).components.staleNotice.explicitStale
        : i18n(cfg.locale).components.staleNotice.autoStale
    const nowDays = modified
      ? Math.floor((Date.now() - modified.getTime()) / (1000 * 60 * 60 * 24))
      : 0

    return (
      <div class="stale-notice stale-danger">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
            fill="currentColor"
          />
        </svg>
        <span>{i18nKey({ date: modifiedDate, days: nowDays })}</span>
      </div>
    )
  }

  StaleNotice.css = style
  return StaleNotice
}) satisfies QuartzComponentConstructor
