import {
    initializeData,
    setListeners,
} from "../utils/setData.js";

window.onload = async () => {
    const toggleHideChatHeader = document.querySelector("#toggle-chat-header");
    const toggleGiftBanner = document.querySelector("#toggle-gift-banner");
    const repeatEveryInput = document.querySelector("#repeat-every");

    await initializeData(toggleHideChatHeader, toggleGiftBanner, repeatEveryInput);
    await setListeners(toggleHideChatHeader, toggleGiftBanner, repeatEveryInput);
}