<template>
	<VDateField
		v-model="dateModelA"
		format="YYYY-MM-DD"
	/>

	<VDateField
		v-model="dateModelB"
		format="DD-MM-YYYY"
	/>

	<VDateField
		v-model="dateModelC"
		format="ddd, MMM D"
		multiple
	/>
</template>

<script setup>
const dateModelA = ref();
const dateModelB = ref();
const dateModelC = ref();


const templateCode = `<template>
  <VDateField
    v-model="dateModel"
    format="YYYY-MM-DD"
  />

<VDateField
    v-model="dateModel"
    format="DD-MM-YYYY"
  />

  <VDateField
    v-model="dateModelC"
    format="ddd, MMM D"
    multiple
  />
</template>
`;

const scriptCode = `\<script setup\>
  const dateModelA = ref();
  const dateModelB = ref();
  const dateModelC = ref();
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'The format prop allows you to specify the format of the date you would like to use. The <code class="ic">VDateField</code> will attempt to fix the supplied date format if it does not match correctly.',
		name: 'Format Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
