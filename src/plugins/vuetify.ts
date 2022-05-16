// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

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

export default createVuetify(
  {
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark
      },
    },
  }
)
