<template>
	<div
		ref="fieldContainerRef"
		class="v-date-field"
	>
		<!-- ================================================== VTextField -->
		<v-text-field
			ref="textFieldRef"
			v-bind="$attrs"
			:class="textFieldClasses"
			:color="color"
			:density="density"
			:hint="hint"
			:messages="messages"
			:model-value="modelValue"
			:persistent-hint="persistentHint"
			:persistent-placeholder="persistentPlaceholder"
			:placeholder="placeholder"
			:readonly="textFieldReadonly"
			:theme="themeAll"
			@click:clear="toggleDatePicker('clear')"
			@click:control="toggleCheck('textField')"
			@keyup.enter="toggleDatePicker('keyup')"
			@update:model-value="updateModelValue"
		>
			<!-- ========================= Pass Slots -->
			<template
				v-for="(_, slot) in slots"
				#[slot]="scope"
			>
				<slot
					v-if="!slots['prepend'] && !slots['prepend-inner'] && !slots['append-inner'] && !slots['append']"
					:name="slot"
					v-bind="{ ...scope }"
				/>
			</template>

			<!-- ========================= Prepend Slot -->
			<template
				v-if="slots.prepend"
				#[`prepend`]="props"
			>
				<slot
					name="prepend"
					v-bind="{
						...props,
						toggleDatePicker,
					}"
				/>
			</template>

			<template
				v-if="prependIcon && !slots['prepend']"
				#prepend
			>
				<DatePickerIcon
					v-if="prependIcon"
					:color="hoverIconColor"
					:icon="prependIcon"
					:iconSize="iconSize"
					@click="toggleDatePicker"
				/>
			</template>

			<!-- ========================= Prepend Inner Slot -->
			<template
				v-if="slots['prepend-inner']"
				#[`prepend-inner`]="props"
			>
				<slot
					name="prepend-inner"
					v-bind="{
						...props,
						toggleDatePicker,
					}"
				/>
			</template>

			<template
				v-if="prependInnerIcon && !slots['prepend-inner']"
				#prepend-inner
			>
				<DatePickerIcon
					v-if="prependInnerIcon"
					:color="hoverIconColor"
					:icon="prependInnerIcon"
					:iconSize="iconSize"
					@click="toggleCheck('textFieldIcon')"
				/>
			</template>

			<!-- ========================= Append Inner Slot -->
			<template
				v-if="slots['append-inner']"
				#[`append-inner`]="props"
			>
				<slot
					name="append-inner"
					v-bind="{
						...props,
						toggleDatePicker,
					}"
				/>
			</template>

			<template
				v-if="appendInnerIcon && !slots['append-inner']"
				#append-inner
			>
				<DatePickerIcon
					v-if="appendInnerIcon"
					:color="hoverIconColor"
					:icon="appendInnerIcon"
					:iconSize="iconSize"
					@click="toggleCheck('textFieldIcon')"
				/>
			</template>

			<!-- ========================= Append Slot -->
			<template
				v-if="slots.append"
				#[`append`]="props"
			>
				<slot
					name="append"
					v-bind="{
						...props,
						toggleDatePicker,
					}"
				/>
			</template>

			<template
				v-if="appendIcon && !slots['append']"
				#append
			>
				<DatePickerIcon
					v-if="appendIcon"
					:color="hoverIconColor"
					:icon="appendIcon"
					:iconSize="iconSize"
					@click="toggleDatePicker"
				/>
			</template>

			<!-- Label Slot -->
			<template
				v-if="slots.label || label"
				#label
			>
				<slot
					v-if="slots.label"
					name="label"
				></slot>

				<div v-else-if="label">
					{{ label }}
					<span
						v-if="required"
						class="text-error ms-1"
					>*</span>
				</div>
			</template>
		</v-text-field>
	</div>

	<!-- ================================================== Card Picker Container  -->
	<Teleport to="body">
		<div class="position-elm-helper"></div>

		<v-defaults-provider :defaults="defaults">
			<v-card
				v-bind="defaultCardProps"
				ref="cardRef"
				:class="cardClasses"
				:style="cardStyles"
				:theme="defaults.VCard?.theme ?? themeAll"
				:width="textFieldProperties.width"
			>
				<!-- Date Picker -->
				<v-date-picker
					v-model="datePickerModelValue"
					:input-mode="datePickerProps.inputMode"
					@update:model-value="updateModelValue"
				></v-date-picker>
			</v-card>
		</v-defaults-provider>
	</Teleport>
</template>

<script setup lang="ts">
import {
	CardStylesObject,
	HtmlRefElement,
	Props,
	TextFieldProperties,
	VuetifyDefaults,
} from '@/types';
import { useConvertToUnit } from '@/plugin/composables/helpers';
import {
	useCardClasses,
	useTextFieldClasses,
} from '@/plugin/composables/classes';
import DatePickerIcon from '@/plugin/components/DatePickerIcon.vue';
import type { VCard } from 'vuetify/components';
import { onClickOutside } from '@vueuse/core';


defineOptions({
	inheritAttrs: false,
});

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([
	'update',
	'update:mode',
	'update:modelValue',
]);


// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), {
	appendIcon: undefined,
	appendInnerIcon: undefined,
	cardFieldWidth: false,
	cardOffsetX: 0,
	cardOffsetY: 5,
	cardPadding: 4,
	cardProps: () => ({}) as const,
	color: undefined,
	datePickerProps: () => ({}) as const,
	density: 'default',
	format: 'dd/mm/yyyy',
	hint: '',
	iconHoverColor: undefined,
	iconSize: 'default',
	label: undefined,
	messages: undefined,
	name: 'date',
	open: 'bottom left',
	persistentHint: false,
	persistentPlaceholder: false,
	placeholder: undefined,
	prependIcon: undefined,
	prependInnerIcon: 'default',
	readonly: false,
	readonlyInput: false,
	required: false,
});


// -------------------------------------------------- Defaults //
// ------------------------- VCard //
const defaultCardProps: Props['cardProps'] = {
	elevation: 5,
	hover: false,
	loading: false,
	verticalOffset: 28,
};

// ------------------------- VDatePicker //
const defaultDatePickerProps: Props['datePickerProps'] = {
	active: undefined,											// ! Fail: Not sure what this does or works
	allowedDates: undefined, 								// Pass
	bgColor: undefined, 										// Pass
	border: false, 													// ! Pass/Fail: Only boolean type works from `string | number | boolean`
	calendarIcon: '$calendar', 							// Pass
	color: undefined, 											// Pass
	// ! https://github.com/vuetifyjs/vuetify/issues/18650
	disabled: true, 												// !! Fail: Not working?
	elevation: 0, 													// * Pass: Keep this value
	header: '$vuetify.datePicker.header',		// Pass
	height: undefined, 											// Pass
	hideHeader: false, 											// Pass
	hideWeekdays: false, 										// Pass
	inputMode: 'calendar',									// Pass
	inputPlaceholder: 'dd/mm/yyyy',					// Pass
	inputText: '$vuetify.datePicker.input.placeholder', // Pass
	keyboardIcon: '$vuetify',								// ? Fail: Source Code shows for v3.5
	// ! https://github.com/vuetifyjs/vuetify/issues/18274
	landscape: false,												// !! Fail: Not sure what this does or works - Not implemented?
	location: undefined,										// !! Fail: Not sure what this does or works
	max: undefined, 												// Pass
	maxHeight: undefined,										// Pass
	maxWidth: undefined,										// Pass
	min: undefined,													// Pass
	minHeight: undefined,										// Pass
	minWidth: undefined,										// Pass
	modeIcon: '$subgroup',									// Pass
	month: undefined,												// Pass - 0 Index Based
	multiple: false,												// Pass
	nextIcon: '$next',											// Pass
	position: undefined,										// !! Fail: Not sure what this does or works - Not implemented?
	prevIcon: '$prev',											// Pass
	rounded: false,													// !! Fail: Not sure what this does or works - Not implemented?
	showAdjacentMonths: false,							// Pass
	showWeek: false,												// Pass
	tag: 'div',															// Pass
	text: undefined,												// !! Fail: Not sure what this does or works
	theme: undefined,												// Pass
	title: '$vuetify.datePicker.title',			// Pass
	viewMode: 'month',											// Pass
	width: undefined,												// !! Fail: Not sure what this does or works - Will Not Use
	year: undefined,												// Pass
};

const { datePickerProps } = toRefs(props);

const defaults = ref<VuetifyDefaults>({
	VCard: {
		...defaultCardProps,
		...props.cardProps,
	},
	VDatePicker: {
		...defaultDatePickerProps,
		...{
		},
		...datePickerProps.value,
	},
});




// -------------------------------------------------- Data #
const cardRef = ref<VCard | null>(null);
const cardStyles = ref<CardStylesObject>({});
const datePickerModelValue = ref<any>(attrs.modelValue);
const datePickerOpen = ref<boolean>(false);
const fieldContainerRef = ref<HtmlRefElement>(null);
const modelValue = ref<any>(attrs.modelValue);
const themeAll = ref(props.theme ?? undefined);
let textFieldProperties = reactive<TextFieldProperties>({
	bottom: 0,
	height: 0,
	left: 0,
	right: 0,
	top: 0,
	width: 0,
});


// -------------------------------------------------- Watch #
watch(() => attrs.modelValue, (newVal) => {
	updateModelValue(newVal);
});


// -------------------------------------------------- Computed #

// ------------------------- Text Field #
const textFieldClasses = computed(() => useTextFieldClasses({
	name: props.name,
	readonly: props.readonly,
	readonlyInput: props.readonlyInput,
}));

const textFieldReadonly = computed(() => {
	return props.readonly || props.readonlyInput;
});

const hoverIconColor = computed<string | undefined>(() => {
	if (props.iconHoverColor === false) {
		return undefined;
	}

	if (typeof props.iconHoverColor === 'string') {
		return props.iconHoverColor;
	}

	return props.color ?? undefined;
});

// ------------------------- Card #
const cardClasses = computed(() => useCardClasses({
	fullWidth: props.cardFieldWidth,
}));


// -------------------------------------------------- Methods //

// ------------------------- Toggle Check //
// ? Checks to prevent double triggers //
function toggleCheck(trigger: string) {
	if (trigger === 'textField' && !props.readonlyInput && !props.readonly) {
		return;
	}

	if (trigger === 'textFieldIcon' && (props.readonlyInput || props.readonly)) {
		return;
	}

	toggleDatePicker();
}

// ------------------------- Toggle Date Picker //
function toggleDatePicker(trigger?: string | Event): void {
	const defaultCoords = { left: 0, right: 0, top: 0, width: 0 };
	const fieldContainer = fieldContainerRef.value;

	// Only close the date picker if it is open on keyup & clear event //
	if (!datePickerOpen.value && (trigger === 'keyup' || trigger === 'clear')) {

		// If clear, reset the model values //
		if (trigger === 'clear') {
			updateModelValues('');
		}

		return;
	}

	datePickerOpen.value = !datePickerOpen.value;

	// If date picker is closed no further action is needed //
	if (!datePickerOpen.value) {
		cardStyles.value.display = 'none';
		return;
	}

	const fieldElementCoords = fieldContainer?.getBoundingClientRect() ?? defaultCoords;

	// Set the height and width of the field //
	let inputHeight: number | undefined = fieldContainer?.offsetHeight ?? 0;
	let inputWidth: number = 300;
	let positionLeft = fieldElementCoords?.left ?? 0;
	let positionRight = fieldElementCoords?.right ?? 0;

	const fieldInputContainer: HtmlRefElement = fieldContainerRef?.value?.querySelector('.v-field__input');
	const fieldContainerInputCoords = fieldInputContainer?.getBoundingClientRect() ?? defaultCoords;

	inputHeight = fieldInputContainer?.offsetHeight;
	inputWidth = fieldInputContainer?.offsetWidth ?? 0;
	positionLeft = fieldContainerInputCoords.left;
	positionRight = fieldContainerInputCoords.right - fieldContainerInputCoords.width;

	textFieldProperties = {
		bottom: 'initial',
		height: inputHeight as number,
		left: positionLeft,
		right: positionRight,
		top: (window.scrollY + fieldElementCoords?.top ?? 0),
		width: props.cardFieldWidth ? inputWidth : 'auto',
	};

	setCardStyles();
}

// ------------------------- Set Card Styles //
function setCardStyles(): void {
	let top: string | number = Number(textFieldProperties.top) + Number(textFieldProperties.height);
	let bottom: string | number = 'initial';
	let offsetY = Number(props.cardOffsetY) ?? 0;
	const offsetX = Number(props.cardOffsetX) ?? 0;

	if (props.hint || props.messages) {
		offsetY += defaults.value.VCard?.verticalOffset ?? 0;
	}

	top = top + offsetY;

	// Top/Bottom Card Alignment //
	if (props.open?.includes('top')) {
		bottom = (window.innerHeight - top) + Number(textFieldProperties.height) + (offsetY * 2);
		top = 'initial';
	}

	// Left/Right Card Alignment //
	let left: string | number = Number(textFieldProperties.left) + offsetX;
	let right: string | number = textFieldProperties.right ?? 0;

	if (props.cardFieldWidth) {
		left = textFieldProperties.left as number;
		right = 'initial';
	}
	else {
		right = 'initial';

		if (props.open?.includes('right')) {
			left = 'initial' as string;
			right = Number(textFieldProperties.right) + offsetX;
		}
	}

	const styles: CardStylesObject = {
		bottom: useConvertToUnit({ value: bottom }),
		display: 'block',
		left: useConvertToUnit({ value: left }),
		minWidth: useConvertToUnit({ value: textFieldProperties.width }),
		padding: useConvertToUnit({ value: props.cardPadding }),
		right: useConvertToUnit({ value: right }),
		top: useConvertToUnit({ value: top }),
		width: useConvertToUnit({ value: textFieldProperties.width }),
	};

	cardStyles.value = styles;
}

// ------------------------- Toggle Date Picker Click Outside Trigger //
onClickOutside(fieldContainerRef, (event) => {
	const element = unref(cardRef);

	if (event.target !== element && !element?.$el?.contains(event.target) && datePickerOpen.value) {
		toggleDatePicker('outside');
	}
}, { ignore: [cardRef] });


// ------------------------- Update Models //
function updateModelValue(value: any) {
	const returnValue = value ?? '';

	if (returnValue.length < 7) {
		modelValue.value = returnValue;
		updateModelValues(returnValue);
		return;
	}

	// if (pickerMode.value === 'hex') {
	// 	if (value.length > 7) {
	// 		returnValue = value.substr(0, 7);
	// 	}

	// 	if (returnColor.toString().match(/#[a-zA-Z0-9]{7}/)) {
	// 		returnValue = value.substr(0, 7);
	// 	}
	// }

	updateModelValues(returnValue);
}

function updateModelValues(val: any, updatePicker = true) {
	if (updatePicker) {
		datePickerModelValue.value = val;
	}

	modelValue.value = val;
	emit('update:modelValue', val);
	emit('update', val);
}

</script>

<style lang="scss" scoped>
.position-elm-helper {
	background-color: #f00;
	border-radius: 50%;
	display: none;
	height: 10px;
	left: 0;
	position: absolute;
	top: 0;
	width: 10px;
	z-index: 99999999999;
}
</style>
