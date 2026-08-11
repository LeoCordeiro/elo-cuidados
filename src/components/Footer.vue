<template>
  <footer class="elo-footer">
    <div class="footer-inner">
      <div class="col-marca">
        <div class="marca">
          <EloSymbol :size="46" cor="#FFD18B" />
          <div>
            <p class="marca-nome">ELO</p>
            <p class="t-tagline marca-tag">{{ EMPRESA.tagline }}</p>
          </div>
        </div>
        <p class="descricao">
          Central de cuidadores e assistência domiciliar. Conectamos famílias a
          cuidadores, técnicos de enfermagem e acompanhantes hospitalares em todo o
          estado de São Paulo.
        </p>
      </div>

      <nav class="col" aria-label="Páginas">
        <p class="t-label col-titulo">Site</p>
        <hr class="regua col-regua">
        <router-link to="/preciso-de-cuidador" class="link">Preciso de um cuidador</router-link>
        <router-link to="/seja-cuidador" class="link">Seja um cuidador ELO</router-link>
        <router-link to="/sobre" class="link">Sobre a ELO</router-link>
        <router-link to="/contato" class="link">Contato</router-link>
      </nav>

      <div class="col">
        <p class="t-label col-titulo">Contato</p>
        <hr class="regua col-regua">
        <a :href="wa" target="_blank" rel="noopener" class="link">{{ CONTATO.telefoneExibicao }}</a>
        <a :href="`mailto:${CONTATO.email}`" class="link link-quebra">{{ CONTATO.email }}</a>
        <a :href="CONTATO.instagramUrl" target="_blank" rel="noopener" class="link">{{ CONTATO.instagram }}</a>
        <p class="linha">{{ EMPRESA.cidade }}</p>
        <p class="linha">{{ EMPRESA.horario }}</p>
      </div>

      <div class="col">
        <p class="t-label col-titulo">Transparência</p>
        <hr class="regua col-regua">
        <router-link to="/privacidade" class="link">Política de privacidade</router-link>
        <router-link to="/termos" class="link">Termos de uso</router-link>
        <router-link to="/repasse" class="link">Política de repasse</router-link>
        <a :href="CONTATO.reclameAqui" target="_blank" rel="noopener" class="link">Reclame Aqui</a>
      </div>
    </div>

    <div class="rodape-legal">
      <p>{{ EMPRESA.razao }} · CNPJ {{ EMPRESA.cnpj }}</p>
      <p class="cnae">{{ EMPRESA.cnaeCurto }}</p>
    </div>
  </footer>
</template>

<script setup>
import EloSymbol from '@/components/EloSymbol.vue'
import { CONTATO, EMPRESA, waLink } from '@/config/contato'
const wa = waLink()
</script>

<style scoped>
.elo-footer { background: var(--elo-verde-tinta); color: #fff; padding: 52px 24px 24px; }
.footer-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: minmax(0, 1fr); gap: 34px;
}
@media (min-width: 760px) {
  .footer-inner { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .col-marca { grid-column: 1 / -1; }
}
@media (min-width: 1060px) {
  .footer-inner {
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr) minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 44px;
  }
  .col-marca { grid-column: auto; }
}

.marca { display: flex; align-items: center; gap: 14px; }
.marca-nome {
  font-family: var(--fonte-display); font-size: 1.8rem; font-weight: 400;
  color: var(--elo-dourado); line-height: 1; letter-spacing: 0.09em;
}
.marca-tag { color: rgba(255, 255, 255, 0.68); margin-top: 7px; }
.descricao { margin-top: 20px; color: rgba(255, 255, 255, 0.8); line-height: 1.62; max-width: 42ch; font-size: 0.96rem; }

.col { display: flex; flex-direction: column; }
.col-titulo { color: var(--elo-dourado); margin-bottom: 10px; }
.col-regua { margin-bottom: 14px; }
.link, .linha {
  color: rgba(255, 255, 255, 0.82); text-decoration: none; font-size: 0.97rem;
  line-height: 1.4; padding: 7px 0;
  transition: color var(--dur-hover) var(--ease-out);
}
.link:hover { color: var(--elo-dourado); }
/* o e-mail é longo e a coluna é estreita no tablet */
.link-quebra { overflow-wrap: anywhere; }

.rodape-legal {
  max-width: 1200px; margin: 40px auto 0; padding-top: 20px;
  border-top: 1px solid rgba(255, 209, 139, 0.24);
  display: flex; flex-wrap: wrap; gap: 8px 28px; justify-content: space-between;
  color: rgba(255, 255, 255, 0.6); font-size: 0.85rem;
}
.cnae { max-width: 52ch; }
</style>
