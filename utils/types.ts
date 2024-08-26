enum Actions {
    RESTART = "restart",
}

interface MessageData {
    hideChatHeader: boolean | undefined,
    hideGiftBanner: boolean | undefined,
    repeatEvery: number,
}

interface Message {
    action: Actions,
    data: MessageData
}

export {
    Message,
    Actions
}