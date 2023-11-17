<template>
	<VDateField
		v-model="dateModel"
		readonly-input
	/>
</template>

<script setup>
const dateModel = ref();

const templateCode = `<template>
  <VDateField
	  v-model="dateModel"
	  readonly-input
  />
</template>
`;

const scriptCode = `\<script setup\>
  const dateModel = ref();
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">readonly-input</code> prop. This prop is useful when you want to display the date picker field as a readonly input, but still want to be able to edit the date picker field. Clicking on the field will open the date picker.',
		name: 'Readonly Input Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
