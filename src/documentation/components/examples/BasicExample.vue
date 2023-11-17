<template>
	<VDateField v-model="dateModel" />
</template>

<script setup>
const dateModel = ref(undefined);


const templateCode = `<template>
  <VDateField v-model="dateModel" />
</template>
`;

const scriptCode = `\<script setup\>
  const dateModel = ref(undefined);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'A simple example of a date picker field using the VTextField component. Clicking on the icon will open the date picker.',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
