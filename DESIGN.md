# DESIGN.md — ELO

Direção visual do site e as regras que a mantêm consistente. Ler antes de mexer
em qualquer tela.

## Conceito

Canvas verde profundo, tipografia cor de osso, serifa clássica e **um acento único**
em dourado. É a estrutura que a própria logo já traz — verde-água e dourado — levada
para a página inteira.

O tom é orgânico e editorial, sem pressa. Nada de estética clínica: sem cruz médica,
sem estetoscópio, sem azul-e-branco de hospital. O motivo visual é o galho da logo.

## Direção

- **Tom:** orgânico clássico-editorial, considerado.
- **Tipografia:** **Playfair Display** (display, h1/h2) + **Jost** (corpo, labels, UI).
  Duas famílias, nunca uma terceira.
- **Paleta:** verde profundo (`#2C5757`/`#326565`) em ~65% da área; papel cor de osso
  (`#EDE8DC`); acento dourado `#FFD18B` em no máximo 10% — régua, CTA, marcador.
- **Assinatura de motion:** a régua dourada que se desenha da esquerda marcando a
  entrada de cada seção, e o galho que cresce uma vez no hero.

## Regras de layout

- **Sem 3 ou 4 colunas iguais de card.** Conteúdo vai em lista editorial
  (`ListaEditorial.vue`) ou composição assimétrica. Grid uniforme só quando os itens
  são curtos e realmente equivalentes — os formatos de atendimento, por exemplo.
- **Cantos de 4px.** Nada de cartão arredondado grande.
- **Réguas de 1px** no acento como divisória, em vez de caixa com sombra.
- **Alternância de seção clara e escura** para dar ritmo à página.
- **Rótulo acima do campo**, sempre visível. Nunca floating label: parte do público
  tem pouca familiaridade com interface, e o rótulo que vira placeholder some junto
  com a pergunta.
- Um único conjunto de ícones (MDI), e sempre conferindo que o ícone existe antes de
  usar — nome inválido não gera erro, só não desenha nada.
- Sem emoji na interface. Sem preto puro. Sem acento supersaturado.

## Telas de cadastro: formulário primeiro

Em `/preciso-de-cuidador` e `/seja-cuidador` o **formulário é a primeira seção depois
do hero**. Quem chega nelas já decidiu — explicação antes do campo é obstáculo.

O que apoia o preenchimento fica numa **coluna lateral fixa** ao lado do formulário
(os requisitos, no caso do cuidador; o convite a conversar antes, no da família).
O conteúdo explicativo vem **depois** do envio, numa seção só.

Duas seções foram eliminadas por redundância: "tipos de cuidado" e "formatos de
atendimento" já eram os campos `Tipo de cuidado` e `Carga horária` do próprio
formulário.

## Motion

- Easing de entrada: `cubic-bezier(0.16, 1, 0.3, 1)`
- Hover 180ms · entrada de elemento 420ms · reveal de seção 620ms
- Stagger de 70–90ms, no máximo ~6 irmãos
- Reveal dispara uma vez, com 16px de deslocamento — nunca 100px voando
- Animar **só `transform` e `opacity`**. Nunca `width`, `padding`, `margin` ou
  `box-shadow`: essas disparam layout ou repaint a cada frame
- `prefers-reduced-motion` desliga tudo e mostra o estado final

### O que anima e por quê

| Onde | Gesto | Por quê |
|---|---|---|
| Hero, no load | tagline → título → texto → CTAs → dados, 90ms de stagger | Ordem de leitura; layout estável (CLS 0) |
| Cabeçalho de seção | régua se desenha da esquerda (`scaleX`) | Assinatura da marca; marca a entrada da seção |
| Botões | véu sobe de baixo (`scaleY`) + seta desliza para dentro | Indica para onde o clique leva |
| Nav | sublinhado cresce da esquerda | Mesmo gesto da régua, em miniatura |
| Linha da lista | traço estica, conteúdo avança 6px, número acende | A linha inteira é o alvo, sem `scale` genérico |
| Portas do /sobre | conteúdo avança 10px, seta 8px, régua estica | Idem, em bloco maior |

O galho do hero cresce uma vez (máscara radial, 2s). É a única animação acima de 1s,
e existe porque é a marca se desenhando. Não se repete em nenhum outro lugar.

## Contraste — medido, não estimado

O verde da marca `#4A8B8B` **não é fundo de texto**: mede 3,92:1 com branco e 2,75:1
com o dourado. Ele é cor de marca e glow.

| Combinação | Ratio | Uso |
|---|---|---|
| branco / `#4A8B8B` | 3,92:1 | só elemento gráfico |
| `#FFD18B` / `#4A8B8B` | 2,75:1 | **nunca texto** |
| branco / `#326565` | 6,59:1 | base das faixas verdes |
| branco / `#2C5757` | 8,05:1 | rodapé |
| `#FFD18B` / `#2C5757` | 5,65:1 | CTA dourado |
| `#3D7676` / papel | 4,89:1 | detalhes; abaixo disso usar `#2C5757` |
| `#24403F` / `#EDE8DC` | 9,17:1 | corpo |

**O dourado só vive sobre fundo escuro.** Sobre o papel osso ele mede 1,16:1 e
desaparece — por isso número de lista, régua forte e marcador de `<li>` são verdes nas
seções claras.

O header transparente sobre o hero leva um scrim próprio: sem ele o contraste do menu
depende de onde o glow cai, e isso muda com a largura da janela.

Auditoria feita amostrando pixels da página renderizada — `getComputedStyle` não
enxerga a cor de um fundo em gradiente, e o antialiasing das letras contamina a
amostra se medido dentro do próprio retângulo do texto.
