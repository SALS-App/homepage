import { IDownloadManifest } from "~~/interfaces/IDownloadManifest";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            getDownloadManifest: async (): Promise<IDownloadManifest> => {
                return await (await fetch(`https://update.sals-app.com/latest.json`)).json();
            }
        }
    }
})