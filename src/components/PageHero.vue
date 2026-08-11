<template>
  <section class="page-hero fundo-verde-hero">
    <div class="page-hero-inner">
      <div class="ph-texto">
        <div class="linha-label hero-passo hero-passo-1">
          <span v-if="label" class="t-label label">{{ label }}</span>
          <hr v-animate class="regua regua-anima trilho">
        </div>
        <h1 class="t-display titulo hero-passo hero-passo-2">{{ titulo }}</h1>
        <p v-if="texto" class="t-corpo-g texto hero-passo hero-passo-3">{{ texto }}</p>
        <div v-if="$slots.default" class="acoes hero-passo hero-passo-4"><slot /></div>
      </div>

      <!-- Símbolo inteiro dentro da tela, como no hero da home -->
      <div class="ph-marca hero-passo hero-passo-5">
        <EloSymbol :size="galhoSize" cor="#FFD18B" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import EloSymbol from '@/components/EloSymbol.vue'

defineProps({
  label: { type: String, default: '' },
  titulo: { type: String, required: true },
  texto: { type: String, default: '' },
})

const galhoSize = ref(260)
function ajustar() {
  const w = window.innerWidth
  galhoSize.value = w < 600 ? 150 : w < 1000 ? 200 : 260
}
onMounted(() => { ajustar(); window.addEventListener('resize', ajustar) })
onUnmounted(() => window.removeEventListener('resize', ajustar))
</script>

<style scoped>
.page-hero {
  position: relative; overflow: hidden;
  padding: calc(var(--header-h) + 44px) 24px 48px;
}
@media (min-width: 1000px) { .page-hero { padding: calc(var(--header-h) + 60px) 24px 58px; } }

.page-hero-inner {
  position: relative; max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: minmax(0, 1fr); gap: 28px; align-items: center;
}
@media (min-width: 900px) {
  .page-hero-inner { grid-template-columns: minmax(0, 1fr) auto; gap: 48px; }
}
.ph-marca { display: flex; justify-content: center; }
@media (min-width: 900px) { .ph-marca { justify-content: flex-end; } }
@media (max-width: 899px) { .ph-marca { order: 2; opacity: 0.85; } .ph-texto { order: 1; } }

.linha-label { display: flex; align-items: center; gap: 20px; margin-bottom: 20px; max-width: 520px; }
.label { color: var(--elo-dourado); flex: 0 0 auto; }
.trilho { flex: 1 1 auto; }

.titulo { color: #fff; font-size: clamp(2.1rem, 4.4vw, 3.4rem); max-width: 16ch; }
.texto { color: rgba(255, 255, 255, 0.9); margin-top: 18px; }
.acoes { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
</style>
