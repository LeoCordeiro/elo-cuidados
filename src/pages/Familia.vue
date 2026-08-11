<template>
  <PageHero :label="FAMILIA.hero.olho" :titulo="FAMILIA.hero.titulo" :texto="FAMILIA.hero.texto" />

  <!-- ========== FORMULÁRIO — primeira coisa da página ==========
       Quem chega aqui já decidiu que precisa de cuidador. Explicação vem depois;
       antes disso ela é obstáculo. Os tipos de cuidado e os formatos de carga
       horária saíram da página: eles já são os campos do próprio formulário. -->
  <section id="solicitar" class="secao secao-papel">
    <div class="wrap form-grid">
      <div class="form-coluna">
        <div class="linha-label">
          <span class="t-label label">{{ FAMILIA.formulario.olho }}</span>
          <hr v-animate class="regua regua-anima regua-escura trilho">
        </div>
        <h2 class="t-display t-secao form-titulo">{{ FAMILIA.formulario.titulo }}</h2>
        <p class="t-corpo form-texto">{{ FAMILIA.formulario.texto }}</p>

        <div class="cartao-form">
          <v-form ref="form" @submit.prevent="enviar">
            <div class="grade">
              <CampoForm rotulo="Seu nome" class="col-2" v-slot="{ id }">
                <v-text-field :id="id" v-model="d.responsavel"
                              :rules="[obrigatorio()]" autocomplete="name" />
              </CampoForm>

              <CampoForm rotulo="Nome de quem vai receber o cuidado" opcional v-slot="{ id }">
                <v-text-field :id="id" v-model="d.paciente" />
              </CampoForm>

              <CampoForm rotulo="Qual a sua relação com essa pessoa?" opcional v-slot="{ id }">
                <v-select :id="id" v-model="d.relacao" :items="RELACOES" placeholder="Selecione" />
              </CampoForm>

              <CampoForm rotulo="Tipo de cuidado necessário" class="col-2" v-slot="{ id }">
                <v-select :id="id" v-model="d.tipoCuidado" :items="TIPOS" placeholder="Selecione"
                          :rules="[obrigatorio('Selecione o tipo de cuidado')]" />
              </CampoForm>

              <CampoForm rotulo="Carga horária desejada" v-slot="{ id }">
                <v-select :id="id" v-model="d.carga" :items="CARGAS" placeholder="Selecione"
                          :rules="[obrigatorio('Selecione a carga horária')]" />
              </CampoForm>

              <CampoForm rotulo="Para quando você precisa?" v-slot="{ id }">
                <v-select :id="id" v-model="d.urgencia" :items="URGENCIAS" placeholder="Selecione"
                          :rules="[obrigatorio('Selecione a urgência')]" />
              </CampoForm>

              <CampoForm rotulo="Cidade e bairro do atendimento" v-slot="{ id }">
                <v-text-field :id="id" v-model="d.regiao" placeholder="Ex.: Guarulhos, Vila Rosália"
                              hint="Atendemos todo o estado de São Paulo" persistent-hint
                              :rules="[obrigatorio('Informe a cidade e o bairro')]" />
              </CampoForm>

              <CampoForm rotulo="Telefone / WhatsApp" v-slot="{ id }">
                <v-text-field :id="id" v-model="d.telefone"
                              inputmode="tel" autocomplete="tel" placeholder="(11) 98765-4321"
                              :rules="[obrigatorio(), telefoneValido]"
                              @update:model-value="d.telefone = mascararTelefone($event)" />
              </CampoForm>

              <CampoForm rotulo="Quer contar mais alguma coisa?" opcional class="col-2" v-slot="{ id }">
                <v-textarea :id="id" v-model="d.observacoes" rows="3" auto-grow
                            hint="Rotina, condição de saúde, se a pessoa usa cadeira de rodas, o que for útil"
                            persistent-hint />
              </CampoForm>
            </div>

            <p v-if="erro" class="aviso-erro" role="alert">
              Confira os campos destacados acima antes de enviar.
            </p>

            <button type="submit" class="elo-cta elo-cta--verde botao-enviar">
              <span>Enviar solicitação pelo WhatsApp</span>
              <span class="cta-seta" aria-hidden="true">→</span>
            </button>
            <p class="nota-envio">
              Nenhum dado é gravado neste site — veja a
              <router-link to="/privacidade">política de privacidade</router-link>.
            </p>
          </v-form>
        </div>
      </div>

      <!-- Coluna de apoio: só o que ajuda a preencher agora -->
      <aside class="apoio">
        <div class="apoio-bloco">
          <hr class="regua regua-forte">
          <p class="t-sub apoio-titulo">Prefere conversar antes?</p>
          <p class="t-corpo apoio-texto">
            Se você não sabe ainda que tipo de cuidado precisa, é só chamar. A gente ajuda a
            entender pelo WhatsApp.
          </p>
          <a :href="wa" target="_blank" rel="noopener" class="elo-cta elo-cta--verde-linha apoio-cta">
            <span>Falar com a ELO</span>
            <span class="cta-seta" aria-hidden="true">→</span>
          </a>
        </div>
      </aside>
    </div>
  </section>

  <!-- ========== O QUE ACONTECE DEPOIS ========== -->
  <section class="secao secao-processo fundo-verde-fundo">
    <EloSymbol class="galho-marca galho-processo" :size="300" cor="#FFD18B" aria-hidden="true" />
    <div class="wrap processo-wrap">
      <SecaoTitulo claro label="Depois do envio" :titulo="FAMILIA.processo.titulo" />
      <ListaEditorial :itens="FAMILIA.processo.passos" numerado claro />
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
import { FAMILIA } from '@/config/content'
import { waLink } from '@/config/contato'
import { obrigatorio, telefoneValido, mascararTelefone, enviarPorWhats } from '@/utils/whats'

const wa = waLink('Olá! Vim pelo site da ELO. Preciso de um cuidador e queria conversar antes de preencher o formulário.')

const RELACOES = ['Mãe ou pai', 'Avó ou avô', 'Cônjuge', 'Filho ou filha', 'Outro familiar', 'Sou eu mesmo', 'Outro']
const TIPOS = ['Cuidado com idoso', 'Pós-cirúrgico / recuperação', 'Pessoa com necessidades especiais', 'Acompanhante hospitalar', 'Outro']
const CARGAS = ['Diarista (algumas horas por dia)', 'Plantão de 12h — diurno', 'Plantão de 12h — noturno', 'Período integral', 'Ainda não sei']
const URGENCIAS = ['Imediata — preciso agora', 'Na próxima semana', 'Estou planejando com antecedência']

const form = ref(null)
const erro = ref(false)
const d = reactive({
  responsavel: '', paciente: '', relacao: null, tipoCuidado: null,
  carga: null, urgencia: null, regiao: '', telefone: '', observacoes: '',
})

async function enviar() {
  const { valid } = await form.value.validate()
  erro.value = !valid
  if (!valid) return
  enviarPorWhats('Solicitação de cuidador — site ELO', [
    ['Responsável', d.responsavel],
    ['Quem vai receber o cuidado', d.paciente],
    ['Relação', d.relacao],
    ['Tipo de cuidado', d.tipoCuidado],
    ['Carga horária', d.carga],
    ['Urgência', d.urgencia],
    ['Região', d.regiao],
    ['Telefone', d.telefone],
    ['Observações', d.observacoes],
  ])
}
</script>

<style scoped>
.wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

.form-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 34px; }
@media (min-width: 1000px) {
  .form-grid { grid-template-columns: minmax(0, 1.55fr) minmax(0, 0.45fr); gap: 56px; align-items: start; }
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
.apoio-texto { color: var(--elo-tinta-suave); margin-top: 10px; }
.apoio-cta { margin-top: 18px; width: 100%; }

.secao-processo { position: relative; overflow: hidden; }
.galho-processo { right: 24px; bottom: 24px; opacity: 0.07; }
@media (max-width: 999px) { .galho-processo { right: -50px; bottom: -30px; } }
.processo-wrap { position: relative; }
</style>
