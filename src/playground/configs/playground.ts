import '@/libraries/fontawesome';
import PlaygroundApp from './PlaygroundApp.vue';
import CodeBlock from '@wdns/vue-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '../../plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VDateField from '../../index';

const app = createApp(PlaygroundApp);
app.component('CodeBlock', CodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);
app.component('VDateField', VDateField);

registerPlugins(app);

app.mount('#app');
