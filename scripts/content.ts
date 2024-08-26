import RemoveElementEveryXSeconds from "../utils/removeElement";
import { Message, Actions } from "../utils/types";
import ChromeBrowserApiAdapter from "../utils/browserApiAdapater";

window.addEventListener("load", async () => {    
    const removeElementsEvery5Seconds = new RemoveElementEveryXSeconds();

    ChromeBrowserApiAdapter.runtime.onMessage.addListener((message: Message) => {        
        const { action, data: {hideChatHeader, hideGiftBanner, repeatEvery} } = message;

        if (action !== Actions.RESTART)
            return;

        const cssSelectors = [];

        if (hideChatHeader)
            cssSelectors.push(".stream-chat-header")
        if (hideGiftBanner)
            cssSelectors.push(".chat-room__content > .Layout-sc-1xcs6mc-0:first-child");
        
        removeElementsEvery5Seconds.stop();

        removeElementsEvery5Seconds.cssSelectors = cssSelectors;
        removeElementsEvery5Seconds.intervalTime = repeatEvery;
        
        removeElementsEvery5Seconds.start()

    })
},false);