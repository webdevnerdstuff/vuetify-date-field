<template>
	<VDateField
		v-model="dateModel"
		multiple
	/>

	<VDateField
		v-model="dateModel2"
		clearable
		multiple
	/>
</template>

<script setup>
const date = new Date();
const date2 = new Date(Date.now() + (3600 * 1000 * 24));
const dateModel = ref(undefined);
const dateModel2 = ref([date, date2]);


const templateCode = `<template>
  <VDateField
    v-model="dateModel"
    multiple
  />

  <VDateField
    v-model="dateModel2"
    clearable
    multiple
  />
</template>
`;

const scriptCode = `\<script setup\>
  const date = new Date();
  const date2 = new Date(Date.now() + (3600 * 1000 * 24));
  const dateModel = ref(undefined);
  const dateModel2 = ref([date, date2]);
\</script\>`;


defineExpose({
	exampleCode: {
		desc: '',
		name: 'Multiple Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
