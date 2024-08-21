window.addEventListener("load", async () => {    
    const removeElementsEvery5Seconds = new globalThis.RemoveElementEveryXSeconds();

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {        
        removeElementsEvery5Seconds.stop();
        removeElementsEvery5Seconds.cssSelectors = [
            ".stream-chat-header",
            ".chat-room__content > .Layout-sc-1xcs6mc-0:first-child"
        ]
        removeElementsEvery5Seconds.intervalTime = 3;
        
        removeElementsEvery5Seconds.start()

    })
},false);