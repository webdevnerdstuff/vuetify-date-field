import {
	UseCardClasses,
	UseHintClasses,
	UseTextFieldClasses,
} from '@/types';
import { componentName } from '../utils/globals';


// ------------------------------------------------ Text Field //
export const useTextFieldClasses: UseTextFieldClasses = (options) => {
	const { name, readonly, readonlyInput } = options;

	return {
		[`${componentName}--text-field-${name}`]: true,
		[`${componentName}--text-field-readonly`]: readonly ?? false,
		[`${componentName}--text-field-readonly-input`]: readonlyInput && !readonly ? true : false,
		[`${componentName}--text-field`]: true,
	};
};

export const useHintClasses: UseHintClasses = () => {
	return {
		[`${componentName}--text-field`]: true,
	};
};

// -------------------------------------------------- Card //
export const useCardClasses: UseCardClasses = (options) => {
	const { fullWidth } = options;

	return {
		[`${componentName}--card`]: true,
		[`${componentName}--card-full-width`]: fullWidth,
	};

};
