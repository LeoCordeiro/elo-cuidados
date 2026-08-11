<template>
  <PageHero label="Legal" titulo="Termos de uso"
            texto="O que este site é, qual o papel da ELO e o que não é orientação médica." />

  <section class="secao secao-papel">
    <div class="legal-wrap">
      <p class="legal-updated">Última atualização: agosto de 2026</p>

      <div class="legal-bloco">
        <h2 class="legal-h">O que este site é</h2>
        <p class="legal-p">
          Este é o site institucional da ELO, {{ EMPRESA.razao }}, CNPJ {{ EMPRESA.cnpj }}.
          Ele apresenta o serviço e recebe solicitações de famílias e cadastros de profissionais.
          Não há contratação, pagamento ou assinatura de contrato pelo site.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">O papel da ELO</h2>
        <p class="legal-p">
          A ELO é uma central de cuidadores e assistência domiciliar: fazemos a triagem dos
          profissionais, a seleção de quem melhor atende cada caso, o agendamento e a cobertura
          de substituições. As condições de cada atendimento — valores, horários, escopo e
          início — são combinadas caso a caso, fora do site. A remuneração da intermediação está
          descrita na <router-link to="/repasse">política de repasse</router-link>.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Informações prestadas por você</h2>
        <p class="legal-p">
          Você se responsabiliza pela veracidade do que informa. No caso de profissionais,
          formação, experiência e documentação são conferidas por nós antes de qualquer
          indicação — informação incorreta impede a entrada na rede.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Limites do conteúdo</h2>
        <p class="legal-p">
          Nada neste site constitui orientação médica, diagnóstico ou prescrição. Decisões
          clínicas são do médico responsável pelo paciente. Em caso de emergência, procure
          atendimento médico ou ligue para o SAMU (192).
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Propriedade</h2>
        <p class="legal-p">
          A marca ELO, o símbolo do galho, os textos e o layout deste site pertencem à
          {{ EMPRESA.razao }} e não podem ser reproduzidos sem autorização.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Contato</h2>
        <p class="legal-p">
          Dúvidas sobre estes termos: <a :href="`mailto:${CONTATO.email}`">{{ CONTATO.email }}</a>
          ou WhatsApp {{ CONTATO.telefoneExibicao }}. Foro de São Paulo/SP.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue'
import { EMPRESA, CONTATO } from '@/config/contato'
</script>

<style src="@/assets/legal.css" scoped></style>
