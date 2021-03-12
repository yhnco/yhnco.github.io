import Accueil from './pages/Accueil'
import Ville from './pages/Ville'
import Meteo from './pages/Meteo'

export default new VueRouter({
    routes: [
        { path: '/', component: Accueil },
        { path: '/selection', component: Ville },
        { path: '/meteo/:ville', component: Meteo },
    ]
})