# ELO — site institucional

Site da **ELO**, central de cuidadores e assistência domiciliar. Conecta famílias que
precisam de cuidado em casa — para idosos, pacientes em recuperação ou pessoas com
necessidades especiais — a cuidadores, técnicos de enfermagem e acompanhantes
hospitalares, em todo o estado de São Paulo.

55.608.059 Carla Munhoz Sabino · CNPJ 55.608.059/0001-59 · Guarulhos/SP

## Stack

Vue 3 + Vuetify 3 + vue-router (hash history), build com Vue CLI. Sem backend: os dois
formulários montam a mensagem e abrem o WhatsApp — nada é gravado em servidor.

```bash
npm install
npm run serve    # desenvolvimento
npm run build    # gera dist/
```

## Estrutura

```
src/
├── config/
│   ├── contato.js      # WhatsApp, e-mail, redes, dados da empresa — ponto único
│   └── content.js      # todo o texto do site
├── assets/
│   ├── theme.css       # paleta, tipografia, motion, botões, réguas
│   ├── legal.css       # páginas de política
│   └── eloPath.js      # path do símbolo, extraído da logo oficial
├── components/
│   ├── EloSymbol.vue   # símbolo da marca em SVG inline, com animação de entrada
│   ├── ListaEditorial.vue
│   ├── SecaoTitulo.vue
│   ├── CampoForm.vue   # campo com rótulo fixo acima
│   ├── PageHero.vue · Header.vue · Footer.vue
├── pages/              # 5 páginas + 3 políticas
├── utils/whats.js      # validação, máscara de telefone e montagem da mensagem
└── directives/animateOnScroll.js
```

## Onde mexer

| O quê | Arquivo |
|---|---|
| Textos do site | `src/config/content.js` |
| WhatsApp, e-mail, Instagram, dados | `src/config/contato.js` |
| Cores, tipografia, motion | `src/assets/theme.css` |
| Tema do Vuetify | `src/plugins/vuetify.js` |

A direção visual e as regras que a mantêm consistente estão em [DESIGN.md](DESIGN.md).

## Páginas legais

`/privacidade`, `/termos` e `/repasse`. A política de repasse descreve como a ELO é
remunerada, o que o profissional recebe e o que a família paga — princípios, sem
valores, que dependem de cada caso e constam do contrato.

## Deploy

GitHub → Netlify. `netlify.toml` já configurado (`npm run build`, publica `dist/`).
O roteamento é por hash, então não há regra de rewrite a configurar no servidor.

## Símbolo da marca

O galho foi extraído da logo oficial (`ELO.svg`) para `src/assets/eloPath.js`, sem o
retângulo de fundo do arquivo original — ele viraria um halo sobre o verde. O mesmo
path serve o header, o hero, as marcas d'água e o favicon.
