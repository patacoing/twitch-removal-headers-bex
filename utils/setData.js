import {
    hideChatHeader,
    hideGiftBanner,
    repeatEvery
} from "./getData.js";


const setValue = async (key, value) => await chrome.storage.local.set({[key]: value});

const setHideChatHeader = async value => await setValue("hideChatHeader", value);
const setHideGiftBanner = async value => await setValue("hideGiftBanner", value);
const setRepeatEvery = async value => await setValue("repeatEvery", value);

const initializeData = async (toggleHideChatHeader, toggleGiftBanner, repeatEveryInput) => {
    toggleHideChatHeader.checked = await hideChatHeader();
    toggleGiftBanner.checked = await hideGiftBanner();
    repeatEveryInput.value = await repeatEvery()
}

const setListeners = async (toggleHideChatHeader, toggleGiftBanner, repeatEveryInput) => {
    toggleHideChatHeader.onclick = async () => await setHideChatHeader(toggleHideChatHeader.checked);
    toggleGiftBanner.onclick = async () => await setHideGiftBanner(toggleGiftBanner.checked);
    repeatEveryInput.onchange = async () => await setRepeatEvery(repeatEveryInput.value);
}

export {
    initializeData,
    setListeners,
}