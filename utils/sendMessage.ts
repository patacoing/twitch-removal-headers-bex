import { hideChatHeader, hideGiftBanner, repeatEvery } from "./getData";
import { Message, Actions } from "./types";
import { TWITCH_HOST } from "./constants";

const sendMessageToCurrentTab = async (message: Message) => {
    const [{id, url}] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (id === undefined || url == undefined)
        return;

    if (!tabUrlContainsTwitch(url))
        return;

    await chrome.tabs.sendMessage(id, message);
}

const tabUrlContainsTwitch = (url: string) => url.includes(TWITCH_HOST);

const sendRestartMessage = async () => await sendMessageToCurrentTab({
    action: Actions.RESTART, 
    data: {
        hideChatHeader: await hideChatHeader(),
        hideGiftBanner: await hideGiftBanner(),
        repeatEvery: await repeatEvery()
    } 
});

export {
    sendRestartMessage
};
