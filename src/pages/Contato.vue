<template>
  <PageHero :label="CONTATO_PAGE.hero.olho" :titulo="CONTATO_PAGE.hero.titulo" :texto="CONTATO_PAGE.hero.texto">
    <a :href="wa" target="_blank" rel="noopener" class="elo-cta elo-cta--ouro">Chamar no WhatsApp</a>
  </PageHero>

  <section class="secao secao-papel">
    <div class="wrap">
      <!-- Canais como linhas de ficha, não como três cartões iguais -->
      <div class="canais">
        <a v-animate :href="wa" target="_blank" rel="noopener" class="canal entra">
          <span class="t-label canal-rotulo">WhatsApp</span>
          <span class="t-sub canal-valor">{{ CONTATO.telefoneExibicao }}</span>
          <span class="t-corpo canal-texto">O canal mais rápido. É por aqui que respondemos solicitações e cadastros.</span>
        </a>

        <a v-animate="70" :href="`mailto:${CONTATO.email}`" class="canal entra">
          <span class="t-label canal-rotulo">E-mail</span>
          <span class="t-sub canal-valor">{{ CONTATO.email }}</span>
          <span class="t-corpo canal-texto">Para documentos, propostas e assuntos que precisam de registro escrito.</span>
        </a>

        <a v-animate="140" :href="CONTATO.instagramUrl" target="_blank" rel="noopener" class="canal entra">
          <span class="t-label canal-rotulo">Instagram</span>
          <span class="t-sub canal-valor">{{ CONTATO.instagram }}</span>
          <span class="t-corpo canal-texto">Rotina da rede, orientações de cuidado e bastidores do atendimento.</span>
        </a>

        <div v-animate="210" class="canal canal-estatico entra">
          <span class="t-label canal-rotulo">Onde atendemos</span>
          <span class="t-sub canal-valor">{{ EMPRESA.atendimento }}</span>
          <span class="t-corpo canal-texto">Sede em {{ EMPRESA.cidade }}. {{ EMPRESA.horario }}.</span>
        </div>

        <a v-animate="280" :href="CONTATO.reclameAqui" target="_blank" rel="noopener" class="canal entra">
          <span class="t-label canal-rotulo">Reclame Aqui</span>
          <span class="t-sub canal-valor">Nossa página pública</span>
          <span class="t-corpo canal-texto">Reclamação, elogio ou dúvida que preferir registrar fora daqui — respondemos por lá também.</span>
        </a>
      </div>

      <div v-animate class="atalhos entra">
        <p class="t-corpo atalhos-texto">Já sabe o que precisa?</p>
        <div class="atalhos-ctas">
          <router-link to="/preciso-de-cuidador" class="elo-cta elo-cta--verde">Solicitar um cuidador</router-link>
          <router-link to="/seja-cuidador" class="elo-cta elo-cta--verde-linha">Cadastrar-me como cuidador</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue'
import { CONTATO_PAGE } from '@/config/content'
import { CONTATO, EMPRESA, waLink } from '@/config/contato'
const wa = waLink()
</script>

<style scoped>
.wrap { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

.canais { border-top: 2px solid var(--elo-verde-medio); }
.canal {
  display: grid; grid-template-columns: minmax(0, 1fr); gap: 6px;
  padding: 24px 0; text-decoration: none;
  border-bottom: 1px solid rgba(44, 87, 87, 0.16);
}
@media (min-width: 860px) {
  .canal { grid-template-columns: 150px minmax(0, 0.9fr) minmax(0, 1fr); gap: 0 32px; align-items: baseline; }
}
/* transform nos filhos: padding-left dispara layout por frame */
.canal > * { transition: transform var(--dur-hover) var(--ease-out); }
@media (hover: hover) { a.canal:hover > * { transform: translateX(10px); } }
@media (prefers-reduced-motion: reduce) { a.canal:hover > * { transform: none; } }

.canal-rotulo { color: var(--elo-verde-escuro); }
.canal-valor { color: var(--elo-verde-escuro); overflow-wrap: anywhere; }
.canal-texto { color: var(--elo-tinta-suave); }

.atalhos { margin-top: 44px; }
.atalhos-texto { color: var(--elo-tinta-suave); }
.atalhos-ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 16px; }
</style>
