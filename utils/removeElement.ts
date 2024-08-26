class RemoveElementEveryXSeconds {
    _cssSelectors: string[] = [];
    _intervalTime: number = 5;
    _id: number | undefined = undefined;

    set cssSelectors(newCssSelectors: string[]) {
        this._cssSelectors = newCssSelectors
    }

    set intervalTime(newIntervalTime: number) {
        this._intervalTime = newIntervalTime
    }

    start() {
        console.log(`start with interval time : ${this._intervalTime}`);
        this._id = setInterval(() => {
            this._cssSelectors.forEach(this.#removeElement);
        }, this._intervalTime);
    }

    #removeElement(cssSelector: string) {
        const element = document.querySelector(cssSelector);
        element?.remove();
    }

    stop() {
        clearInterval(this._id);
    }
}

export default RemoveElementEveryXSeconds;