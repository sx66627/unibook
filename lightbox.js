(() => {
  const root = document.getElementById("lightbox");
  if (!root) return;

  const dialog = root.querySelector(".lightbox-dialog");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  const closeBtn = root.querySelector(".lightbox-close");
  const triggers = [...document.querySelectorAll(".shot-open")];
  let lastFocus = null;

  function open(trigger) {
    const src = trigger.dataset.lightboxSrc;
    if (!src) return;

    lastFocus = trigger;
    image.src = src;
    image.alt = trigger.dataset.lightboxAlt || "";

    const figure = trigger.closest(".shot");
    const figcaption = figure?.querySelector("figcaption");
    caption.textContent = figcaption?.textContent?.trim() || "";

    root.hidden = false;
    document.body.classList.add("lightbox-open");
    (closeBtn || dialog).focus();
  }

  function close() {
    if (root.hidden) return;
    root.hidden = true;
    document.body.classList.remove("lightbox-open");
    image.removeAttribute("src");
    image.alt = "";
    caption.textContent = "";
    lastFocus?.focus();
    lastFocus = null;
  }

  triggers.forEach((btn) => {
    btn.addEventListener("click", () => open(btn));
  });

  root.querySelectorAll("[data-lightbox-close]").forEach((el) => {
    el.addEventListener("click", close);
  });

  document.addEventListener("keydown", (event) => {
    if (root.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  });
})();
