// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    theme: {
      themes: {
        light: {
          dark: true,
          colors: {
            primary: "#4285f4",
            background: "#040402"
          }
        },
      },
    },
  }
)
