const hideChatHeader = async () => await getValue("hideChatHeader", false);
const hideGiftBanner = async () => await getValue("hideGiftBanner", false);
const repeatEvery = async () => await getValue("repeatEvery", 5);

const getValue = async (key, def) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get([key], result => {
            if (result[key] === undefined)
                resolve(def)
            else
                resolve(result[key])
        });
    });
}

export {
    hideChatHeader,
    hideGiftBanner,
    repeatEvery
}