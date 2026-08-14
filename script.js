document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn--animated");

  if (btn) {
    btn.addEventListener("click", () => {
      document.getElementById("section-tours")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
