import {
    hideChatHeader,
    hideGiftBanner,
    repeatEvery
} from "./getData.js";

import {
    sendRestartMessage
} from "./sendMessage.js";


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
    toggleHideChatHeader.onclick = async () => await setDataAndRestart(setHideChatHeader, toggleHideChatHeader.checked);
    toggleGiftBanner.onclick = async () => await setDataAndRestart(setHideGiftBanner, toggleGiftBanner.checked);
    repeatEveryInput.onchange = async () => await setDataAndRestart(setRepeatEvery, repeatEveryInput.value);
}

const setDataAndRestart = async (setValueCallback, value) => {
    await setValueCallback(value);
    await sendRestartMessage();
}

export {
    initializeData,
    setListeners,
}