import { CONTATO } from '@/config/contato'

// Regras de validacao reaproveitadas pelos dois formularios do site.
export const obrigatorio = (msg = 'Campo obrigatório') => (v) =>
  (v !== null && v !== undefined && String(v).trim() !== '' && !(Array.isArray(v) && v.length === 0)) || msg

export const telefoneValido = (v) => {
  const digitos = String(v || '').replace(/\D/g, '')
  return (digitos.length === 10 || digitos.length === 11) || 'Digite o DDD e o número (ex.: 11 98765-4321)'
}

// Mascara progressiva: (11) 98765-4321
export function mascararTelefone(valor) {
  const d = String(valor || '').replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

/**
 * Abre o WhatsApp da ELO com a mensagem ja montada.
 * @param {string} titulo cabecalho da mensagem
 * @param {Array<[string, any]>} campos pares rotulo/valor — pares vazios sao descartados
 */
export function enviarPorWhats(titulo, campos) {
  const linhas = campos
    .filter(([, valor]) => valor !== null && valor !== undefined && String(valor).trim() !== '')
    .map(([rotulo, valor]) => `*${rotulo}:* ${Array.isArray(valor) ? valor.join(', ') : valor}`)

  const texto = [titulo, '', ...linhas].join('\n')
  window.open(`https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener')
}
