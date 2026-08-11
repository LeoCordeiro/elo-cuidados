<template>
  <PageHero label="Legal" titulo="Política de repasse"
            texto="Como a ELO é remunerada, o que o profissional recebe e o que a família paga." />

  <section class="secao secao-papel">
    <div class="legal-wrap">
      <p class="legal-updated">Última atualização: agosto de 2026</p>

      <div class="legal-bloco">
        <h2 class="legal-h">Por que esta página existe</h2>
        <p class="legal-p">
          A ELO fica entre duas pessoas que precisam confiar uma na outra: a família que abre
          a porta de casa e o profissional que entra. Quando existe dinheiro no meio de uma
          relação assim, o mínimo é dizer com clareza para onde ele vai.
        </p>
        <p class="legal-p">
          Esta página descreve os princípios. Os valores de cada atendimento são combinados
          caso a caso — eles dependem do tipo de cuidado, da carga horária e da região — e são
          informados por escrito às duas partes antes de qualquer início.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Como a ELO é remunerada</h2>
        <p class="legal-p">
          A ELO cobra pelo trabalho de intermediação: triagem e verificação dos profissionais,
          seleção de quem atende cada caso, organização de escala e cobertura de substituições.
          Esse trabalho é remunerado de uma ou mais destas formas, sempre acordadas previamente:
        </p>
        <ul class="legal-lista">
          <li>Percentual ou valor fixo sobre a hora, a diária ou o plantão contratado</li>
          <li>Mensalidade, nos casos de plano de cuidado contínuo</li>
          <li>Taxa adicional em solicitações de urgência ou substituição de última hora</li>
        </ul>
        <p class="legal-p">
          A ELO não recebe comissão de laboratórios, clínicas, planos de saúde, farmácias ou
          fornecedores de equipamento. Nenhuma indicação de profissional é influenciada por
          pagamento de terceiros.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">O que o profissional recebe</h2>
        <p class="legal-p">
          O valor da hora, da diária ou do plantão do profissional é informado a ele antes de
          aceitar o atendimento, já líquido da remuneração da ELO. Não existe desconto
          descoberto depois nem valor que muda entre o combinado e o pagamento.
        </p>
        <p class="legal-p">
          Entrar na rede da ELO é gratuito. Não cobramos taxa de cadastro, de triagem, de
          treinamento nem de manutenção de perfil. Se em algum momento passarmos a cobrar
          qualquer valor de profissional, isso será comunicado com antecedência e será opcional.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">O que a família paga</h2>
        <p class="legal-p">
          A família recebe o valor total do atendimento antes do início, com a composição
          explicada: quanto corresponde ao profissional e quanto corresponde ao serviço da ELO.
          Não há cobrança por orçamento, por indicação ou por troca de profissional a pedido
          da família.
        </p>
        <p class="legal-p">
          Substituição por falta, atestado ou férias do profissional é responsabilidade da ELO
          e não gera custo adicional — está incluída no que já foi contratado.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Vínculo</h2>
        <p class="legal-p">
          Os profissionais da rede são autônomos. A ELO faz a intermediação, a triagem e a
          gestão do atendimento; não há vínculo empregatício entre a ELO e o profissional,
          nem entre a ELO e a família. As condições de cada atendimento constam do contrato
          próprio, assinado fora deste site.
        </p>
      </div>

      <div class="legal-bloco">
        <h2 class="legal-h">Dúvida sobre valores</h2>
        <p class="legal-p">
          Se algo cobrado não estiver claro — de qualquer um dos dois lados — peça a
          composição pelo WhatsApp {{ CONTATO.telefoneExibicao }} ou por
          <a :href="`mailto:${CONTATO.email}`">{{ CONTATO.email }}</a>. Respondemos com o
          detalhamento por escrito.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue'
import { CONTATO } from '@/config/contato'
</script>

<style src="@/assets/legal.css" scoped></style>
