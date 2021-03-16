import tpl from '../utils/AvecTemplateHtml.js' 

export default tpl({
    template: 'accueil.html',
    data() {
        return {
            accueil: '',
            lang: 'en',
            title: 'Programmeur Junior',
            introduction: 'Toujours à l\'affut des nouvelles technologies, je suis particulièrement interressé par ce qui se trouve sous la couche front-end des applications, logiciels et sites web.',
            projectDisplay: 'Vous trouverez, en cliquant sur le lien, un exemple d\'une petite application météo utilisant la technologie VueJs dans le but de faire appel à un REST API, traiter et afficher les données reçues.',
            seeProject: 'Voir le projet'
        }
    },
    methods: {
        translation() {
            if (this.lang == 'en') {
                this.lang = 'fr'
                this.title = 'Junior Programmer'
                this.introduction = 'Always on the lookout for new technologies, I am particularly interested in what is under the front-end layer of applications, softwares and websites.'
                this.projectDisplay = 'You will find, by clicking on the link, an example of a small weather application using VueJs technology in order to use a REST API, process and display data received.'
                this.seeProject = 'See the project'
            } else {
                this.lang = 'en'
                this.title = 'Programmeur Junior'
                this.introduction = 'Toujours à l\'affut des nouvelles technologies, je suis particulièrement interressé par ce qui se trouve sous la couche front-end des applications, logiciels et sites web.'
                this.projectDisplay = 'Vous trouverez, en cliquant sur le lien, un exemple d\'une petite application utilisant la technologie VueJs dans le but de faire appel à un REST API, traiter et afficher les données recues.'
                this.seeProject = 'Voir le projet'
            }
        }
    }
})