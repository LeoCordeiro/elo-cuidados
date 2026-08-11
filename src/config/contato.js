// Único ponto de troca dos contatos do site.
export const CONTATO = {
  whatsapp: '5511922011483',
  telefoneExibicao: '(11) 92201-1483',
  email: 'atendimento@elocuidadosdomiciliar.com.br',
  instagram: '@elocuidadosdomiciliar',
  instagramUrl: 'https://instagram.com/elocuidadosdomiciliar',
  reclameAqui: 'https://www.reclameaqui.com.br/empresa/elocuidados',
}

export const EMPRESA = {
  nome: 'ELO',
  tagline: 'confiança e cuidado',
  razao: '55.608.059 Carla Munhoz Sabino',
  cnpj: '55.608.059/0001-59',
  cnae: '87.12-3-00 — Atividades de fornecimento de infraestrutura de apoio e assistência a paciente no domicílio',
  cnaeCurto: 'CNAE 87.12-3-00 — assistência a paciente no domicílio',
  cidade: 'Guarulhos/SP',
  atendimento: 'Todo o estado de São Paulo',
  horario: 'Atendimento de segunda a sábado, das 8h às 20h',
}

export function waLink(texto = 'Olá! Vim pelo site da ELO e gostaria de falar sobre cuidados em domicílio.') {
  return `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`
}
