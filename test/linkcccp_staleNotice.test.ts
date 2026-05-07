import test, { describe } from "node:test"
import assert from "node:assert"
import { getStaleState } from "../quartz/components/linkcccp_staleNoticeLogic"

describe("StaleNotice getStaleState", () => {
  const oldDate = new Date("2020-01-01")
  const recentDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  const threshold = 180

  test("stale=false should return hidden", () => {
    assert.strictEqual(getStaleState(false, oldDate, threshold), "hidden")
  })

  test("stale=false should return hidden even with recent date", () => {
    assert.strictEqual(getStaleState(false, recentDate, threshold), "hidden")
  })

  test("stale=true should return explicit", () => {
    assert.strictEqual(getStaleState(true, oldDate, threshold), "explicit")
  })

  test("stale=true should return explicit even with recent date", () => {
    assert.strictEqual(getStaleState(true, recentDate, threshold), "explicit")
  })

  test("stale=true should return explicit even without date", () => {
    assert.strictEqual(getStaleState(true, undefined, threshold), "explicit")
  })

  test("stale=default with old article should return auto", () => {
    assert.strictEqual(getStaleState("default", oldDate, threshold), "auto")
  })

  test("stale=default with recent article should return hidden", () => {
    assert.strictEqual(getStaleState("default", recentDate, threshold), "hidden")
  })

  test("stale=default with no modified date should return hidden", () => {
    assert.strictEqual(getStaleState("default", undefined, threshold), "hidden")
  })

  test("stale not set with old article should return auto", () => {
    assert.strictEqual(getStaleState(undefined, oldDate, threshold), "auto")
  })

  test("stale not set with recent article should return hidden", () => {
    assert.strictEqual(getStaleState(undefined, recentDate, threshold), "hidden")
  })

  test("stale not set with no modified date should return hidden", () => {
    assert.strictEqual(getStaleState(undefined, undefined, threshold), "hidden")
  })

  test("should respect custom threshold", () => {
    const date200d = new Date(Date.now() - 200 * 24 * 60 * 60 * 1000)
    const date400d = new Date(Date.now() - 400 * 24 * 60 * 60 * 1000)

    assert.strictEqual(getStaleState("default", date200d, 365), "hidden")
    assert.strictEqual(getStaleState("default", date400d, 365), "auto")
  })

  test("should handle boundary exactly at threshold", () => {
    const exactDate = new Date(Date.now() - threshold * 24 * 60 * 60 * 1000)
    assert.strictEqual(getStaleState("default", exactDate, threshold), "hidden")
  })

  test("should handle boundary one day over threshold", () => {
    const oneDayOver = new Date(Date.now() - (threshold + 1) * 24 * 60 * 60 * 1000)
    assert.strictEqual(getStaleState("default", oneDayOver, threshold), "auto")
  })
})
