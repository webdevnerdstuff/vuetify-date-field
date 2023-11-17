<template>
	<VDateField
		v-model="dateModel"
		clearable
		show-adjacent-months
	/>
</template>

<script setup>
const dateModel = ref(undefined);


const templateCode = `<template>
  <VDateField
    v-model="dateModel"
    clearable
    show-adjacent-months
  />
</template>
`;

const scriptCode = `\<script setup\>
  const dateModel = ref(undefined);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'By default days from previous and next months are not visible. They can be displayed using the show-adjacent-months prop.',
		name: 'Show Sibling Months',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
