import tpl from '../utils/AvecTemplateHtml.js' 

export default tpl({
    template: 'ville.html',
    data() {
        return {
            ville: ""
        }
    },

    mounted() {
        window.scrollTo(500, 0)
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