import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// Paleta oficial da ELO. Os tons "fundo"/"escuro" são derivados do verde-agua #4A8B8B
// porque o verde oficial puro nao alcanca 4,5:1 com texto branco (mede 3,92:1) —
// ele fica como cor de marca e de acento, nao como fundo de texto corrido.
export default createVuetify({
  theme: {
    defaultTheme: 'elo',
    themes: {
      elo: {
        dark: false,
        colors: {
          primary: '#3D7676',
          secondary: '#FFD18B',
          background: '#EDE8DC',
          surface: '#F5F1E8',
          'on-primary': '#FFFFFF',
          'on-secondary': '#2C5757',
          'on-background': '#24403F',
          'on-surface': '#24403F',
          error: '#B3554B',
          success: '#4A8B6B',
        }
      }
    }
  },
  defaults: {
    // rounded 0 aqui + 4px via CSS: o default do Vuetify e arredondado demais para a marca
    VBtn: { ripple: true, rounded: 0 },
    VTextField: { variant: 'outlined', density: 'comfortable', color: 'primary', rounded: 0 },
    VSelect: { variant: 'outlined', density: 'comfortable', color: 'primary', rounded: 0 },
    VTextarea: { variant: 'outlined', density: 'comfortable', color: 'primary', rounded: 0 },
  }
})
