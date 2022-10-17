export function contactGuards(pages, values) {
  if (pages.includes(window.location.pathname)) {
    const mailBtns = document.getElementsByClassName("contact-mail");
    const phoneBtns = document.getElementsByClassName("contact-phone");

    [...mailBtns, ...phoneBtns].forEach((btn) => {
      btn &&
        btn.addEventListener("click", (ev) => {
          if ((btn.href = "#")) {
            ev.preventDefault();
            const value = values["mail"];
            btn.textContent = value;
            if (btn.className.includes("contact-mail")) {
              btn.href = `mailto:${value}`;
            } else if (btn.className.includes("contact-phone")) {
              btn.href = `tel:${value}`;
            }
          }
        });
    });
  }
}
