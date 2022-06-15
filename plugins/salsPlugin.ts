import axios from "axios";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            getSalsDlUrl: async () => {
                const providerInfo = (await axios.get(
                    `https://update.sals-app.com/latest.yml`
                )).data;

                const regex = /path: ?([-0-9a-zA-Z .,]){1,420}/gm;
                let m: any;

                while ((m = regex.exec(providerInfo.toString())) !== null) {
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    return ('https://update.sals-app.com/' + m[0].substring(6));
                }

                return '';
            }
        }
    }
})