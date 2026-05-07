document.addEventListener("nav", () => {
  document.querySelectorAll(".recent-notes").forEach((el) => {
    const button = el.querySelector(".recent-notes-toggle")
    if (!button) return

    const toggleHandler = () => {
      el.classList.toggle("collapsed")
    }

    button.addEventListener("click", toggleHandler)
    window.addCleanup(() => button.removeEventListener("click", toggleHandler))
  })
})
