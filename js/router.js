import Accueil from './pages/accueil.js'
import Ville from './pages/ville.js'
import Meteo from './pages/meteo.js'

export default new VueRouter({
    routes: [
        { path: '/', component: Accueil },
        { path: '/selection', component: Ville },
        { path: '/meteo/:ville', component: Meteo },
    ]
})