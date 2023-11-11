import '@/libraries/fontawesome';
import App from './App.vue';
import CodeBlock from '@wdns/vue-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from './plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as MyComponents from './index';


const app = createApp(App);
app.component('CodeBlock', CodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);
app.component('VDateField', MyComponents.VDateField);

registerPlugins(app);

app.mount('#app');
