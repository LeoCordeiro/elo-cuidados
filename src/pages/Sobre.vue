<template>
  <PageHero :label="SOBRE.hero.olho" :titulo="SOBRE.hero.titulo" :texto="SOBRE.hero.texto" />

  <!-- ---------- MISSAO — assimétrico, texto pesa mais que o dado ---------- -->
  <section class="secao secao-papel">
    <div class="wrap missao">
      <div>
        <SecaoTitulo label="O que fazemos" :titulo="SOBRE.missao.titulo" />
        <p v-animate class="t-corpo-g missao-texto entra">{{ SOBRE.missao.texto }}</p>
      </div>
      <!-- Ficha cadastral: dado seco, régua, sem cartão -->
      <dl v-animate="120" class="ficha entra">
        <div v-for="linha in ficha" :key="linha.rotulo" class="ficha-linha">
          <dt class="t-label">{{ linha.rotulo }}</dt>
          <dd>{{ linha.valor }}</dd>
        </div>
      </dl>
    </div>
  </section>

  <!-- ---------- VALORES ---------- -->
  <section class="secao secao-valores fundo-verde-fundo">
    <EloSymbol class="galho-marca galho-valores" :size="300" cor="#FFD18B" aria-hidden="true" />
    <div class="wrap valores-wrap">
      <SecaoTitulo claro :label="SOBRE.valores.olho" :titulo="SOBRE.valores.titulo" />
      <ListaEditorial :itens="SOBRE.valores.itens" claro />
    </div>
  </section>

  <!-- ---------- BIFURCACAO FINAL ---------- -->
  <section class="secao secao-papel-claro">
    <div class="wrap bifurcacao">
      <router-link to="/preciso-de-cuidador" class="porta">
        <hr class="regua regua-forte">
        <h2 class="t-display porta-titulo">Preciso de um cuidador</h2>
        <p class="t-corpo porta-texto">Conte a situação e a gente encontra o profissional certo.</p>
        <span class="porta-seta" aria-hidden="true">→</span>
      </router-link>
      <router-link to="/seja-cuidador" class="porta">
        <hr class="regua regua-forte">
        <h2 class="t-display porta-titulo">Quero ser um cuidador ELO</h2>
        <p class="t-corpo porta-texto">Agenda organizada, suporte e cobertura quando você precisa faltar.</p>
        <span class="porta-seta" aria-hidden="true">→</span>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue'
import SecaoTitulo from '@/components/SecaoTitulo.vue'
import ListaEditorial from '@/components/ListaEditorial.vue'
import EloSymbol from '@/components/EloSymbol.vue'
import { SOBRE } from '@/config/content'
import { EMPRESA } from '@/config/contato'

const ficha = [
  { rotulo: 'Razão social', valor: EMPRESA.razao },
  { rotulo: 'CNPJ', valor: EMPRESA.cnpj },
  { rotulo: 'Atividade', valor: EMPRESA.cnae },
  { rotulo: 'Sede', valor: EMPRESA.cidade },
  { rotulo: 'Área de atendimento', valor: EMPRESA.atendimento },
]
</script>

<style scoped>
.wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

.missao { display: grid; grid-template-columns: minmax(0, 1fr); gap: 36px; }
@media (min-width: 1000px) {
  .missao { grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr); gap: 64px; align-items: start; }
}
.missao-texto { color: var(--elo-tinta-suave); }

.ficha { margin: 0; border-top: 2px solid var(--elo-verde-medio); }
.ficha-linha { padding: 14px 0; border-bottom: 1px solid rgba(44, 87, 87, 0.16); }
.ficha-linha dt { color: var(--elo-verde-escuro); margin-bottom: 5px; }
.ficha-linha dd { margin: 0; color: var(--elo-tinta); font-size: 0.98rem; line-height: 1.45; }

.secao-valores { position: relative; overflow: hidden; }
.galho-valores { left: 24px; bottom: 24px; opacity: 0.07; }
@media (max-width: 999px) { .galho-valores { left: -60px; bottom: -40px; } }
.valores-wrap { position: relative; }

/* Bifurcação: duas portas assimétricas, sem cartão nem sombra */
.bifurcacao { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0; }
@media (min-width: 860px) { .bifurcacao { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 48px; } }

.porta {
  display: block; position: relative; text-decoration: none;
  padding: 26px 0 30px;
  border-bottom: 1px solid rgba(44, 87, 87, 0.16);
}
/* O conteúdo avança, não o padding do bloco: padding-left dispara layout a cada
   frame, e ainda arrastaria a régua de baixo junto. */
.porta > * { transition: transform var(--dur-hover) var(--ease-out); }
@media (hover: hover) { .porta:hover > * { transform: translateX(10px); } }
@media (hover: hover) { .porta:hover .regua-forte { transform: translateX(10px) scaleX(1.5); } }
.porta-titulo { color: var(--elo-verde-escuro); font-size: clamp(1.5rem, 2.4vw, 2rem); margin-top: 18px; }
.porta-texto { color: var(--elo-tinta-suave); margin-top: 10px; max-width: 44ch; }
.porta-seta {
  display: inline-block; margin-top: 16px;
  color: var(--elo-verde-escuro); font-size: 1.3rem; line-height: 1;
  transition: transform var(--dur-hover) var(--ease-out);
}
@media (hover: hover) { .porta:hover .porta-seta { transform: translateX(8px); } }
/* Régua da porta cresce junto com o hover — reforça que a linha inteira é o alvo.
   scaleX, não width: animar largura força layout a cada frame. */
.porta .regua-forte { transform-origin: left center; transition: transform var(--dur-hover) var(--ease-out); }
@media (hover: hover) { .porta:hover .regua-forte { transform: scaleX(1.5); } }
@media (prefers-reduced-motion: reduce) {
  .porta:hover .porta-seta { transform: none; }
  .porta:hover .regua-forte { transform: none; }
}
</style>
