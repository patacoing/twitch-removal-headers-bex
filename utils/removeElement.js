globalThis.removeElement = cssSelector => {
    const element = document.querySelector(cssSelector);
    element?.remove();
};