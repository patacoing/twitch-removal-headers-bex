import {
    hideChatHeader,
    hideGiftBanner,
    repeatEvery
} from "./getData.js";

const sendMessageToCurrentTab = async message => {
    const [{id, url}] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tabUrlContainsTwitch(url))
        return;

    await chrome.tabs.sendMessage(id, message);
}

const tabUrlContainsTwitch = url => url.includes("twitch.tv");

const sendRestartMessage = async () => await sendMessageToCurrentTab({
    action: "restart", 
    data: {
        hideChatHeader: await hideChatHeader(),
        hideGiftBanner: await hideGiftBanner(),
        repeatEvery: await repeatEvery()
    } 
});

export {
    sendRestartMessage
};
