import ChromeBrowserApiAdapter from "./browserApiAdapater";

import {
    hideChatHeader,
    hideGiftBanner,
    repeatEvery
} from "./getData";

import {
    sendRestartMessage
} from "./sendMessage";

interface CallbackOneParam<T1, T2 = void> {
    (value: T1): T2;
  }

const setValue = async (key: string, value: boolean | number) => await ChromeBrowserApiAdapter.storage.local.set({[key]: value});

const setHideChatHeader = async (value: boolean) => await setValue("hideChatHeader", value);
const setHideGiftBanner = async (value: boolean) => await setValue("hideGiftBanner", value);
const setRepeatEvery = async (value: number) => await setValue("repeatEvery", value);

const initializeData = async (toggleHideChatHeader: HTMLInputElement, toggleGiftBanner: HTMLInputElement, repeatEveryInput: HTMLInputElement) => {
    toggleHideChatHeader.checked = await hideChatHeader();
    toggleGiftBanner.checked = await hideGiftBanner();
    repeatEveryInput.value = await repeatEvery()
}

const setListeners = async (toggleHideChatHeader: HTMLInputElement, toggleGiftBanner: HTMLInputElement, repeatEveryInput: HTMLInputElement) => {
    toggleHideChatHeader.onclick = async () => await setDataAndRestart(setHideChatHeader, toggleHideChatHeader.checked);
    toggleGiftBanner.onclick = async () => await setDataAndRestart(setHideGiftBanner, toggleGiftBanner.checked);
    repeatEveryInput.onchange = async () => await setDataAndRestart(setRepeatEvery, parseInt(repeatEveryInput.value));
}

const setDataAndRestart = async (setValueCallback: CallbackOneParam<any>, value: number | boolean) => {
    await setValueCallback(value);
    await sendRestartMessage();
}

export {
    initializeData,
    setListeners,
}