const hideChatHeader = async () => await getValue("hideChatHeader", false);
const hideGiftBanner = async () => await getValue("hideGiftBanner", false);
const repeatEvery = async () => await getValue("repeatEvery", 5);

const getValue = async (key, def) => (await chrome.storage.local.get(key))[key] || def

export {
    hideChatHeader,
    hideGiftBanner,
    repeatEvery,
}