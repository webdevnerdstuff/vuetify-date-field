<template>
	<v-row>
		<v-col
			id="dependencies"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#dependencies"
				>#</a>
				Dependencies
			</h2>
		</v-col>

		<v-col cols="12">
			<a
				:href="store.links.vuetify"
				target="_blank"
			>
				Vuetify v3
			</a>
			<br />
			<a
				:href="store.links.vue"
				target="_blank"
			>
				Vue 3
			</a>
			<br />
			<a
				:href="store.links.vueUse"
				target="_blank"
			>
				VueUse
			</a>
		</v-col>
		<v-col cols="12">
			The <code class="ic">VDateField</code> component uses the <a
				:href="store.links.dayJs"
				target="_blank"
			>Day.js</a> library for date manipulation.
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useCoreStore } from '@/stores/index';


const classes = inject('classes');
const store = useCoreStore();
</script>
