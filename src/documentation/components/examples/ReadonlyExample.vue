<template>
	<VDateField
		v-model="dateModel"
		:readonly="true"
	/>
</template>

<script setup>
const dateModel = ref();

const templateCode = `<template>
  <VDateField
	  v-model="dateModel"
	  :readonly="true"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const dateModel = ref('#ff0000');
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">readonly</code> prop will put the <code class="ic">VTextField</code> and <code class="ic">VDatePicker</code> components into readonly mode. Clicking on the field will still open the date picker.',
		name: 'Readonly Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
