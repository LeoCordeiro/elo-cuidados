<template>
  <!-- Rajadas de ar atras do simbolo.
       Cada traco percorre uma TRAJETORIA propria (CSS Motion Path) e gira pela
       tangente da curva — nao corre em linha reta. Foi o que quebrou as versoes
       anteriores: com o mesmo arco carimbado deslizando na horizontal, o
       desenho da rajada e o caminho dela nao tinham relacao nenhuma, e o olho
       lia carimbo repetido em vez de ar em movimento.

       Tecnica adaptada de `element-along-svg-path` (acervo de animacoes), que
       faz isso com Motion no React; aqui sai em CSS nativo, sem dependencia. -->
  <div class="vento" :style="{ '--escala': escala }" aria-hidden="true">
    <span
      v-for="(r, i) in RAJADAS" :key="i"
      class="rajada"
      :style="{
        '--via': `path('${r.via}')`,
        '--comp': r.comp + 'px',
        '--grossura': r.grossura + 'px',
        '--op': r.op,
        animationDuration: r.dur + 's',
        animationDelay: r.atraso + 's',
      }"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  // lado da caixa do simbolo, em px — as trajetorias sao desenhadas em 400x400
  tamanho: { type: Number, default: 400 },
})
const escala = () => props.tamanho / 400

// Trajetorias em uma caixa de 400x400, todas entrando pela esquerda e saindo
// pela direita, mas cada uma com curvatura, altura e inclinacao proprias:
// algumas sobem no fim, outras caem, outras fazem S. E isso que tira o ar de
// "padrao" — a variacao esta no CAMINHO, nao so no tamanho do traco.
const RAJADAS = [
  { via: 'M -70 88 C 40 52, 130 118, 220 78 S 360 34, 470 62',     comp: 84,  grossura: 2.2, op: 0.8,  dur: 7.5,  atraso: 0 },
  { via: 'M -70 176 C 60 206, 150 142, 246 182 S 380 214, 470 178', comp: 58,  grossura: 1.7, op: 0.6,  dur: 9.4,  atraso: 1.6 },
  { via: 'M -70 132 C 70 96, 176 168, 272 122 S 390 74, 470 104',   comp: 112, grossura: 2.5, op: 0.74, dur: 6.4,  atraso: 3.1 },
  { via: 'M -70 262 C 54 288, 148 226, 250 266 S 386 300, 470 268', comp: 70,  grossura: 1.9, op: 0.68, dur: 8.6,  atraso: 2.2 },
  { via: 'M -70 44 C 88 24, 168 74, 268 40 S 392 8, 470 30',        comp: 46,  grossura: 1.5, op: 0.5,  dur: 10.2, atraso: 4.8 },
  { via: 'M -70 218 C 46 244, 140 184, 236 222 S 372 258, 470 226', comp: 98,  grossura: 2.3, op: 0.76, dur: 7,    atraso: 3.9 },
  { via: 'M -70 320 C 66 344, 158 288, 258 324 S 388 352, 470 330', comp: 60,  grossura: 1.8, op: 0.55, dur: 9,    atraso: 6.3 },
  { via: 'M -70 108 C 52 140, 146 76, 244 116 S 384 152, 470 124',  comp: 128, grossura: 2,   op: 0.64, dur: 6,    atraso: 7.6 },
  { via: 'M -70 292 C 74 262, 164 328, 264 286 S 396 246, 470 272', comp: 76,  grossura: 2.2, op: 0.72, dur: 8.2,  atraso: 5.4 },
  { via: 'M -70 156 C 62 182, 152 122, 252 160 S 382 192, 470 166', comp: 42,  grossura: 1.4, op: 0.46, dur: 10.8, atraso: 9.1 },
  { via: 'M -70 240 C 80 210, 170 274, 270 234 S 398 196, 470 220', comp: 92,  grossura: 1.9, op: 0.62, dur: 7.2,  atraso: 8.4 },
  { via: 'M -70 66 C 44 92, 138 36, 240 72 S 376 104, 470 78',      comp: 66,  grossura: 1.8, op: 0.7,  dur: 8.8,  atraso: 10.7 },
  { via: 'M -70 198 C 72 168, 162 232, 262 192 S 390 154, 470 180', comp: 50,  grossura: 1.5, op: 0.52, dur: 9.8,  atraso: 12.2 },
  { via: 'M -70 340 C 58 312, 150 372, 254 336 S 388 300, 470 322', comp: 104, grossura: 2.4, op: 0.68, dur: 6.8,  atraso: 11.5 },
]
</script>

<style scoped>
.vento {
  position: absolute; top: 50%; left: 50%;
  width: 400px; height: 400px; margin: -200px 0 0 -200px;
  transform: scale(var(--escala));
  pointer-events: none;
  overflow: hidden;
}

/* O traco tem cabeca e cauda: o gradiente faz as pontas sumirem, entao ele
   entra e sai da curva sem comeco nem fim duro. `offset-rotate: auto` alinha
   o traco a tangente — e o que faz o desenho acompanhar o caminho. */
.rajada {
  position: absolute; top: 0; left: 0;
  width: var(--comp); height: var(--grossura);
  border-radius: var(--grossura);
  background: linear-gradient(90deg,
    rgba(255, 209, 139, 0) 0%,
    rgba(255, 209, 139, 0.85) 38%,
    rgba(255, 209, 139, 0.95) 62%,
    rgba(255, 209, 139, 0) 100%);
  offset-path: var(--via);
  offset-rotate: auto;
  offset-anchor: 50% 50%;
  opacity: 0;
  animation-name: soprar;
  animation-timing-function: cubic-bezier(0.37, 0.06, 0.63, 0.94);
  animation-iteration-count: infinite;
  will-change: offset-distance, opacity;
}

/* A velocidade nao e constante: acelera na entrada e afrouxa no fim, como
   lufada. Duracao longa (6-11s) — e ar parado que se move, nao vento forte. */
@keyframes soprar {
  0%   { offset-distance: 0%;   opacity: 0; }
  16%  { opacity: calc(var(--op) * 0.45); }
  44%  { opacity: var(--op); }
  72%  { opacity: calc(var(--op) * 0.72); }
  92%  { opacity: 0; }
  100% { offset-distance: 100%; opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .rajada { animation: none; opacity: 0; }
}
</style>
