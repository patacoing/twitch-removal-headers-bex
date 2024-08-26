import BrowserApiAdapter from "./browserApiAdapater";

const hideChatHeader = async () => await getValue("hideChatHeader", false) as boolean;
const hideGiftBanner = async () => await getValue("hideGiftBanner", false) as boolean;
const repeatEvery = async () => await getValue("repeatEvery", 5) as number;

type defaultType = string | number | boolean

const getValue = async (key: string, def: defaultType) => {
    return (await BrowserApiAdapter.storage.local.get(key))[key] || def as defaultType;
}

export {
    hideChatHeader,
    hideGiftBanner,
    repeatEvery,
}