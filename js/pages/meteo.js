import tpl from '../utils/AvecTemplateHtml.js' 
import { http_get, http_post } from '../utils/request.js'

export default tpl({
  template: 'meteo.html',
  data() {
    return {
      temperature: '',
      etatCiel: '',
      icon: '',
      lienImg: '',
      fuseauHoraire: '',
      ville: '',
      date: '',
      vent: '',
      vitesseVent: '',
      heureLevee:'',
      heureCouchee: '',
      precipitationsPluie: '',
      precipitationsNeige: '',
      error_message: false,
      image: '',
    }
  },
  mounted() {
    window.scrollTo(500, 0)
    this.refreshMeteo()
  },
  
  methods: {
    
    refreshMeteo() {  
      
      this.ville = this.$route.params.ville;
      
      http_get('http://api.openweathermap.org/data/2.5/weather?q=' + this.ville + '&units=metric&appid=1d8216e4406967dd276e948b49f3cc94&lang=fr').then(data => {
      if (data.cod == 200) {
        this.ville = data.name
        this.image = data.weather[0].main + ".jpg"
        let currentDateWithFormat = new Date().toJSON().slice(0,10).replace(/-/g,'/')
        let directionVent = data.wind.deg
        let pointCardinal = ""
        let couchee = new Date(data.sys.sunset * 1000)
        let minutesCouchee = couchee.getMinutes()
        if (minutesCouchee < 10) {
          minutesCouchee = '0' + minutesCouchee
        }
           
        let levee = new Date(data.sys.sunrise * 1000)
        let minutesLevee = levee.getMinutes()
        if (minutesLevee < 10) {
          minutesLevee = '0' + minutesLevee
        }
        
        if (data.rain != undefined) {
          this.precipitationsPluie = data.rain["1h"] + 'mm de pluie/h'
        }
        
        if (data.snow != undefined) {
          this.precipitationsNeige = data.snow["1h"] + 'mm de neige/h'
        }
        
        if (directionVent >= 337.5 && directionVent <= 22.5) {
          pointCardinal = 'Nord'
        } else if (directionVent >= 22.6 && directionVent <= 67.5) {
          pointCardinal = 'Nord-Est'
        } else if (directionVent >= 67.6 && directionVent <= 112.5) {
          pointCardinal = 'Est'
        } else if(directionVent >= 112.6 && directionVent <= 157.5) {
          pointCardinal = 'Sud-Est'
        } else if(directionVent >= 157.6 && directionVent <= 202.5) {
          pointCardinal = 'Sud'
        } else if(directionVent >= 202.6 && directionVent <= 247.5) {
          pointCardinal = 'Sud-Ouest'
        } else if(directionVent >= 247.6 && directionVent <= 292.5) {
          pointCardinal = 'Ouest'
        } else if(directionVent >= 292.6 && directionVent <= 337.4) {
          pointCardinal = 'Nord-Ouest'
        } 
        
        this.heureLevee = levee.getHours() + ":" + minutesLevee
        this.heureCouchee = couchee.getHours() + ":" + minutesCouchee
        this.vitesseVent = data.wind.speed * 3.6
        this.vitesseVent = this.vitesseVent.toFixed(2)
        this.vent = pointCardinal
        this.date = currentDateWithFormat
        this.icon = data.weather[0].icon
        this.lienImg = 'http://openweathermap.org/img/wn/' + this.icon + '@2x.png'
        this.etatCiel = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)
        this.temperature = data.main.temp
        this.fuseauHoraire = data.timezone/60/60
      } else if (data.cod == 404) {
        this.error_message = true
      }
    })
  }
}
})
