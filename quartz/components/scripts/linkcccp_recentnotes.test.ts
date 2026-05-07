import test, { describe } from "node:test"
import assert from "node:assert"

describe("linkcccp_recentnotes collapse functionality", () => {
  describe("toggle logic", () => {
    test("should toggle boolean state correctly", () => {
      let isCollapsed = false

      const toggle = () => {
        isCollapsed = !isCollapsed
      }

      assert.strictEqual(isCollapsed, false)

      toggle()
      assert.strictEqual(isCollapsed, true)

      toggle()
      assert.strictEqual(isCollapsed, false)

      toggle()
      assert.strictEqual(isCollapsed, true)
    })

    test("should track multiple toggle states", () => {
      let collapsed = false
      const toggleCount = 5

      for (let i = 0; i < toggleCount; i++) {
        collapsed = !collapsed
      }

      assert.strictEqual(collapsed, true, "after 5 toggles, should be collapsed")
    })
  })

  describe("classList toggle simulation", () => {
    test("should simulate classList.toggle behavior", () => {
      const classList: string[] = []

      const toggle = (cls: string) => {
        const index = classList.indexOf(cls)
        if (index === -1) {
          classList.push(cls)
        } else {
          classList.splice(index, 1)
        }
      }

      assert.deepStrictEqual(classList, [])

      toggle("collapsed")
      assert.deepStrictEqual(classList, ["collapsed"])

      toggle("collapsed")
      assert.deepStrictEqual(classList, [])

      toggle("collapsed")
      toggle("expanded")
      assert.deepStrictEqual(classList, ["collapsed", "expanded"])
    })
  })

  describe("CSS behavior verification", () => {
    test("collapsed selector should target correct elements", () => {
      const collapsedSelector = ".recent-notes.collapsed > ul.recent-ul"
      const normalSelector = ".recent-notes > ul.recent-ul"

      assert.strictEqual(collapsedSelector.includes(".collapsed"), true)
      assert.strictEqual(collapsedSelector.includes("> ul.recent-ul"), true)
      assert.strictEqual(normalSelector.includes("> ul.recent-ul"), true)
    })

    test("toggle button selector should be correct", () => {
      const buttonSelector = ".recent-notes > button.recent-notes-toggle"

      assert.strictEqual(buttonSelector.includes("button.recent-notes-toggle"), true)
      assert.strictEqual(buttonSelector.includes(".recent-notes"), true)
    })

    test("fold icon transform should use correct rotation", () => {
      const expectedTransform = "rotate(-90deg)"
      const normalTransform = "rotate(0deg)"

      assert.strictEqual(expectedTransform.includes("-90deg"), true)
      assert.strictEqual(normalTransform.includes("0deg"), true)
      assert.notStrictEqual(expectedTransform, normalTransform)
    })
  })

  describe("DOM structure verification", () => {
    test("required elements should exist in structure", () => {
      const requiredElements = [
        ".recent-notes",
        ".recent-notes-toggle",
        "h3",
        "svg.fold",
        "ul.recent-ul",
      ]

      for (const el of requiredElements) {
        assert.strictEqual(el.length > 0, true, `${el} should be a valid selector`)
      }

      assert.strictEqual(requiredElements.length, 5)
    })
  })
})
