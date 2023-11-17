<template>
	<VDateField
		v-model="dateModelA"
		prepend-icon="$vuetify"
		:prepend-inner-icon="false"
	/>

	<VDateField
		v-model="dateModelB"
		prepend-inner-icon="$vuetify"
	/>

	<VDateField
		v-model="dateModelC"
		append-inner-icon="$vuetify"
		:prepend-inner-icon="false"
	/>

	<VDateField
		v-model="dateModelD"
		append-icon="$vuetify"
		:prepend-inner-icon="false"
	/>
</template>

<script setup>
const dateModelA = ref();
const dateModelB = ref();
const dateModelC = ref();
const dateModelD = ref();

const templateCode = `<template>
  <VDateField
    v-model="dateModelA"
    prepend-icon="$vuetify"
    :prepend-inner-icon="false"
  >

  <VDateField
    v-model="dateModelB"
    prepend-inner-icon="$vuetify"
  />

  <VDateField
    v-model="dateModelC"
    append-inner-icon="$vuetify"
    :prepend-inner-icon="false"
  />

  <VDateField
    v-model="dateModelD"
    append-icon="$vuetify"
    :prepend-inner-icon="false"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const dateModelA = ref();
  const dateModelB = ref();
  const dateModelC = ref();
  const dateModelD = ref();
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the built in <code class="ic">VTextField</code> <code class="ic">prepend-icon</code>, <code class="ic">prepend-inner-icon</code>, <code class="ic">append-inner-icon</code>, and <code class="ic">append-icon</code> props. By default the <code class="ic">prepend-inner-icon</code> prop is used.',
		name: 'Icon Props',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
