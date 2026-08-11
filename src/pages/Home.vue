<template>
  <!-- ============ HERO ============
       Statement tipográfico: o título carrega a mensagem e o símbolo acompanha
       em coluna própria, sem virar "imagem ao lado do texto" em 50/50. -->
  <section class="hero fundo-verde-hero">
    <div class="hero-conteudo">
      <div class="hero-texto">
        <div class="linha-marca hero-passo hero-passo-1">
          <span class="t-tagline tagline">{{ EMPRESA.tagline }}</span>
          <hr v-animate class="regua regua-anima trilho">
        </div>

        <h1 class="t-display t-hero titulo hero-passo hero-passo-2">{{ HOME.hero.titulo }}</h1>

        <p class="t-corpo-g texto hero-passo hero-passo-3">{{ HOME.hero.texto }}</p>

        <div class="ctas hero-passo hero-passo-4">
          <router-link to="/preciso-de-cuidador" class="elo-cta elo-cta--ouro">
            <span>{{ HOME.hero.ctaFamilia }}</span>
            <span class="cta-seta" aria-hidden="true">→</span>
          </router-link>
          <router-link to="/seja-cuidador" class="elo-cta elo-cta--linha">
            <span>{{ HOME.hero.ctaCuidador }}</span>
            <span class="cta-seta" aria-hidden="true">→</span>
          </router-link>
        </div>

        <!-- Fato, não métrica: a ELO é MEI recente e não tem número para exibir -->
        <dl class="fatos hero-passo hero-passo-5">
          <div class="fato">
            <dt class="t-label">Cobertura</dt>
            <dd>Todo o estado de São Paulo</dd>
          </div>
          <div class="fato">
            <dt class="t-label">Formatos</dt>
            <dd>Diarista, plantão 12h ou integral</dd>
          </div>
          <div class="fato">
            <dt class="t-label">Contato</dt>
            <dd>Resposta pelo WhatsApp</dd>
          </div>
        </dl>
      </div>

      <!-- O símbolo inteiro, dentro da tela — é a marca, não um grafismo cortado -->
      <div class="hero-marca">
        <EloSymbol :size="galhoSize" cor="#FFD18B" animar
                   alt="Galho com folhas dentro de um círculo, símbolo da ELO" />
      </div>
    </div>
  </section>

  <!-- ============ COMO FUNCIONA — lista editorial numerada ============ -->
  <section class="secao secao-papel">
    <div class="wrap">
      <SecaoTitulo
        :label="HOME.comoFunciona.olho"
        :titulo="HOME.comoFunciona.titulo"
        :texto="HOME.comoFunciona.texto" />
      <ListaEditorial :itens="HOME.comoFunciona.passos" numerado />
    </div>
  </section>

  <!-- ============ POSICIONAMENTO — bloco assimétrico escuro ============ -->
  <section class="secao secao-posicao fundo-verde-fundo">
    <EloSymbol class="galho-marca galho-posicao" :size="420" cor="#FFD18B" aria-hidden="true" />
    <div class="wrap posicao">
      <div class="posicao-frase">
        <hr v-animate class="regua regua-anima regua-forte">
        <p v-animate="90" class="t-display frase entra">
          A parte difícil não é achar um cuidador.<br>
          É confiar em quem você não conhece.
        </p>
        <p v-animate="150" class="t-corpo assinatura entra">
          É essa parte que a ELO faz — antes de qualquer nome chegar até você.
        </p>
      </div>
      <div class="posicao-lista">
        <!-- compacta: a lista mora numa coluna estreita, titulo em cima do texto -->
        <ListaEditorial :itens="HOME.diferenciais.itens" claro compacta />
      </div>
    </div>
  </section>

  <!-- ============ CONVITE AO PROFISSIONAL ============ -->
  <section class="secao secao-papel-claro">
    <div class="wrap convite">
      <div>
        <SecaoTitulo
          :label="HOME.faixaCuidador.olho"
          :titulo="HOME.faixaCuidador.titulo"
          :texto="HOME.faixaCuidador.texto" />
      </div>
      <div class="convite-acao">
        <router-link to="/seja-cuidador" class="elo-cta elo-cta--verde">
          {{ HOME.faixaCuidador.cta }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import EloSymbol from '@/components/EloSymbol.vue'
import SecaoTitulo from '@/components/SecaoTitulo.vue'
import ListaEditorial from '@/components/ListaEditorial.vue'
import { HOME } from '@/config/content'
import { EMPRESA } from '@/config/contato'

// Cabe inteiro na coluna da direita sem comer a coluna do texto
const galhoSize = ref(400)
function ajustar() {
  const w = window.innerWidth
  galhoSize.value = w < 600 ? 230 : w < 1000 ? 300 : w < 1300 ? 340 : 400
}
onMounted(() => { ajustar(); window.addEventListener('resize', ajustar) })
onUnmounted(() => window.removeEventListener('resize', ajustar))
</script>

<style scoped>
.wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* ---------------- HERO ---------------- */
.hero {
  position: relative; overflow: hidden;
  padding: calc(var(--header-h) + 54px) 24px 56px;
}
@media (min-width: 1000px) { .hero { padding: calc(var(--header-h) + 88px) 24px 76px; } }

.hero-conteudo {
  position: relative; max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: minmax(0, 1fr); gap: 34px; align-items: center;
}
@media (min-width: 1000px) {
  /* auto na segunda coluna: o símbolo tem tamanho próprio e não é espremido */
  .hero-conteudo { grid-template-columns: minmax(0, 1fr) auto; gap: 52px; }
}
.hero-marca { display: flex; justify-content: center; }
@media (min-width: 1000px) { .hero-marca { justify-content: flex-end; } }
/* No mobile o símbolo vem depois do texto: quem chega em urgência lê primeiro */
@media (max-width: 999px) {
  .hero-marca { order: 2; opacity: 0.9; }
  .hero-texto { order: 1; }
}

.linha-marca { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; max-width: 640px; }
.tagline { color: var(--elo-dourado); flex: 0 0 auto; }
.trilho { flex: 1 1 auto; }

.titulo { color: #fff; max-width: 14ch; }
.texto { color: rgba(255, 255, 255, 0.9); margin-top: 26px; }

.ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 36px; }
.ctas .elo-cta { flex: 1 1 260px; }
@media (min-width: 600px) { .ctas .elo-cta { flex: 0 0 auto; } }

/* Fatos: régua em cima, label caps, valor em corpo. Nada de "500+ famílias" */
.fatos {
  display: grid; grid-template-columns: minmax(0, 1fr); gap: 0;
  margin: 44px 0 0; max-width: 780px;
  border-top: 1px solid rgba(255, 209, 139, 0.32);
}
@media (min-width: 700px) {
  .fatos { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .fato + .fato { border-left: 1px solid rgba(255, 209, 139, 0.24); padding-left: 22px; }
}
.fato { padding: 18px 0 0; }
.fato + .fato { border-top: 1px solid rgba(255, 209, 139, 0.18); }
@media (min-width: 700px) { .fato + .fato { border-top: 0; } }
.fato dt { color: var(--elo-dourado); margin-bottom: 7px; }
.fato dd { margin: 0; color: rgba(255, 255, 255, 0.92); font-size: 1rem; line-height: 1.45; }

/* ---------------- POSICIONAMENTO ---------------- */
.secao-posicao { position: relative; overflow: hidden; }
/* Marca d'água inteira dentro da seção, não cortada pela borda */
.galho-posicao { right: 24px; bottom: 24px; opacity: 0.07; }
@media (max-width: 999px) { .galho-posicao { right: -60px; bottom: -40px; } }

.posicao {
  position: relative;
  display: grid; grid-template-columns: minmax(0, 1fr); gap: 40px;
}
/* Assimétrico: a frase pesa menos que a lista, mas ancora a leitura */
@media (min-width: 1000px) {
  .posicao { grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr); gap: 64px; align-items: start; }
  .posicao-frase { position: sticky; top: calc(var(--header-h) + 40px); }
}
.frase {
  color: #fff; font-size: clamp(1.6rem, 2.6vw, 2.3rem);
  line-height: 1.22; margin-top: 24px; letter-spacing: -0.015em;
}
/* A quebra marca a pausa retórica entre as duas frases — no mobile ela deixaria
   uma linha órfã curta, então lá o texto flui. */
.frase br { display: none; }
@media (min-width: 700px) { .frase br { display: inline; } }
.assinatura { color: var(--elo-dourado); margin-top: 20px; }

/* ---------------- CONVITE ---------------- */
.convite { display: grid; grid-template-columns: minmax(0, 1fr); gap: 8px; align-items: end; }
@media (min-width: 900px) {
  .convite { grid-template-columns: minmax(0, 1.5fr) minmax(0, auto); gap: 48px; }
}
.convite :deep(.cabecalho) { margin-bottom: 0; }
.convite-acao { display: flex; }
</style>
