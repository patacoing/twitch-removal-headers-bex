class RemoveElementEveryXSeconds {
    set cssSelectors(newCssSelectors) {
        this._cssSelectors = newCssSelectors
    }

    set intervalTime(newIntervalTime) {
        this._intervalTime = newIntervalTime
    }

    start() {
        console.log(`start with interval time : ${this._intervalTime}`);
        this._id = setInterval(() => {
            this._cssSelectors.forEach(this.#removeElement);
        }, this._intervalTime);
    }

    #removeElement(cssSelector) {
        const element = document.querySelector(cssSelector);
        element?.remove();
    }

    stop() {
        clearInterval(this._id);
    }
}

globalThis.RemoveElementEveryXSeconds = RemoveElementEveryXSeconds