import { hideChatHeader, hideGiftBanner, repeatEvery } from "../utils/getData.js";
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


    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        const activeTab = tabs[0].id;
    
        chrome.tabs.sendMessage(
            activeTab, 
            { 
                action: "restart", 
                data: {
                    hideChatHeader: await hideChatHeader(),
                    hideGiftBanner: await hideGiftBanner(),
                    repeatEvery: await repeatEvery()
                } 
            }
        );
    });
}