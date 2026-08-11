import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './assets/theme.css'
import animate from './directives/animateOnScroll'

createApp(App)
  .directive('animate', animate)
  .use(router)
  .use(vuetify)
  .mount('#app')
