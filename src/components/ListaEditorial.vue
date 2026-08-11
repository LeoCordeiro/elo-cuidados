<template>
  <!-- Lista editorial no lugar do grid de cards iguais: cada item e uma LINHA
       separada por regua de 1px, com colunas assimetricas.
       `compacta` empilha titulo e texto — usar quando a lista mora dentro de
       uma coluna estreita, senao o titulo quebra em 3 linhas. -->
  <div class="lista" :class="{ 'is-claro': claro, 'is-compacta': compacta }">
    <hr class="regua" :class="regua">
    <div v-for="(item, i) in itens" :key="item.titulo"
         v-animate="Math.min(i, 5) * 70" class="item entra">
      <div class="marcador">
        <span v-if="numerado" class="num">{{ String(i + 1).padStart(2, '0') }}</span>
        <!-- Sem numeracao o marcador e um traco do acento, nao um icone:
             icone generico em lista de features e vocabulario de template. -->
        <span v-else class="traco" aria-hidden="true" />
      </div>
      <div class="conteudo">
        <h3 class="t-sub titulo">{{ item.titulo }}</h3>
        <p class="t-corpo texto">{{ item.texto }}</p>
      </div>
      <hr class="regua item-regua" :class="regua">
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  itens: { type: Array, required: true },
  numerado: { type: Boolean, default: false },
  claro: { type: Boolean, default: false },
  compacta: { type: Boolean, default: false },
})
const regua = computed(() => (props.claro ? '' : 'regua-escura'))
</script>

<style scoped>
.item {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 0 20px;
  padding: 22px 0 24px;
  position: relative;
  align-items: start;
}
.item-regua { position: absolute; left: 0; right: 0; bottom: 0; }

/* Largo: titulo e texto lado a lado, assimetricos (0.4 / 1) */
@media (min-width: 900px) {
  .lista:not(.is-compacta) .item { grid-template-columns: 60px minmax(0, 1fr); gap: 0 28px; padding: 28px 0 30px; }
  .lista:not(.is-compacta) .conteudo {
    display: grid; grid-template-columns: minmax(0, 0.42fr) minmax(0, 1fr); gap: 0 32px; align-items: start;
  }
}

.marcador { display: flex; align-items: center; min-height: 1.7rem; }
/* O acento dourado so vive sobre fundo escuro: sobre o papel osso ele mede
   1,16:1 e some. Em fundo claro o acento e o proprio verde. */
.num {
  font-family: var(--fonte-display); font-size: 1.1rem; font-weight: 400;
  color: var(--elo-verde-escuro); letter-spacing: 0.02em;
}
.traco { display: block; width: 26px; height: 2px; background: var(--elo-verde-medio); }
.is-claro .num { color: var(--elo-dourado); }
.is-claro .traco { background: var(--elo-dourado); }

.titulo { color: var(--elo-verde-escuro); }
.texto { color: var(--elo-tinta-suave); margin-top: 8px; }
@media (min-width: 900px) {
  .lista:not(.is-compacta) .texto { margin-top: 0; }
}

.is-claro .titulo { color: #fff; }
.is-claro .texto { color: rgba(255, 255, 255, 0.86); }

/* O traço do marcador se estende e o conteúdo avança um pouco: a linha inteira
   reage ao ponteiro sem scale nem sombra. */
@media (hover: hover) {
  .item { transition: background-color var(--dur-hover) var(--ease-out); }
  .item:hover { background: rgba(44, 87, 87, 0.04); }
  .is-claro .item:hover { background: rgba(255, 209, 139, 0.06); }
  /* scaleX em vez de width: animar largura força layout a cada frame */
  .traco { transform-origin: left center; transition: transform var(--dur-hover) var(--ease-out); }
  .item:hover .traco { transform: scaleX(1.55); }
  .conteudo { transition: transform var(--dur-hover) var(--ease-out); }
  .item:hover .conteudo { transform: translateX(6px); }
  .num { transition: color var(--dur-hover) var(--ease-out); }
  .item:hover .num { color: var(--elo-verde); }
  .is-claro .item:hover .num { color: var(--elo-dourado-claro); }
}

@media (prefers-reduced-motion: reduce) {
  .item:hover .conteudo { transform: none; }
  .item:hover .traco { transform: none; }
}
</style>
