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
            addListener: (callback: (message: any) => void) => void
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

class ChromeBrowserApiAdapter implements IBrowserApiDatapter {

    runtime =  {
        onMessage: { 
            addListener(callback: (message: any) => void) {
                chrome.runtime.onMessage.addListener(callback)
            }
        }
    }
    
    storage = {
        local: {
            async get(key: string) {
                return await chrome.storage.local.get(key)
            },
            async set(message: any) {
                return await chrome.storage.local.set(message)
            }
        }
    }

    tabs = {
        async sendMessage(tabId: number, message: any) {
            return await chrome.tabs.sendMessage(tabId, message)
        },
        async query(options: TabQuery) {
            return await chrome.tabs.query(options) as Tab[]
        }
    }
}

export default new ChromeBrowserApiAdapter()