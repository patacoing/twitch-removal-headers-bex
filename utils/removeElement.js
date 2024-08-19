globalThis.removeElement = cssSelector => {
    console.log("coucou")
    const element = document.querySelector(cssSelector);
    element?.remove();
};