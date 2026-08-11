<template>
  <!-- Header proprio em vez de <v-app-bar>: a app-bar do Vuetify empurra o <v-main>
       com padding-top e a faixa do shell aparece como uma costura acima do hero. -->
  <header class="elo-header" :class="{ 'is-solido': solido }">
    <div class="elo-header-inner">
      <router-link to="/" class="marca" aria-label="ELO — página inicial">
        <EloSymbol :size="46" :cor="solido ? '#3D7676' : '#FFD18B'" />
        <span class="marca-texto">
          <span class="marca-nome">ELO</span>
          <span class="marca-tag t-tagline">confiança e cuidado</span>
        </span>
      </router-link>

      <nav class="nav-desktop" aria-label="Navegação principal">
        <router-link to="/preciso-de-cuidador" class="nav-link">Preciso de um cuidador</router-link>
        <router-link to="/seja-cuidador" class="nav-link">Seja um cuidador</router-link>
        <router-link to="/sobre" class="nav-link">Sobre</router-link>
        <router-link to="/contato" class="nav-link">Contato</router-link>
      </nav>

      <router-link to="/preciso-de-cuidador" class="nav-cta">
        Solicitar cuidador
        <span class="seta" aria-hidden="true">→</span>
      </router-link>

      <button class="menu-btn" type="button" @click="drawer = true"
              aria-label="Abrir menu de navegação">
        <v-icon size="30">mdi-menu</v-icon>
      </button>
    </div>
  </header>

  <v-navigation-drawer v-model="drawer" temporary location="right" width="290"
                       color="#2C5757" class="elo-drawer">
    <div class="drawer-topo">
      <EloSymbol :size="38" cor="#FFD18B" />
      <span class="marca-nome" style="color:#FFD18B">ELO</span>
    </div>
    <nav class="drawer-nav" aria-label="Navegação principal">
      <router-link to="/" class="drawer-link" @click="drawer = false">Início</router-link>
      <router-link to="/preciso-de-cuidador" class="drawer-link" @click="drawer = false">Preciso de um cuidador</router-link>
      <router-link to="/seja-cuidador" class="drawer-link" @click="drawer = false">Seja um cuidador ELO</router-link>
      <router-link to="/sobre" class="drawer-link" @click="drawer = false">Sobre a ELO</router-link>
      <router-link to="/contato" class="drawer-link" @click="drawer = false">Contato</router-link>
    </nav>
    <div class="pa-5">
      <a :href="wa" target="_blank" rel="noopener" class="elo-cta elo-cta--ouro" style="width:100%">
        <v-icon size="20">mdi-whatsapp</v-icon> Falar no WhatsApp
      </a>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import EloSymbol from '@/components/EloSymbol.vue'
import { waLink } from '@/config/contato'

const drawer = ref(false)
const rolou = ref(false)
const route = useRoute()
const wa = waLink()

// Fora da home o header ja nasce solido: as paginas internas comecam com hero verde,
// mas o dourado sobre o verde nao passa em contraste de texto.
const solido = computed(() => rolou.value)

function onScroll() { rolou.value = window.scrollY > 30 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.elo-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 950;
  height: var(--header-h);
  /* Scrim: sem ele o nav depende de onde o glow do hero cai, e a largura da janela
     muda isso. Em ~1100px o menu caia sobre a parte clara do glow e o contraste
     ia a 4,35:1. Com o scrim fica 6,8:1 em qualquer largura. */
  background: linear-gradient(to bottom, rgba(28, 52, 52, 0.52) 0%, rgba(28, 52, 52, 0.28) 55%, rgba(28, 52, 52, 0) 100%);
  transition: background var(--dur-hover) var(--ease-out);
}
.elo-header.is-solido {
  background: rgba(245, 241, 232, 0.97);
}
/* Fio de 1px no acento em vez de sombra, num pseudo-elemento com opacity:
   animar box-shadow custa repaint a cada frame. */
.elo-header::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1px;
  background: rgba(255, 209, 139, 0.75); opacity: 0;
  transition: opacity var(--dur-hover) var(--ease-out);
}
.elo-header.is-solido::after { opacity: 1; }

.elo-header-inner {
  max-width: 1200px; height: 100%; margin: 0 auto;
  padding: 0 20px; display: flex; align-items: center; gap: 20px;
}

.marca { display: flex; align-items: center; gap: 12px; text-decoration: none; }
.marca-texto { display: flex; flex-direction: column; line-height: 1; }
.marca-nome {
  font-family: var(--fonte-display); font-size: 1.65rem; font-weight: 400;
  letter-spacing: 0.09em; color: #FFD18B; transition: color var(--dur-hover) var(--ease-out);
}
.marca-tag { color: rgba(255, 255, 255, 0.82); margin-top: 4px; }
.is-solido .marca-nome { color: var(--elo-verde-escuro); }
.is-solido .marca-tag { color: var(--elo-tinta-suave); }

.nav-desktop { display: none; margin-left: auto; gap: 4px; }
/* Sublinhado que cresce da esquerda no hover — o mesmo gesto da régua das
   seções, em miniatura. Sem fundo translúcido: ele clareava o verde do hero. */
.nav-link {
  position: relative; text-decoration: none; color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem; font-weight: 500; padding: 10px 14px;
  transition: color var(--dur-hover) var(--ease-out);
}
.nav-link::after {
  content: ''; position: absolute; left: 14px; right: 14px; bottom: 4px; height: 2px;
  background: var(--elo-dourado);
  transform: scaleX(0); transform-origin: left center;
  transition: transform var(--dur-hover) var(--ease-out);
}
.nav-link:hover { color: #fff; }
.nav-link:hover::after { transform: scaleX(1); }
.is-solido .nav-link { color: var(--elo-tinta); }
.is-solido .nav-link:hover { color: var(--elo-verde-escuro); }
.is-solido .nav-link::after { background: var(--elo-verde); }
/* Pagina atual marcada por sublinhado, nao por fundo translucido: o fundo branco
   a 16% clareava o verde do hero e derrubava o contraste do proprio rotulo para 4,46:1. */
/* Página atual: sublinhado já aberto (não por fundo translúcido, que clareava
   o verde do hero e derrubava o contraste do próprio rótulo para 4,46:1). */
.nav-link.router-link-active { color: #fff; }
.nav-link.router-link-active::after { transform: scaleX(1); }
.is-solido .nav-link.router-link-active { color: var(--elo-verde-escuro); }

.nav-cta {
  display: none; align-items: center; gap: 8px; text-decoration: none;
  background: var(--elo-dourado); color: var(--elo-verde-escuro);
  font-weight: 600; font-size: 0.95rem; padding: 12px 20px; border-radius: var(--radius);
  transition: background-color var(--dur-hover) var(--ease-out);
}
.nav-cta:hover { background: var(--elo-dourado-claro); }
.nav-cta .seta {
  display: inline-block; opacity: 0; margin-left: -8px;
  transform: translateX(-6px);
  transition: opacity var(--dur-hover) var(--ease-out), transform var(--dur-hover) var(--ease-out);
}
.nav-cta:hover .seta { opacity: 1; transform: translateX(0); margin-left: 0; }

.menu-btn {
  margin-left: auto; display: inline-flex; align-items: center; justify-content: center;
  width: 48px; height: 48px; border-radius: 12px; border: 0; background: transparent;
  color: #fff; cursor: pointer;
}
.is-solido .menu-btn { color: var(--elo-verde-escuro); }

@media (min-width: 1000px) {
  .nav-desktop { display: flex; }
  .nav-cta { display: inline-flex; }
  .menu-btn { display: none; }
}

.drawer-topo {
  display: flex; align-items: center; gap: 10px;
  padding: 18px 20px; border-bottom: 1px solid rgba(255, 209, 139, 0.22);
}
.drawer-nav { display: flex; flex-direction: column; padding: 10px; }
.drawer-link {
  color: #fff; text-decoration: none; font-size: 1.05rem; font-weight: 500;
  padding: 15px 14px; border-radius: 10px;
  transition: background-color var(--dur-hover) var(--ease-out);
}
.drawer-link:hover { background: rgba(255, 255, 255, 0.1); }
.drawer-link.router-link-active { color: var(--elo-dourado); }
</style>
