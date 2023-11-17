<template>
	<VDateField
		v-model="dateModelA"
		icon-hover-color="primary"
	/>

	<VDateField
		v-model="dateModelB"
		color="primary"
	/>

	<VDateField
		v-model="dateModelC"
		color="primary"
		icon-hover-color="secondary"
	/>
</template>

<script setup>
const dateModelA = ref(null);
const dateModelB = ref(null);
const dateModelC = ref(null);

const templateCode = `<template>
  <VDateField
	  v-model="dateModelA"
	  icon-hover-color="primary"
  />

  <VDateField
    v-model="dateModelB"
    color="primary"
  />

  <VDateField
    v-model="dateModelC"
    color="primary"
    icon-hover-color="secondary"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const dateModelA = ref(undefined);
  const dateModelB = ref(undefined);
  const dateModelC = ref(undefined);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">icon-hover-color</code> prop. If you set the <code class="ic">color</code> prop the both the text field and icon will use that color. If you set the <code class="ic">icon-hover-color</code> prop the icon will use that color when the mouse hovers over it.',
		name: 'Icon Hover Color Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
