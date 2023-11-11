import { App, Plugin } from 'vue';
import { VDateField } from './plugin';
import './plugin/styles/main.scss';

const install = (app: App) => {
	app.component('VDateField', VDateField);
};

VDateField.install = install;

export default VDateField as unknown as Plugin;

export { VDateField };
