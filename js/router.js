import accueil from './pages/accueil.js'
import ville from './pages/ville.js'
import meteo from './pages/meteo.js'

export default new VueRouter({
    routes: [
        { path: '/', component: accueil },
        { path: '/selection', component: ville },
        { path: '/meteo/:ville', component: meteo },
    ]
})