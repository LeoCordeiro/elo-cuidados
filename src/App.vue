<template>
  <v-app style="background: var(--elo-papel)">
    <SiteHeader />
    <v-main style="background: transparent">
      <!-- Sem <Transition mode="out-in">: ele depende de rAF e trava a navegacao
           quando a aba nao esta pintando. A key remonta a pagina e a animacao de
           entrada e puro CSS. -->
      <div :key="route.path" class="pagina-entra">
        <router-view />
      </div>
    </v-main>
    <SiteFooter />

    <a :href="wa" target="_blank" rel="noopener"
       class="wa-flutuante" aria-label="Falar com a ELO no WhatsApp">
      <v-icon size="28" color="white">mdi-whatsapp</v-icon>
      <span class="wa-rotulo">Falar com a ELO</span>
    </a>
  </v-app>
</template>

<script setup>
import { useRoute } from 'vue-router'
import SiteHeader from '@/components/Header.vue'
import SiteFooter from '@/components/Footer.vue'
import { waLink } from '@/config/contato'

const route = useRoute()
const wa = waLink()
</script>

<style>
.pagina-entra { animation: pagina-fade 200ms cubic-bezier(0.16, 1, 0.3, 1) both; }
@keyframes pagina-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.wa-flutuante {
  position: fixed; bottom: 20px; right: 20px; z-index: 900;
  display: inline-flex; align-items: center; gap: 0;
  height: 56px; min-width: 56px; padding: 0 14px;
  /* Verde escurecido de proposito: o #25D366 da marca do WhatsApp da 2,0:1 com
     texto branco e o #1F8C4D ainda dava 4,27:1. Este mede 5,40:1. */
  border-radius: var(--radius); background: #157A40; text-decoration: none;
  box-shadow: 0 8px 22px rgba(30, 68, 68, 0.26);
  transition: background-color var(--dur-hover) var(--ease-out);
}
.wa-flutuante:hover { background: #0F5E31; }
/* O rótulo fica visível no desktop e o botão vira só ícone no mobile.
   A versão que expandia no hover animava max-width e margin, o que dispara
   layout a cada frame. */
.wa-rotulo {
  color: #fff; font-weight: 500; font-size: 0.94rem; white-space: nowrap;
  margin-left: 10px;
}
@media (max-width: 899px) {
  .wa-rotulo { display: none; }
  .wa-flutuante { padding: 0; width: 56px; justify-content: center; }
}
@media (max-width: 599px) { .wa-flutuante { bottom: 16px; right: 16px; } }

@media (prefers-reduced-motion: reduce) {
  .pagina-entra { animation: none; }
}
</style>
