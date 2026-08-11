<template>
  <!-- Correntes de ar atras do simbolo do hero. Tres ondas em alturas e
       velocidades diferentes; cada path cobre o dobro da largura visivel e
       desliza exatamente um periodo, entao o loop nao tem emenda. -->
  <svg class="vento" viewBox="0 0 480 320" preserveAspectRatio="xMidYMid slice"
       aria-hidden="true" focusable="false">
    <defs>
      <!-- as pontas somem para a onda nao comecar nem terminar em corte seco -->
      <linearGradient :id="`fade-${uid}`" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stop-color="#fff" stop-opacity="0" />
        <stop offset="0.22" stop-color="#fff" stop-opacity="1" />
        <stop offset="0.78" stop-color="#fff" stop-opacity="1" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
      <mask :id="`mask-${uid}`">
        <rect x="0" y="0" width="480" height="320" :fill="`url(#fade-${uid})`" />
      </mask>
    </defs>

    <g :mask="`url(#mask-${uid})`" fill="none" stroke="#FFD18B" stroke-linecap="round">
      <path class="onda onda-1" :d="onda(78)"  stroke-width="1.6" opacity="0.46" />
      <path class="onda onda-2" :d="onda(150)" stroke-width="1.2" opacity="0.32" />
      <path class="onda onda-3" :d="onda(226)" stroke-width="1.8" opacity="0.40" />
      <path class="onda onda-4" :d="onda(292)" stroke-width="1.1" opacity="0.26" />
    </g>
  </svg>
</template>

<script setup>
let seq = 0
const uid = ++seq + '-' + Math.round(Math.random() * 1e6)

// Onda senoidal em periodos de 120px, comecando em -120 e indo alem da largura:
// o path e mais largo que o viewBox, entao ha material para deslizar.
function onda(y) {
  const periodo = 120
  const amplitude = 11
  let d = `M -120 ${y}`
  for (let x = -120; x < 600; x += periodo) {
    d += ` q ${periodo / 4} ${-amplitude}, ${periodo / 2} 0`
    d += ` q ${periodo / 4} ${amplitude}, ${periodo / 2} 0`
  }
  return d
}
</script>

<style scoped>
.vento {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; overflow: visible;
}

/* Desliza exatamente um periodo (120 unidades do viewBox) e reinicia — como o
   desenho se repete a cada periodo, o corte e invisivel.
   `linear` aqui e proposital: qualquer easing cria uma pulsacao que denuncia
   o loop. A regra de nunca usar linear vale para transicao de interface, nao
   para movimento ambiente continuo. */
.onda {
  animation: correr 26s linear infinite;
  animation-delay: 1.6s;
}
.onda-2 { animation-duration: 34s; animation-delay: 2.1s; }
.onda-3 { animation-duration: 21s; animation-delay: 1.9s; }
.onda-4 { animation-duration: 30s; animation-delay: 2.4s; }

@keyframes correr {
  from { transform: translateX(0); }
  to   { transform: translateX(-120px); }
}

@media (prefers-reduced-motion: reduce) {
  .onda { animation: none; }
}
</style>
