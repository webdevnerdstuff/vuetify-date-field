import { UseGetIcon } from '@/types';

const defaultIcons = {
	fa: {
		default: 'fas fa-calendar-days',
	},
	mdi: {
		default: 'mdi:mdi-calendar-month-outline',
	},
};

export const useGetIcon: UseGetIcon = (options) => {
	const { icon, iconOptions, name } = options;

	if (icon) {
		return icon;
	}

	const defaultSet = iconOptions?.defaultSet as string;
	let iconAbbv = defaultSet.toLowerCase();

	iconAbbv = iconAbbv === 'fa' || iconAbbv === 'fasvg' ? 'fa' : iconAbbv;
	const iconSet = defaultIcons[iconAbbv];

	if (!iconSet) {
		throw new Error(`VDateField: No VColorField default ${iconOptions?.defaultSet} icon set found.`);
	}

	const newIcon = iconSet[name];

	if (!newIcon) {
		throw new Error(`VDateField: No ${name} icon found.`);
	}

	return newIcon;
};
