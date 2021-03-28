
// Export pour un static jamstack
export default {
    target: 'static',
    router: {
        base: '/portfolio/'
    },
    generate: {
        // nom du dossier de distribution (docs pour gh-pages)
        dir: 'docs'
    }
  }