import tpl from '../utils/avecTemplateHtml.js' 

export default tpl({
    template: 'ville.html',
    data() {
        return {
            ville: ""
        }
    },
    methods: {
        login(e) {
            e.preventDefault()
            this.$router.push({
                path: '/meteo/' + this.ville
            })
        }
    }
})