<template>
  <PageHero :label="CUIDADOR.hero.olho" :titulo="CUIDADOR.hero.titulo" :texto="CUIDADOR.hero.texto" />

  <!-- ========== FORMULÁRIO — primeira coisa da página ==========
       Os requisitos ficam ao lado, não numa seção antes: o profissional confere
       enquanto preenche, em vez de rolar uma página inteira para chegar no campo. -->
  <section id="cadastro" class="secao secao-papel">
    <div class="wrap form-grid">
      <div class="form-coluna">
        <div class="linha-label">
          <span class="t-label label">{{ CUIDADOR.formulario.olho }}</span>
          <hr v-animate class="regua regua-anima regua-escura trilho">
        </div>
        <h2 class="t-display t-secao form-titulo">{{ CUIDADOR.formulario.titulo }}</h2>
        <p class="t-corpo form-texto">{{ CUIDADOR.formulario.texto }}</p>

        <div class="cartao-form">
          <v-form ref="form" @submit.prevent="enviar">
            <div class="grade">
              <CampoForm rotulo="Nome completo" class="col-2" v-slot="{ id }">
                <v-text-field :id="id" v-model="d.nome"
                              :rules="[obrigatorio()]" autocomplete="name" />
              </CampoForm>

              <CampoForm rotulo="Formação / certificação" v-slot="{ id }">
                <v-select :id="id" v-model="d.formacao" :items="FORMACOES" placeholder="Selecione"
                          :rules="[obrigatorio('Selecione a sua formação')]" />
              </CampoForm>

              <CampoForm rotulo="Tempo de experiência" v-slot="{ id }">
                <v-select :id="id" v-model="d.experiencia" :items="EXPERIENCIAS" placeholder="Selecione"
                          :rules="[obrigatorio('Selecione o tempo de experiência')]" />
              </CampoForm>

              <CampoForm rotulo="Disponibilidade" class="col-2" v-slot="{ id }">
                <v-select :id="id" v-model="d.disponibilidade" :items="DISPONIBILIDADES"
                          multiple chips placeholder="Selecione uma ou mais"
                          hint="Pode marcar mais de uma" persistent-hint
                          :rules="[obrigatorio('Marque pelo menos uma disponibilidade')]" />
              </CampoForm>

              <CampoForm rotulo="Região onde você atende" v-slot="{ id }">
                <v-text-field :id="id" v-model="d.regiao" placeholder="Ex.: Guarulhos e região"
                              hint="Cidade e bairros, dentro do estado de São Paulo" persistent-hint
                              :rules="[obrigatorio('Informe a sua região de atendimento')]" />
              </CampoForm>

              <CampoForm rotulo="Telefone / WhatsApp" v-slot="{ id }">
                <v-text-field :id="id" v-model="d.telefone"
                              inputmode="tel" autocomplete="tel" placeholder="(11) 98765-4321"
                              :rules="[obrigatorio(), telefoneValido]"
                              @update:model-value="d.telefone = mascararTelefone($event)" />
              </CampoForm>
            </div>

            <p v-if="erro" class="aviso-erro" role="alert">
              Confira os campos destacados acima antes de enviar.
            </p>

            <button type="submit" class="elo-cta elo-cta--verde botao-enviar">
              <span>Enviar cadastro pelo WhatsApp</span>
              <span class="cta-seta" aria-hidden="true">→</span>
            </button>
            <p class="nota-envio">
              Documentação e triagem seguem pelo WhatsApp. Nenhum dado é gravado aqui — veja a
              <router-link to="/privacidade">privacidade</router-link> e o
              <router-link to="/repasse">repasse</router-link>.
            </p>
          </v-form>
        </div>
      </div>

      <!-- Requisitos ao lado do formulário, para conferir enquanto preenche -->
      <aside class="apoio">
        <div class="apoio-bloco">
          <hr class="regua regua-forte">
          <p class="t-sub apoio-titulo">{{ CUIDADOR.requisitos.titulo }}</p>
          <ul class="requisitos">
            <li v-for="r in CUIDADOR.requisitos.itens" :key="r" class="requisito">{{ r }}</li>
          </ul>
          <p class="apoio-nota">{{ CUIDADOR.requisitos.nota }}</p>
        </div>
      </aside>
    </div>
  </section>

  <!-- ========== O QUE MUDA PARA VOCÊ ========== -->
  <section class="secao secao-beneficios fundo-verde-fundo">
    <EloSymbol class="galho-marca galho-benef" :size="300" cor="#FFD18B" aria-hidden="true" />
    <div class="wrap benef-wrap">
      <SecaoTitulo claro :label="CUIDADOR.beneficios.olho" :titulo="CUIDADOR.beneficios.titulo" />
      <ListaEditorial :itens="CUIDADOR.beneficios.itens" claro compacta />
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import PageHero from '@/components/PageHero.vue'
import SecaoTitulo from '@/components/SecaoTitulo.vue'
import ListaEditorial from '@/components/ListaEditorial.vue'
import EloSymbol from '@/components/EloSymbol.vue'
import CampoForm from '@/components/CampoForm.vue'
import { CUIDADOR } from '@/config/content'
import { obrigatorio, telefoneValido, mascararTelefone, enviarPorWhats } from '@/utils/whats'

const FORMACOES = ['Técnico de enfermagem', 'Auxiliar de enfermagem', 'Cuidador de idosos', 'Acompanhante hospitalar', 'Outra formação da área']
const EXPERIENCIAS = ['Menos de 1 ano', 'De 1 a 3 anos', 'De 3 a 5 anos', 'De 5 a 10 anos', 'Mais de 10 anos']
const DISPONIBILIDADES = ['Diarista', 'Plantão de 12h — diurno', 'Plantão de 12h — noturno', 'Período integral', 'Fins de semana']

const form = ref(null)
const erro = ref(false)
const d = reactive({
  nome: '', formacao: null, experiencia: null,
  disponibilidade: [], regiao: '', telefone: '',
})

async function enviar() {
  const { valid } = await form.value.validate()
  erro.value = !valid
  if (!valid) return
  enviarPorWhats('Cadastro de cuidador — site ELO', [
    ['Nome', d.nome],
    ['Formação', d.formacao],
    ['Experiência', d.experiencia],
    ['Disponibilidade', d.disponibilidade],
    ['Região de atendimento', d.regiao],
    ['Telefone', d.telefone],
  ])
}
</script>

<style scoped>
.wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

.form-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 34px; }
@media (min-width: 1000px) {
  .form-grid { grid-template-columns: minmax(0, 1.5fr) minmax(0, 0.5fr); gap: 56px; align-items: start; }
  .apoio { position: sticky; top: calc(var(--header-h) + 40px); }
}

.linha-label { display: flex; align-items: center; gap: 18px; margin-bottom: 14px; }
.label { color: var(--elo-verde-escuro); flex: 0 0 auto; }
.trilho { flex: 1 1 auto; }
.form-titulo { color: var(--elo-verde-escuro); }
.form-texto { color: var(--elo-tinta-suave); margin-top: 12px; margin-bottom: 26px; }

.cartao-form {
  background: var(--elo-papel-claro);
  border: 1px solid rgba(44, 87, 87, 0.16);
  border-radius: var(--radius);
  padding: 26px 20px 24px;
}
@media (min-width: 700px) { .cartao-form { padding: 34px 32px 28px; } }

.grade { display: grid; grid-template-columns: minmax(0, 1fr); gap: 14px 20px; }
@media (min-width: 700px) {
  .grade { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .col-2 { grid-column: 1 / -1; }
}

.botao-enviar { width: 100%; margin-top: 16px; }
.nota-envio { margin-top: 12px; font-size: 0.88rem; color: var(--elo-tinta-suave); text-align: center; }
.nota-envio a { color: var(--elo-verde-escuro); }
.aviso-erro {
  margin: 8px 0 4px; padding: 12px 14px;
  border-left: 3px solid #8F4239; background: rgba(143, 66, 57, 0.07);
  color: #7A3830; font-weight: 500; font-size: 0.94rem;
}

.apoio-titulo { color: var(--elo-verde-escuro); margin-top: 16px; }
.requisitos { list-style: none; padding: 0; margin: 16px 0 0; }
.requisito {
  position: relative; padding: 10px 0 10px 20px;
  color: var(--elo-tinta-suave); font-size: 0.95rem; line-height: 1.5;
  border-bottom: 1px solid rgba(44, 87, 87, 0.14);
}
.requisito::before {
  content: ''; position: absolute; left: 0; top: 18px;
  width: 10px; height: 1.5px; background: var(--elo-verde-medio);
}
.apoio-nota { margin-top: 16px; font-size: 0.9rem; color: var(--elo-tinta-suave); line-height: 1.55; }

.secao-beneficios { position: relative; overflow: hidden; }
.galho-benef { right: 24px; bottom: 24px; opacity: 0.07; }
@media (max-width: 999px) { .galho-benef { right: -50px; bottom: -30px; } }
.benef-wrap { position: relative; }
</style>
