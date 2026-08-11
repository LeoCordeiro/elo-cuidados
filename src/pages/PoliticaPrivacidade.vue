<template>
  <PageHero label="Legal" titulo="Política de privacidade"
            texto="O que a ELO recebe, para que usa e o que você pode pedir a qualquer momento." />

  <section class="secao secao-papel">
    <div class="legal-wrap">
      <p class="legal-updated">Última atualização: agosto de 2026</p>

      <div class="legal-bloco">
        <h2 class="legal-h">Como este site trata os seus dados</h2>
        <p class="legal-p">
          Os formulários deste site não gravam nada em servidor. O que você digita é usado
          apenas para montar uma mensagem no seu próprio WhatsApp — a partir daí, o envio parte
          de você. Se você não apertar enviar, a ELO não recebe nada.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Dados que a ELO recebe</h2>
        <p class="legal-p">
          Quando você nos envia uma solicitação ou um cadastro, recebemos os dados que você
          mesmo informou: nome, telefone, região, tipo de cuidado necessário ou dados
          profissionais, além do que escrever livremente na conversa.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Para que usamos</h2>
        <ul class="legal-lista">
          <li>Entender a necessidade e selecionar o profissional adequado</li>
          <li>Organizar agendamentos, escalas e substituições</li>
          <li>Conferir formação, experiência e documentação de cuidadores</li>
          <li>Manter contato durante o período de atendimento</li>
        </ul>
        <p class="legal-p">
          Não vendemos, não alugamos e não compartilhamos os seus dados com terceiros para
          fins de marketing.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Dados de saúde</h2>
        <p class="legal-p">
          Informações sobre a condição de saúde da pessoa que vai receber o cuidado são dados
          sensíveis nos termos da LGPD. Compartilhamos essas informações apenas com o
          profissional efetivamente designado para o atendimento, e apenas na medida necessária
          para que ele possa cuidar bem.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Serviços de terceiros</h2>
        <p class="legal-p">
          O site é hospedado na Netlify e usa fontes servidas pelo Google Fonts — ambos podem
          registrar o endereço IP da visita nos próprios logs. O envio dos formulários acontece
          pelo WhatsApp, cujo tratamento de dados segue a política da Meta. A ELO não instala
          cookies de rastreamento nem ferramentas de publicidade neste site.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Seus direitos (LGPD)</h2>
        <p class="legal-p">
          Pela Lei 13.709/2018 você pode pedir, a qualquer momento, confirmação do tratamento,
          acesso, correção ou exclusão dos seus dados. Basta pedir pelo WhatsApp ou pelo e-mail
          abaixo — atendemos sem custo.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Controlador</h2>
        <p class="legal-p">
          {{ EMPRESA.razao }}<br>
          CNPJ {{ EMPRESA.cnpj }}<br>
          {{ EMPRESA.cidade }}<br>
          <a :href="`mailto:${CONTATO.email}`">{{ CONTATO.email }}</a>
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
