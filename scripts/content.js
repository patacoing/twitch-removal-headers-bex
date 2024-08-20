window.addEventListener("load", () => {
    globalThis.removeElementsEvery5Seconds([
        ".stream-chat-header",
        ".chat-room__content > .Layout-sc-1xcs6mc-0:first-child"
    ])
},false);