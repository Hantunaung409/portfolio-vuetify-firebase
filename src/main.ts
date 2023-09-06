import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { auth } from './firebase/index'

loadFonts()
let appf;

auth.onAuthStateChanged(() => {
  if(!appf){
       appf = createApp(App)
       .use(router)
       .use(store)
       .use(vuetify)
       .mount('#app');
  } 
})

