/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import {
	CSSProperties,
} from 'vue';
import type { IconOptions } from 'vuetify';
import type {
	VCard,
	VDatePicker,
	VIcon,
	VTextField,
} from 'vuetify/components';


// -------------------------------------------------- Vuetify Types //


// -------------------------------------------------- Misc //
export interface KeyStringAny<T = any> {
	[key: string]: T;
};

export type HtmlRefElement = HTMLDivElement | null | undefined;


// -------------------------------------------------- Props //
export interface VCardProps extends Omit<VCard['$props'],
	'$children'
> {
	verticalOffset?: number;
}

export interface Props {
	appendIcon?: VTextField['$props']['appendIcon'];
	appendInnerIcon?: VTextField['$props']['appendInnerIcon'];
	cardFieldWidth?: boolean;
	cardOffsetX?: number | string;
	cardOffsetY?: number | string;
	cardPadding?: number | string;
	cardProps?: VCardProps;
	color?: VTextField['$props']['color'];
	datePickerProps?: VDatePicker['$props'] & {};
	density?: VTextField['$props']['density'];
	format?: string | ((date: string) => string);
	hint?: string;
	iconHoverColor?: VIcon['$props']['color'] | boolean;
	iconSize?: VIcon['$props']['size'];
	label?: string;
	messages?: VTextField['$props']['messages'];
	name?: any;
	open?: string | undefined;
	persistentHint?: boolean;
	persistentPlaceholder?: VTextField['$props']['persistentPlaceholder'];
	placeholder?: VTextField['$props']['placeholder'];
	prependIcon?: VTextField['$props']['prependIcon'];
	prependInnerIcon?: VTextField['$props']['prependInnerIcon'] | string | null | boolean;
	readonly?: VTextField['$props']['readonly'];
	readonlyInput?: boolean | null | undefined;
	required?: boolean;
	showAdjacentMonths?: VDatePicker['$props']['showAdjacentMonths'];
	theme?: VTextField['$props']['theme'];

	// Date Picker Specific //
}

export interface DatePickerIconProps {
	color?: VIcon['$props']['color'];
	icon?: VIcon['$props']['icon'] | string | null | boolean;
	iconSize?: VIcon['$props']['size'];
}

export interface VuetifyDefaults {
	VCard: Props['cardProps'];
	VDatePicker: Props['datePickerProps'];
}

export interface TextFieldProperties {
	bottom: string | number | undefined;
	height: number | string;
	left: string | number | undefined;
	right: string | number | undefined;
	top: string | number | undefined;
	width: number | string;
}

// ------------------------ Icons //
export interface UseGetIcon {
	(
		options: {
			icon: string | null | boolean,
			iconOptions: IconOptions | undefined,
			name: string,
		}
	): string;
}

// -------------------------------------------------- Composables //
export interface UseComposableName {
	(
		options: {
			foo?: string;
		}
	): Props;
}

// ------------------------- Helpers //
export interface UseConvertToUnit {
	(
		options: {
			unit?: string,
			value: string | number | undefined,
		}
	): string | undefined;
}

// ------------------------- Classes //

export interface UsePipClasses {
	(
		options?: {}
	): object;
}

export interface UseTextFieldClasses {
	(
		options: {
			name?: Props['name'];
			readonly?: boolean | null;
			readonlyInput: Props['readonlyInput'];
		}
	): object;
}

export interface UseHintClasses {
	(
		options?: {}
	): object;
}

export interface UseCardClasses {
	(
		options: {
			fullWidth?: boolean;
		}
	): object;
}


// ------------------------- Styles //
export interface CardStylesObject extends CSSProperties {
	bottom?: string | number;
	display?: string;
	left?: string | number;
	minWidth?: string;
	padding?: string;
	right?: string | number;
	top?: string | number;
	width?: string | number;
}
