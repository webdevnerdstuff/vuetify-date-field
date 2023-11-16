<template>
	<v-col
		class="text-center"
		cols="12"
	>
		<v-btn
			class="me-1"
			@click="VDateFieldProps.disabled = !VDateFieldProps.disabled"
		>
			Disabled {{ VDateFieldProps.disabled }}
		</v-btn>
		<v-btn @click="VDateFieldProps.loading = !VDateFieldProps.loading">
			Loading {{ VDateFieldProps.loading }}
		</v-btn>
	</v-col>

	<v-col
		class="text-center"
		cols="12"
	>
		{{ dateModel }}
	</v-col>

	<v-col
		class="offset-4"
		cols="4"
	>
		<v-card elevation="5">
			<v-container>
				<VDateField
					v-model="dateModel"
					:allowedDates="VDateFieldProps.allowedDates"
					:append-icon="VDateFieldProps.appendIcon"
					:append-inner-icon="VDateFieldProps.appendInnerIcon"
					:cardFieldWidth="VDateFieldProps.cardFieldWidth"
					:cardOffsetX="VDateFieldProps.cardOffsetX"
					:cardOffsetY="VDateFieldProps.cardOffsetY"
					:cardPadding="VDateFieldProps.cardPadding"
					:cardProps="VDateFieldProps.cardProps"
					:clearable="VDateFieldProps.clearable"
					:color="VDateFieldProps.color"
					:date-picker-props="VDateFieldProps.datePickerProps"
					:density="VDateFieldProps.density"
					:disabled="VDateFieldProps.disabled"
					:elevation="VDateFieldProps.elevation"
					:format="VDateFieldProps.format"
					:header="VDateFieldProps.header"
					:height="VDateFieldProps.height"
					:hideHeader="VDateFieldProps.hideHeader"
					:hideWeekdays="VDateFieldProps.hideWeekdays"
					:hint="VDateFieldProps.hint"
					:hint-align="VDateFieldProps.hintAlign"
					:icon-hover-color="VDateFieldProps.iconHoverColor"
					:iconSize="VDateFieldProps.iconSize"
					:label="VDateFieldProps.label"
					:loading="VDateFieldProps.loading"
					:max="VDateFieldProps.max"
					:maxHeight="VDateFieldProps.maxHeight"
					:maxWidth="VDateFieldProps.maxWidth"
					:messages="VDateFieldProps.messages"
					:min="VDateFieldProps.min"
					:minHeight="VDateFieldProps.minHeight"
					:minWidth="VDateFieldProps.minWidth"
					:modeIcon="VDateFieldProps.modeIcon"
					:month="VDateFieldProps.month"
					:multiple="VDateFieldProps.multiple"
					:name="VDateFieldProps.name"
					:nextIcon="VDateFieldProps.nextIcon"
					:open="VDateFieldProps.open"
					:persistent-hint="VDateFieldProps.persistentHint"
					:persistent-placeholder="VDateFieldProps.persistentPlaceholder"
					:pickerBgColor="VDateFieldProps.pickerBgColor"
					:pickerColor="VDateFieldProps.pickerColor"
					:pickerTag="VDateFieldProps.pickerTag"
					:placeholder="VDateFieldProps.placeholder"
					:prepend-icon="VDateFieldProps.prependIcon"
					:prepend-inner-icon="VDateFieldProps.prependInnerIcon"
					:prevIcon="VDateFieldProps.prevIcon"
					:readonly="VDateFieldProps.readonly"
					:readonlyInput="VDateFieldProps.readonlyInput"
					:required="VDateFieldProps.required"
					:showAdjacentMonths="VDateFieldProps.showAdjacentMonths"
					:showWeek="VDateFieldProps.showWeek"
					:theme="VDateFieldProps.theme"
					:title="VDateFieldProps.title"
					:variant="VDateFieldProps.variant"
					:viewMode="VDateFieldProps.viewMode"
					@update:month="console.log('UPDATE month', $event)"
					@update:viewMode="console.log('UPDATE viewMode', $event)"
					@update:year="console.log('UPDATE year', $event)"
				>
					<!-- <template #title>
						Hello World
					</template> -->

					<!-- <template #header="props">
						<div class="v-picker__header">
							<div class="v-date-picker-header">
								<div class="v-date-picker-header__content">{{ props.header }}</div>
							</div>
						</div>
					</template> -->

					<!-- <template #actions>
						<v-btn class="me-1">Cancel</v-btn>
						<v-btn>Ok</v-btn>
					</template> -->
				</VDateField>
			</v-container>
		</v-card>
	</v-col>


	<!-- <v-col cols="12">
		<v-date-picker
			v-model="testDate"
			multiple
		></v-date-picker>
	</v-col>
	<v-col cols="12">
		{{ testDate }}
	</v-col> -->
</template>

<script setup>
// const dateModel = ref(new Date('11-20-2023'));
// const dateModel = ref('11-20-2023');
// const dateModel = ref([new Date('2023/11/20')]);
const dateModel = ref('2023/11/20, 2023/11/21, 2023/11/22, 2023/11/23');
// const dateModel = ref(undefined);
// const dateModel = ref(new Date('2023-11-20'));
// const testDate = ref([new Date('2023/11/20')]);

const datePickerProps = {
	// allowedDates: ['2023/11/20', '2023/11/21'],
	header: 'Select Date',
	height: undefined,
	hideHeader: false,
	hideWeekdays: false,
	max: undefined,
	maxHeight: undefined,
	maxWidth: undefined,
	min: undefined,
	minHeight: undefined,
	minWidth: undefined,
	modeIcon: '$subgroup',
	month: 3,
	multiple: true,
	nextIcon: '$next',
	pickerBgColor: undefined,
	pickerColor: undefined,
	pickerTag: 'div',
	prevIcon: '$prev',
	showAdjacentMonths: false,
	showWeek: false,
	title: '$vuetify.datePicker.title',
	viewMode: 'month',
};

const datePickerComponentProps = {
};

const VDateFieldProps = ref({
	...datePickerProps,
	// appendIcon: '$vuetify',
	// appendInnerIcon: '$vuetify',
	// cardFieldWidth: false,
	// cardOffsetX: 0,
	// cardOffsetY: 5,
	// cardPadding: 4,
	// cardProps: {
	// 	border: false,
	// 	color: '',
	// 	elevation: 9,
	// 	loading: false,
	// 	tag: 'div',
	// },
	// color: '',
	clearable: true,
	datePickerProps: datePickerComponentProps,
	density: 'default',
	disabled: false,
	// elevation: 9,
	format: 'YYYY/MM/DD',
	// hint: undefined,
	// hintAlign: undefined,
	// iconHoverColor: undefined,
	// iconSize: 'default',
	label: 'Date',
	loading: false,
	// messages: undefined,
	// // messages: 'This is a string message',
	// // messages: ['This is a message', 'This is another message'],
	// name: 'color',
	// open: 'bottom left',
	// persistentHint: true,
	// persistentPlaceholder: false,
	// placeholder: 'Select Date',
	// prependIcon: '$vuetify',
	// prependInnerIcon: '$vuetify',
	readonly: undefined,
	readonlyInput: undefined,
	required: false,
	// theme: 'light',
	variant: 'outlined',
});

// console.log(VDateFieldProps.value);


</script>
