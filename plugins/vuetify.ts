import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const dark = {
        dark: true,
        colors: {
            background: '#040402',
            surface: '#000000',
            primary: '#4285f4',
            secondary: '#03DAC6',
            'on-surface': "#000000"
        }
    }

    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'dark',
            themes: {
                dark
            },
        },
        ssr: true,
    });

    nuxtApp.vueApp.use(vuetify);
})