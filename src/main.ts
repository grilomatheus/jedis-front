import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia';

loadFonts();

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());

app.mount('#app');