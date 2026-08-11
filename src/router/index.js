import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Familia from '@/pages/Familia.vue'
import Cuidador from '@/pages/Cuidador.vue'
import Sobre from '@/pages/Sobre.vue'
import Contato from '@/pages/Contato.vue'
import PoliticaPrivacidade from '@/pages/PoliticaPrivacidade.vue'
import PoliticaTermosDeUso from '@/pages/PoliticaTermosDeUso.vue'
import PoliticaRepasse from '@/pages/PoliticaRepasse.vue'

const routes = [
  { path: '/', component: Home, meta: { titulo: 'ELO — confiança e cuidado' } },
  { path: '/preciso-de-cuidador', component: Familia, meta: { titulo: 'Preciso de um cuidador | ELO' } },
  { path: '/seja-cuidador', component: Cuidador, meta: { titulo: 'Seja um cuidador ELO' } },
  { path: '/sobre', component: Sobre, meta: { titulo: 'Sobre a ELO' } },
  { path: '/contato', component: Contato, meta: { titulo: 'Contato | ELO' } },
  { path: '/privacidade', component: PoliticaPrivacidade, meta: { titulo: 'Política de privacidade | ELO' } },
  { path: '/termos', component: PoliticaTermosDeUso, meta: { titulo: 'Termos de uso | ELO' } },
  { path: '/repasse', component: PoliticaRepasse, meta: { titulo: 'Política de repasse | ELO' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})

router.afterEach((to) => {
  if (to.meta?.titulo) document.title = to.meta.titulo
})

export default router
