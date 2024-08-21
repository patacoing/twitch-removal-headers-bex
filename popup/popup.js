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


    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let activeTab = tabs[0].id;
    
        // Send a message to the content script
        chrome.tabs.sendMessage(activeTab, { action: "hello", data: "Hello from Popup" });
    });
}