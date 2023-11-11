<template>
	<v-row>
		<v-col
			id="description"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#description"
				>#</a>
				Description
			</h2>
		</v-col>

		<v-col cols="12">
			Vuetify Plugin Template is a template to help you get starting building your own plugin/component for Vuetify.
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const classes = inject('classes');
</script>
