import { defineStore } from 'pinia';


const propsHeaders = [
	{
		align: 'start',
		filterable: true,
		key: 'name',
		sortable: true,
		title: 'Name',
		width: '20%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'type',
		sortable: false,
		title: 'Type',
		width: '20%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'default',
		sortable: false,
		title: 'Default',
		width: '15%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'desc',
		sortable: false,
		title: 'Description',
	},
];

const datePickerProps = [
	{
		default: 'undefined',
		desc: 'Restricts which dates can be selected.',
		name: 'allowedDates',
		pickerProp: true,
		type: `VDatePicker['$props']['allowedDates']`,
	},
	{
		default: 'Select Date',
		desc: 'Text shown when no display-date is set.',
		name: 'header',
		pickerProp: true,
		type: `VDatePicker['$props']['header']`,
	},
	{
		default: 'undefined',
		desc: 'Sets the height for the <code class="ic">VDateField</code>.',
		name: 'height',
		pickerProp: true,
		type: `VDatePicker['$props']['height']`,
	},
	{
		default: 'false',
		desc: 'Hides the header.',
		name: 'hideHeader',
		pickerProp: true,
		type: `VDatePicker['$props']['hideHeader']`,
	},
	{
		default: 'false',
		desc: 'Hides the weekdays.',
		name: 'hideWeekdays',
		pickerProp: true,
		type: `VDatePicker['$props']['hideWeekdays']`,
	},
	{
		default: 'undefined',
		desc: 'Maximum allowed date/month (ISO 8601 format).',
		name: 'max',
		pickerProp: true,
		type: `VDatePicker['$props']['max']`,
	},
	{
		default: 'undefined',
		desc: 'Sets the maximum height for the <code class="ic">VDateField</code>.',
		name: 'maxHeight',
		pickerProp: true,
		type: `VDatePicker['$props']['maxHeight']`,
	},
	{
		default: 'undefined',
		desc: 'Sets the maximum width for the <code class="ic">VDateField</code>.',
		name: 'maxWidth',
		pickerProp: true,
		type: `VDatePicker['$props']['maxWidth']`,
	},
	{
		default: 'undefined',
		desc: 'Minimum allowed date/month (ISO 8601 format).',
		name: 'min',
		pickerProp: true,
		type: `VDatePicker['$props']['min']`,
	},
	{
		default: 'undefined',
		desc: 'Sets the minimum height for the <code class="ic">VDateField</code>.',
		name: 'minHeight',
		pickerProp: true,
		type: `VDatePicker['$props']['minHeight']`,
	},
	{
		default: '360',
		desc: 'Sets the minimum width for the <code class="ic">VDateField</code>.',
		name: 'minWidth',
		pickerProp: true,
		type: `VDatePicker['$props']['minWidth']`,
	},
	{
		default: '$subgroup',
		desc: 'Icon used for switching to month mode.',
		name: 'modeIcon',
		pickerProp: true,
		type: `VDatePicker['$props']['modeIcon']`,
	},
	{
		default: 'undefined',
		desc: 'Sets the month for the calendar. (Months are zero-based)',
		name: 'month',
		pickerProp: true,
		type: `VDatePicker['$props']['month']`,
	},
	{
		default: 'false',
		desc: 'Allow the selection of multiple dates.',
		name: 'multiple',
		pickerProp: true,
		type: `VDatePicker['$props']['multiple']`,
	},
	{
		default: '$next',
		desc: 'Sets the icon for next month/year button.',
		name: 'nextIcon',
		pickerProp: true,
		type: `VDatePicker['$props']['nextIcon']`,
	},
	{
		default: 'undefined',
		desc: 'Applies specified color to the <code class="ic">VDateField</code> control\'s background.',
		name: 'pickerBgColor',
		pickerProp: true,
		type: `VDatePicker['$props']['bgColor']`,
	},
	{
		default: 'undefined',
		desc: 'Applies specified color to the <code class="ic">VDateField</code> control.',
		name: 'pickerColor',
		pickerProp: true,
		type: `VDatePicker['$props']['color']`,
	},
	{
		default: 'div',
		desc: 'Specify a custom tag used on the <code class="ic">VDateField</code> root element.',
		name: 'pickerTag',
		pickerProp: true,
		type: `VDatePicker['$props']['tag']`,
	},
	{
		default: '$prev',
		desc: 'Sets the icon for previous month/year button.',
		name: 'prevIcon',
		pickerProp: true,
		type: `VDatePicker['$props']['prevIcon']`,
	},
	{
		default: 'false',
		desc: 'Toggles visibility of days from previous and next months.',
		name: 'showAdjacentMonths',
		pickerProp: true,
		type: `VDatePicker['$props']['showAdjacentMonths']`,
	},
	{
		default: 'false',
		desc: 'Toggles visibility of the week numbers in the body of the calendar.',
		name: 'showWeek',
		pickerProp: true,
		type: `VDatePicker['$props']['showWeek']`,
	},
	{
		default: '$vuetify.datePicker.title',
		desc: 'Specify a title text for the <code class="ic">VDateField</code>.',
		name: 'title',
		pickerProp: true,
		type: `VDatePicker['$props']['title']`,
	},
	{
		default: 'month',
		desc: 'Sets the initial view for the calendar. Ex. <code class="ic">month</code>, <code class="ic">months</code>, <code class="ic">year</code>',
		name: 'viewMode',
		pickerProp: true,
		type: `VDatePicker['$props']['viewMode']`,
	},
];

const componentProps = [
	...datePickerProps,
	{
		default: 'false',
		desc: 'Sets the <code class="ic">VCard</code> width to the same width as the <code class="ic">VTextField</code> input.',
		name: 'card-field-width',
		type: 'boolean',
	},
	{
		default: '0',
		desc: 'Sets the horizontal offset of the <code class="ic">VCard</code> component.',
		name: 'card-offset-x',
		type: 'number',
	},
	{
		default: '5',
		desc: 'Sets the vertical offset of the <code class="ic">VCard</code> component.',
		name: 'card-offset-y',
		type: 'number',
	},
	{
		default: '4',
		desc: 'Sets the padding of the <code class="ic">VCard</code> component.',
		name: 'card-padding',
		type: 'number',
	},
	{
		default: `VCard defaults & <pre class="ic"><code>{ elevation: 5 }</code></pre>`,
		desc: 'Props for the <code="ic">VCard</code> component that contains the <code="ic">VDatePicker</code> component. See Vuetify documentation for full list of props.',
		name: 'card-props',
		type: 'VCard[\'$props\']',
	},
	{
		default: 'undefined',
		desc: 'This functions normally as the <code class="ic">VTextField</code> color prop, but also is used for the <code class="ic">icon-hover-color</code> when that prop is not set.',
		name: 'color',
		type: 'string | undefined',
	},
	{
		default: `VDatePicker defaults & <pre class="ic"><code>{ elevation: 0 }</code></pre>`,
		desc: 'Props for the <code="ic">VDatePicker</code> component. See Vuetify documentation for full list of props.',
		name: 'date-picker-props',
		type: 'VDatePicker[\'$props\']',
	},
	{
		default: 'undefined',
		desc: 'The hover color for the <code class="ic">VIcon</code> component within the <code class="ic">prepend</code>, <code class="ic">prepend-inner</code>, <code class="ic">append-inner</code>, and <code class="ic">append</code> slots when using <code class="ic">prepend-icon</code>, <code class="ic">prepend-inner-icon</code>, <code class="ic">append-inner-icon</code>, and <code class="ic">append-icon</code> props. If <code class="ic">false</code> the hover color will be the same as the <code class="ic">VTextField</code> color.',
		name: 'icon-hover-color',
		type: 'string | undefined',
	},
	{
		default: 'default',
		desc: 'Sets the size of the <code class="ic">prepend-icon</code>, <code class="ic">prepend-inner-icon</code>, <code class="ic">append-inner-icon</code>, <code class="ic">append-icon</code> <code class="ic">VIcon</code> as well as the <code class="ic">pip-icon</code> <code class="ic">VIcon</code>.',
		name: 'icon-size',
		type: 'VIcon[\'$props\'][\'size\']',
	},
	{
		default: 'bottom left',
		desc: 'Sets the position of the <code class="ic">VCard</code> component relative to the <code class="ic">VTextField</code> input when it opens. Ex. <code class="ic">bottom left</code>, <code class="ic">bottom right</code>, <code class="ic">top left</code>, <code class="ic">top right</code>',
		name: 'open',
		type: 'string | undefined',
	},
	{
		default: 'false',
		desc: 'Used to disable the <code class="ic">VTextField</code> input, and <code class="ic">VDatePicker</code> component. This will also make clicking on the field open the date picker.',
		name: 'readonly',
		type: 'boolean | null | undefined',
	},
	{
		default: 'false',
		desc: 'Used to disable the <code class="ic">VTextField</code> input, but not the <code class="ic">VDatePicker</code> component. This will also make clicking on the field open the date picker.',
		name: 'readonly-input',
		type: 'boolean | null | undefined',
	},
];


export const usePropsStore = defineStore('props', {
	state: () => {
		return {
			componentProps,
			propsHeaders,
		};
	},
});
