<template>
  <!-- Rajadas de ar atras do simbolo.
       Nao sao linhas continuas atravessando a tela: sao tracos curtos, de
       comprimentos e alturas irregulares, que surgem, atravessam e somem. Vento
       nao e um padrao regular — linha paralela de amplitude igual le como onda
       de agua, nao como ar em movimento. -->
  <svg class="vento" viewBox="0 0 480 340" preserveAspectRatio="xMidYMid slice"
       aria-hidden="true" focusable="false">
    <g fill="none" stroke="#FFD18B" stroke-linecap="round">
      <path
        v-for="(r, i) in RAJADAS" :key="i"
        class="rajada"
        :d="arco(r.comp, r.curva)"
        :stroke-width="r.grossura"
        :style="{
          '--y': r.y + 'px',
          '--op': r.op,
          '--sobe': r.sobe + 'px',
          animationDuration: r.dur + 's',
          animationDelay: r.atraso + 's',
        }"
      />
    </g>
  </svg>
</template>

<script setup>
// Parametros escritos a mao, nao sorteados: o resultado precisa ser sempre o
// mesmo que foi conferido na tela. A irregularidade e o ponto — comprimento,
// altura, velocidade e opacidade variam de rajada para rajada, e os atrasos
// espalham as passagens ao longo de ~20s para nunca formarem fileira.
const RAJADAS = [
  { y: 34,  comp: 58, curva: 13, grossura: 1.6, op: 0.66, dur: 5.4, atraso: 0,    sobe: -12 },
  { y: 96,  comp: 34, curva: 8,  grossura: 1.2, op: 0.46, dur: 7.2, atraso: 1.9,  sobe: -7 },
  { y: 62,  comp: 82, curva: 19, grossura: 1.8, op: 0.58, dur: 4.6, atraso: 3.4,  sobe: -16 },
  { y: 150, comp: 46, curva: 11, grossura: 1.4, op: 0.62, dur: 6.1, atraso: 2.6,  sobe: -9 },
  { y: 128, comp: 26, curva: 6,  grossura: 1.1, op: 0.38, dur: 8.4, atraso: 5.1,  sobe: -5 },
  { y: 196, comp: 70, curva: 17, grossura: 1.7, op: 0.64, dur: 5,   atraso: 4.2,  sobe: -14 },
  { y: 232, comp: 40, curva: 10, grossura: 1.3, op: 0.44, dur: 6.8, atraso: 6.7,  sobe: -8 },
  { y: 172, comp: 92, curva: 22, grossura: 1.5, op: 0.52, dur: 4.2, atraso: 8.1,  sobe: -18 },
  { y: 276, comp: 52, curva: 12, grossura: 1.6, op: 0.6,  dur: 5.8, atraso: 7.3,  sobe: -11 },
  { y: 300, comp: 30, curva: 7,  grossura: 1.1, op: 0.36, dur: 7.6, atraso: 9.8,  sobe: -6 },
  { y: 250, comp: 64, curva: 15, grossura: 1.4, op: 0.5,  dur: 5.2, atraso: 11.4, sobe: -13 },
  { y: 82,  comp: 44, curva: 10, grossura: 1.3, op: 0.55, dur: 6.4, atraso: 12.9, sobe: -10 },
  { y: 210, comp: 36, curva: 9,  grossura: 1.2, op: 0.42, dur: 7,   atraso: 14.6, sobe: -8 },
  { y: 116, comp: 76, curva: 20, grossura: 1.7, op: 0.62, dur: 4.8, atraso: 16.2, sobe: -15 },
  { y: 264, comp: 28, curva: 6,  grossura: 1.1, op: 0.37, dur: 8,   atraso: 18.3, sobe: -6 },
]

// Arco assimetrico: sobe mais rapido do que desce, como ar que contorna alguma
// coisa e escapa. Curva simetrica lia como traco reto de tao suave.
function arco(comp, curva) {
  return `M 0 0 c ${comp * 0.22} ${-curva}, ${comp * 0.52} ${-curva * 1.15}, ${comp * 0.74} ${-curva * 0.62}`
       + ` c ${comp * 0.12} ${curva * 0.3}, ${comp * 0.2} ${curva * 0.5}, ${comp * 0.26} ${curva * 0.62}`
}
</script>

<style scoped>
.vento {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none;
  /* Contido na caixa do simbolo: com overflow visivel as rajadas alcancavam a
     coluna do texto. O corte nunca aparece porque o envelope de opacidade leva
     cada traco a zero antes de ele chegar na borda. */
  overflow: hidden;
}

/* Cada rajada entra pela esquerda, atravessa subindo de leve e some. O envelope
   de opacidade e o que faz parecer ar: o traco nao aparece nem desaparece de
   uma vez, ele ganha e perde corpo no meio do caminho. */
.rajada {
  opacity: 0;
  animation-name: rajada;
  animation-timing-function: cubic-bezier(0.4, 0.05, 0.6, 0.95);
  animation-iteration-count: infinite;
  will-change: transform, opacity;
}

/* Percurso inteiro dentro do viewBox (0..480): nasce em -40 invisivel, ganha
   corpo no meio e some antes de 470. */
@keyframes rajada {
  0%   { transform: translate(-40px, var(--y)); opacity: 0; }
  14%  { opacity: calc(var(--op) * 0.4); }
  42%  { opacity: var(--op); }
  70%  { opacity: calc(var(--op) * 0.75); }
  90%  { opacity: 0; }
  100% { transform: translate(470px, calc(var(--y) + var(--sobe))); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .rajada { animation: none; opacity: 0; }
}
</style>
