<template>
  <svg
    class="elo-simbolo"
    :class="{ 'is-animado': animar }"
    :width="size" :height="size"
    viewBox="387 175 726 726"
    xmlns="http://www.w3.org/2000/svg"
    role="img" :aria-label="alt || 'Símbolo da ELO: galho com folhas dentro de um círculo'"
  >
    <defs v-if="animar">
      <mask :id="maskId">
        <!-- O galho "cresce" a partir da base: o circulo da mascara expande e vai
             revelando o desenho de baixo para cima. Nao da pra usar stroke-dasharray
             aqui porque a logo oficial e um path de preenchimento, nao de traco. -->
        <circle class="elo-mask-circle" cx="750" cy="790" r="0" fill="#fff" />
      </mask>
    </defs>
    <path
      :fill="cor"
      fill-rule="nonzero"
      :mask="animar ? `url(#${maskId})` : undefined"
      :d="ELO_BRANCH_PATH"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
import { ELO_BRANCH_PATH } from '@/assets/eloPath'

let seq = 0
const props = defineProps({
  size: { type: [Number, String], default: 120 },
  cor: { type: String, default: '#FFD18B' },
  animar: { type: Boolean, default: false },
  alt: { type: String, default: '' },
})
const maskId = computed(() => `elo-mask-${++seq}-${Math.round(Number(props.size))}`)
</script>

<style scoped>
.elo-simbolo { display: block; overflow: visible; }

.is-animado .elo-mask-circle {
  animation: elo-crescer 2000ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
}
@keyframes elo-crescer {
  from { r: 0; }
  to   { r: 900; }
}

@media (prefers-reduced-motion: reduce) {
  /* Sem animacao o galho tem que aparecer inteiro, nao ficar mascarado em r=0 */
  .is-animado .elo-mask-circle { animation: none; r: 900; }
}
</style>
