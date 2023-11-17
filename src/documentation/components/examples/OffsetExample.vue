<template>
	<VDateField
		v-model="dateModelA"
		card-offset-x="-36"
	/>

	<VDateField
		v-model="dateModelB"
		card-offset-y="25"
	/>
</template>

<script setup>
const dateModelA = ref(null);
const dateModelB = ref(null);

const templateCode = `<template>
  <VDateField
    v-model="dateModelA"
    card-offset-x="-36"
  />

  <VDateField
    v-model="dateModelB"
    card-offset-y="25"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const dateModelA = ref();
  const dateModelB = ref();
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">card-offset-x</code> & <code class="ic">card-offset-y</code> prop to offset the date picker card.',
		name: 'Card Offset Props',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
