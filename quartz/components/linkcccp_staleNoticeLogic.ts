export function getStaleState(
  staleFlag: unknown,
  modified: Date | undefined,
  threshold: number,
): "hidden" | "explicit" | "auto" {
  if (staleFlag === false) return "hidden"
  if (staleFlag === true) return "explicit"
  if (!modified) return "hidden"
  const daysSince = Math.floor((Date.now() - modified.getTime()) / (1000 * 60 * 60 * 24))
  if (daysSince <= threshold) return "hidden"
  return "auto"
}
