<template>
  <header class="cabecalho" :class="{ 'is-claro': claro }">
    <div class="linha-label">
      <span v-if="label" class="t-label label">{{ label }}</span>
      <!-- A regua dourada que se desenha: a assinatura de motion do site. -->
      <hr v-animate class="regua regua-anima trilho" :class="{ 'regua-escura': !claro }">
    </div>
    <h2 v-animate="90" class="t-display t-secao titulo entra">{{ titulo }}</h2>
    <p v-if="texto" v-animate="150" class="t-corpo-g texto entra">{{ texto }}</p>
  </header>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  titulo: { type: String, required: true },
  texto: { type: String, default: '' },
  claro: { type: Boolean, default: false },
})
</script>

<style scoped>
.cabecalho { margin-bottom: 34px; }
.linha-label { display: flex; align-items: center; gap: 18px; margin-bottom: 16px; }
/* #3D7676 da 4,24:1 sobre o papel e o label e texto pequeno — o escuro da 6,59:1 */
.label { color: var(--elo-verde-escuro); flex: 0 0 auto; }
.trilho { flex: 1 1 auto; }
.titulo { color: var(--elo-verde-escuro); max-width: 20ch; }
.texto { color: var(--elo-tinta-suave); margin-top: 16px; }

.is-claro .label { color: var(--elo-dourado); }
.is-claro .titulo { color: #fff; }
.is-claro .texto { color: rgba(255, 255, 255, 0.9); }
</style>
