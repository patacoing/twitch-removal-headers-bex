import browser from "webextension-polyfill";

interface TabQuery {
    active: boolean,
    currentWindow: boolean
}

interface Tab {
    id: number,
    url: string
}

interface IBrowserApiDatapter {
    runtime: {
        onMessage: {
            addListener: (callback: any) => void
        },
    }
    storage: {
        local: {
            get: (key: string) => Promise<any>,
            set: (message: any) => Promise<void>
        }
    },
    tabs: {
        sendMessage: (tabId: number, message: any) => Promise<any>,
        query: (options: TabQuery) => Promise<Tab[]>
    }
}

class BrowserApiAdapter implements IBrowserApiDatapter {

    runtime =  {
        onMessage: { 
            addListener(callback: any) {
                browser.runtime.onMessage.addListener(callback)
            }
        }
    }
    
    storage = {
        local: {
            async get(key: string) {
                return await browser.storage.local.get(key) as any
            },
            async set(message: any) {
                return await browser.storage.local.set(message)
            }
        }
    }

    tabs = {
        async sendMessage(tabId: number, message: any) {
            return await browser.tabs.sendMessage(tabId, message)
        },
        async query(options: TabQuery) {
            return await browser.tabs.query(options) as Tab[]
        }
    }
}

export default new BrowserApiAdapter()