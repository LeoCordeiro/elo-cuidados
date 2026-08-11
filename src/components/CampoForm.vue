<template>
  <!-- Rotulo FORA do campo e sempre visivel. O label flutuante do Vuetify vira
       placeholder enquanto o campo esta vazio, e parte do publico da ELO tem pouca
       familiaridade com interface — some o rotulo, some a pergunta. -->
  <div class="campo">
    <label :for="id" class="campo-rotulo">
      {{ rotulo }}
      <span v-if="opcional" class="campo-opcional">(opcional)</span>
    </label>
    <slot :id="id" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

let seq = 0
const props = defineProps({
  rotulo: { type: String, required: true },
  opcional: { type: Boolean, default: false },
})
const id = computed(() => 'campo-' + props.rotulo.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + (++seq))
</script>

<style scoped>
.campo { display: flex; flex-direction: column; }
.campo-rotulo {
  font-weight: 600; font-size: 0.97rem; color: var(--elo-verde-escuro);
  margin-bottom: 7px; line-height: 1.35;
}
.campo-opcional { font-weight: 400; color: var(--elo-tinta-suave); }
</style>
