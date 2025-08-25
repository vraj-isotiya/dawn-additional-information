(() => {
  const items = document.querySelectorAll("[data-accordion-block]");
  if (!items.length) return;

  document.addEventListener(
    "toggle",
    (ev) => {
      const target = ev.target;
      if (!(target instanceof HTMLDetailsElement)) return;
      if (!target.hasAttribute("data-accordion-block") || !target.open) return;

      items.forEach((item) => {
        if (item !== target && item.open) item.open = false;
      });
    },
    true
  );
})();
