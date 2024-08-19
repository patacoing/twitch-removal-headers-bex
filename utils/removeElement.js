const removeElement = cssSelector => {
    const element = document.querySelector(cssSelector);
    element?.remove();
};

const removeElementsEvery5Seconds = cssSelectors => {
    cssSelectors.forEach(removeElement);
    setInterval(() => {
        cssSelectors.forEach(removeElement);
    }, 5000);
}

globalThis.removeElementsEvery5Seconds = removeElementsEvery5Seconds;