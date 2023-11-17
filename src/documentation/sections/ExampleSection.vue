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
			<ExampleContainer
				:code="getTemplateCode('BasicExampleRef')"
				:codeBlockOptions="codeBlockOptions"
				@closePicker="closePicker('BasicExampleRef');"
			>
				<BasicExample
					ref="BasicExampleRef"
					:open="refElementsOpen.BasicExampleRef"
				/>
			</ExampleContainer>
		</v-col>

		<v-col cols="12">
			<ExampleContainer
				:code="getTemplateCode('MultipleExampleRef')"
				:codeBlockOptions="codeBlockOptions"
				@closePicker="closePicker('MultipleExampleRef');"
			>
				<MultipleExample ref="MultipleExampleRef" />
			</ExampleContainer>
		</v-col>

		<v-col cols="12">
			<ExampleContainer
				:code="getTemplateCode('FormatExampleRef')"
				:codeBlockOptions="codeBlockOptions"
				@closePicker="closePicker('FormatExampleRef');"
			>
				<FormatExample ref="FormatExampleRef" />
			</ExampleContainer>
		</v-col>

		<v-col cols="12">
			<ExampleContainer
				:code="getTemplateCode('ShowSiblingMonthsExampleRef')"
				:codeBlockOptions="codeBlockOptions"
				@closePicker="closePicker('ShowSiblingMonthsExampleRef');"
			>
				<ShowSiblingMonthsExample ref="ShowSiblingMonthsExampleRef" />
			</ExampleContainer>
		</v-col>

		<v-col cols="12">
			<ExampleContainer
				:code="getTemplateCode('IconHoverColorExampleRef')"
				:codeBlockOptions="codeBlockOptions"
				@closePicker="closePicker('IconHoverColorExampleRef');"
			>
				<IconHoverColorExample ref="IconHoverColorExampleRef" />
			</ExampleContainer>
		</v-col>

		<v-col cols="12">
			<ExampleContainer
				:code="getTemplateCode('ReadonlyInputExampleRef')"
				:codeBlockOptions="codeBlockOptions"
				@closePicker="closePicker('ReadonlyInputExampleRef');"
			>
				<ReadonlyInputExample ref="ReadonlyInputExampleRef" />
			</ExampleContainer>
		</v-col>

		<v-col cols="12">
			<ExampleContainer
				:code="getTemplateCode('ReadonlyExampleRef')"
				:codeBlockOptions="codeBlockOptions"
				@closePicker="closePicker('ReadonlyExampleRef');"
			>
				<ReadonlyExample ref="ReadonlyExampleRef" />
			</ExampleContainer>
		</v-col>

		<v-col cols="12">
			<ExampleContainer
				:code="getTemplateCode('IconsExampleRef')"
				:codeBlockOptions="codeBlockOptions"
				@closePicker="closePicker('IconsExampleRef');"
			>
				<IconsExample ref="IconsExampleRef" />
			</ExampleContainer>
		</v-col>

		<v-col cols="12">
			<ExampleContainer
				:code="getTemplateCode('OffsetExampleRef')"
				:codeBlockOptions="codeBlockOptions"
				@closePicker="closePicker('OffsetExampleRef');"
			>
				<OffsetExample ref="OffsetExampleRef" />
			</ExampleContainer>
		</v-col>
	</v-row>
</template>

<script setup>
import ExampleContainer from '@/documentation/components/ExampleContainer.vue';
import {
	BasicExample,
	FormatExample,
	IconHoverColorExample,
	IconsExample,
	MultipleExample,
	OffsetExample,
	ReadonlyExample,
	ReadonlyInputExample,
	ShowSiblingMonthsExample,
} from '@/documentation/components/examples';


defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const BasicExampleRef = ref(null);
const MultipleExampleRef = ref(null);
const ShowSiblingMonthsExampleRef = ref(null);
const IconHoverColorExampleRef = ref(null);
const ReadonlyInputExampleRef = ref(null);
const ReadonlyExampleRef = ref(null);
const IconsExampleRef = ref(null);
const OffsetExampleRef = ref(null);
const FormatExampleRef = ref(null);



const refElements = ref({
	BasicExampleRef,
	FormatExampleRef,
	IconHoverColorExampleRef,
	IconsExampleRef,
	MultipleExampleRef,
	OffsetExampleRef,
	ReadonlyExampleRef,
	ReadonlyInputExampleRef,
	ShowSiblingMonthsExampleRef,
});

const refElementsOpen = ref({
	BasicExampleRef: null,
	FormatExampleRef: null,
	IconHoverColorExampleRef: null,
	IconsExampleRef: null,
	MultipleExampleRef: null,
	OffsetExampleRef: null,
	ReadonlyExampleRef: null,
	ReadonlyInputExampleRef: null,
	ShowSiblingMonthsExampleRef: null,
});

const classes = inject('classes');
// const h2Classes = ref('offset-lg-2 offset-xl-1 v-col-sm-12 v-col-lg-8 v-col-xl-10 mb-0 pb-0');


function getTemplateCode(exampleName) {
	const el = refElements.value[exampleName];
	const example = el?.exampleCode ?? { code: '', desc: undefined, name: undefined, template: '' };

	return example;
}

function closePicker(key) {
	refElementsOpen.value[key] = new Date().getTime().toString();
}
</script>

<style lang="scss" scoped>
:deep(pre),
:deep(code) {
	&.ic {
		background-color: rgba(255, 255, 255, 0.1) !important;
		border-radius: 3px;
		font-size: 85%;
		font-weight: normal;
		padding: 0.2em 0.4em;
	}
}
</style>

<style lang="scss">
.v-theme--light {
	pre,
	code {
		&.ic {
			background-color: rgba(0, 0, 0, 0.1) !important;
		}
	}
}
</style>
