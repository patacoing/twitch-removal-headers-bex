import {
    hideChatHeader,
    hideGiftBanner,
    repeatEvery
} from "./getData.js";

const RESTART_ACTION = "restart";
const TWITCH_HOST = "twitch.tv";

const sendMessageToCurrentTab = async message => {
    const [{id, url}] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tabUrlContainsTwitch(url))
        return;

    await chrome.tabs.sendMessage(id, message);
}

const tabUrlContainsTwitch = url => url.includes(TWITCH_HOST);

const sendRestartMessage = async () => await sendMessageToCurrentTab({
    action: RESTART_ACTION, 
    data: {
        hideChatHeader: await hideChatHeader(),
        hideGiftBanner: await hideGiftBanner(),
        repeatEvery: await repeatEvery()
    } 
});

export {
    sendRestartMessage
};
