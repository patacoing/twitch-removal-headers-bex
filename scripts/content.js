window.addEventListener("load", event => {
    window.removeEventListener("load", load, false); 
 
    globalThis.removeElement(".stream-chat-header")
    globalThis.removeElement(".chat-room__content > .Layout-sc-1xcs6mc-0:first-child")
},false);