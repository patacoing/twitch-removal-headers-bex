window.addEventListener("load", async () => {    
    const removeElementsEvery5Seconds = new globalThis.RemoveElementEveryXSeconds();

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {        
        const { action, data } = message

        if (action !== "restart")
            return;

        const { hideChatHeader, hideGiftBanner, repeatEvery } = data;
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