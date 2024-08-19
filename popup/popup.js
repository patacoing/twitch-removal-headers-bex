import {
    hideChatHeader,
    hideGiftBanner,
    repeatEvery
} from "../utils/getData.js";

window.onload = async () => {
    console.log("loaded");
    const toggleHideChatHeader = document.querySelector("#toggle-chat-header");
    const toggleGiftBanner = document.querySelector("#toggle-gift-banner");
    const repeatEveryInput = document.querySelector("#repeat-every");

    console.log(toggleHideChatHeader);
    console.log(await hideChatHeader());

    toggleHideChatHeader.value = await hideChatHeader();
    toggleGiftBanner.value = await hideGiftBanner();
    repeatEveryInput.value = await repeatEvery()
}