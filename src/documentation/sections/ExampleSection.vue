<template>
	<v-row>
		<v-col
			id="examples"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#examples"
				>#</a>
				Example
			</h2>
		</v-col>
	</v-row>
	<v-row>
		<v-col cols="12">
			Examples coming soon...
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const classes = inject('classes');
</script>
