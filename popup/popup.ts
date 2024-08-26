import { initializeData, setListeners } from "../utils/setData";
import { sendRestartMessage } from "../utils/sendMessage";

window.onload = async () => {
    const toggleHideChatHeader = document.querySelector("#toggle-chat-header") as HTMLInputElement;
    const toggleGiftBanner = document.querySelector("#toggle-gift-banner") as HTMLInputElement;
    const repeatEveryInput = document.querySelector("#repeat-every") as HTMLInputElement;

    await initializeData(toggleHideChatHeader, toggleGiftBanner, repeatEveryInput);
    await setListeners(toggleHideChatHeader, toggleGiftBanner, repeatEveryInput);

    sendRestartMessage();
}