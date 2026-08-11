// A diretiva so diz QUANDO o elemento entrou; COMO ele entra e decisao do CSS
// (`.entra`, `.regua-anima`). Nao usar em tudo: reveal so faz sentido onde a
// entrada dirige a leitura.
//
// Em qualquer caminho o conteudo acaba visivel. Um reveal que nao dispara deixa
// a secao invisivel para sempre — falha pior que nao ter animacao nenhuma.
export default {
  mounted(el, binding) {
    // v-animate="120" atrasa em 120ms — stagger curto, no maximo ~6 irmaos
    const atraso = Number(binding?.value) || 0

    const revelar = () => {
      if (el.classList.contains('is-visible')) return
      if (atraso) el.style.transitionDelay = `${atraso}ms`
      el.classList.add('is-visible')
    }

    const semMovimento = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (semMovimento || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        observer.unobserve(entry.target)
        revelar()
      })
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' })

    observer.observe(el)
    el._eloObserver = observer

    // O observer pode existir e nunca disparar: viewport de altura zero, aba em
    // background, elemento mais alto que a tela. Quem esta visivel dispara em
    // milissegundos, entao este timeout so pega o caso patologico.
    el._eloResgate = setTimeout(() => { observer.disconnect(); revelar() }, 1500)
  },

  unmounted(el) {
    if (el._eloResgate) clearTimeout(el._eloResgate)
    if (el._eloObserver) el._eloObserver.disconnect()
  },
}
