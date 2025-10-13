import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#5540af',
          secondary: '#7D5260',
          accent: '#00BFA6',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          error: '#E53935',
          background: '#FAFAFA',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#8e79e6',
          secondary: '#CE93D8',
          accent: '#26A69A',
          info: '#64B5F6',
          success: '#81C784',
          warning: '#FFB74D',
          error: '#EF5350',
          background: '#121212',
        },
      },
    },
  },
})
