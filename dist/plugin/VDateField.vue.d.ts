import { Props } from '../types';
declare function toggleDatePicker(trigger?: string | Event): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    appendIcon: undefined;
    appendInnerIcon: undefined;
    cardFieldWidth: boolean;
    cardOffsetX: number;
    cardOffsetY: number;
    cardPadding: number;
    cardProps: () => {};
    color: undefined;
    datePickerProps: () => {};
    density: string;
    format: string;
    hint: string;
    iconHoverColor: undefined;
    iconSize: string;
    label: undefined;
    messages: undefined;
    name: string;
    open: string;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    placeholder: string;
    prependIcon: undefined;
    prependInnerIcon: string;
    readonly: boolean;
    readonlyInput: boolean;
    required: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "update:month": (...args: any[]) => void;
    "update:year": (...args: any[]) => void;
    "update:viewMode": (...args: any[]) => void;
    update: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    appendIcon: undefined;
    appendInnerIcon: undefined;
    cardFieldWidth: boolean;
    cardOffsetX: number;
    cardOffsetY: number;
    cardPadding: number;
    cardProps: () => {};
    color: undefined;
    datePickerProps: () => {};
    density: string;
    format: string;
    hint: string;
    iconHoverColor: undefined;
    iconSize: string;
    label: undefined;
    messages: undefined;
    name: string;
    open: string;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    placeholder: string;
    prependIcon: undefined;
    prependInnerIcon: string;
    readonly: boolean;
    readonlyInput: boolean;
    required: boolean;
}>>> & {
    "onUpdate:month"?: ((...args: any[]) => any) | undefined;
    "onUpdate:year"?: ((...args: any[]) => any) | undefined;
    "onUpdate:viewMode"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    density: "default" | "comfortable" | "compact" | null;
    appendIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    prependIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    name: any;
    label: string;
    hint: string;
    readonly: boolean | null;
    messages: string | readonly string[];
    persistentHint: boolean;
    appendInnerIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    prependInnerIcon: boolean | (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | null;
    placeholder: string;
    persistentPlaceholder: boolean;
    required: boolean;
    cardProps: import('../types').VCardProps;
    datePickerProps: Partial<{
        active: string | string[];
        header: string;
        style: globalThis.StyleValue;
        title: string;
        inputMode: "calendar" | "keyboard";
        disabled: boolean;
        landscape: boolean;
        tag: string;
        rounded: string | number | boolean;
        nextIcon: string;
        prevIcon: string;
        modeIcon: string;
        viewMode: "month" | "year" | "months";
        hideWeekdays: boolean;
        showAdjacentMonths: boolean;
        showWeek: boolean;
        hideHeader: boolean;
        calendarIcon: string;
        keyboardIcon: string;
        inputText: string;
        inputPlaceholder: string;
    }> & Omit<{
        header: string;
        style: globalThis.StyleValue;
        title: string;
        inputMode: "calendar" | "keyboard";
        disabled: boolean;
        landscape: boolean;
        tag: string;
        nextIcon: string;
        prevIcon: string;
        modeIcon: string;
        viewMode: "month" | "year" | "months";
        hideWeekdays: boolean;
        showAdjacentMonths: boolean;
        showWeek: boolean;
        hideHeader: boolean;
        calendarIcon: string;
        keyboardIcon: string;
        inputText: string;
        inputPlaceholder: string;
        max?: unknown;
        location?: ("top" | "bottom" | "start" | "end" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center") | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: string | string[] | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
        text?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        class?: any;
        min?: unknown;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        allowedDates?: Function | unknown[] | undefined;
        "onUpdate:month"?: ((date: any) => any) | undefined;
        "onUpdate:year"?: ((date: any) => any) | undefined;
        "onUpdate:inputMode"?: ((date: any) => any) | undefined;
        "onUpdate:viewMode"?: ((date: any) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        header: string;
        style: globalThis.StyleValue;
        title: string;
        inputMode: "calendar" | "keyboard";
        disabled: boolean;
        landscape: boolean;
        tag: string;
        nextIcon: string;
        prevIcon: string;
        modeIcon: string;
        viewMode: "month" | "year" | "months";
        hideWeekdays: boolean;
        showAdjacentMonths: boolean;
        showWeek: boolean;
        hideHeader: boolean;
        calendarIcon: string;
        keyboardIcon: string;
        inputText: string;
        inputPlaceholder: string;
    } & {
        max?: unknown;
        location?: ("top" | "bottom" | "start" | "end" | "left" | "right" | "center" | "center center" | "top start" | "top end" | "top left" | "top right" | "top center" | "bottom start" | "bottom end" | "bottom left" | "bottom right" | "bottom center" | "start top" | "start bottom" | "start center" | "end top" | "end bottom" | "end center" | "left top" | "left bottom" | "left center" | "right top" | "right bottom" | "right center") | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: string | string[] | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
        text?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        class?: any;
        min?: unknown;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        allowedDates?: Function | unknown[] | undefined;
    } & {
        "onUpdate:month"?: ((date: any) => any) | undefined;
        "onUpdate:year"?: ((date: any) => any) | undefined;
        "onUpdate:inputMode"?: ((date: any) => any) | undefined;
        "onUpdate:viewMode"?: ((date: any) => any) | undefined;
    }, "tag" | "rounded" | "style" | "landscape" | "title" | "hideHeader" | "disabled" | "hideWeekdays" | "showAdjacentMonths" | "showWeek" | "active" | "nextIcon" | "prevIcon" | "modeIcon" | "viewMode" | "calendarIcon" | "keyboardIcon" | "inputMode" | "inputText" | "inputPlaceholder" | "header"> & {
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        multiple?: boolean | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            title?: (() => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            actions?: (() => import("vue").VNodeChild) | undefined;
            header?: ((arg: {
                header: string;
                transition: string;
                'onClick:append': () => void;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            title?: false | (() => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | (() => import("vue").VNodeChild) | undefined;
            header?: false | ((arg: {
                header: string;
                transition: string;
                'onClick:append': () => void;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            header: string;
            transition: string;
            'onClick:append': () => void;
        }) => import("vue").VNodeChild) | undefined;
    };
    readonlyInput: boolean | null;
    open: string;
    iconSize: string | number;
    cardFieldWidth: boolean;
    cardOffsetX: string | number;
    cardOffsetY: string | number;
    cardPadding: string | number;
    format: string | ((date: string) => string);
    iconHoverColor: string | boolean;
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & {
    prepend?(_: {
        toggleDatePicker: typeof toggleDatePicker;
        id: globalThis.ComputedRef<string>;
        messagesId: globalThis.ComputedRef<string>;
        isDirty: globalThis.ComputedRef<boolean>;
        isDisabled: globalThis.ComputedRef<boolean>;
        isReadonly: globalThis.ComputedRef<boolean>;
        isPristine: globalThis.Ref<boolean>;
        isValid: globalThis.ComputedRef<boolean | null>;
        isValidating: globalThis.Ref<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: () => void;
    }): any;
    "prepend-inner"?(_: {
        toggleDatePicker: typeof toggleDatePicker;
        isActive: globalThis.Ref<boolean>;
        isFocused: globalThis.Ref<boolean>;
        controlRef: globalThis.Ref<HTMLElement | undefined>;
        focus: () => void;
        blur: () => void;
    }): any;
    "append-inner"?(_: {
        toggleDatePicker: typeof toggleDatePicker;
        isActive: globalThis.Ref<boolean>;
        isFocused: globalThis.Ref<boolean>;
        controlRef: globalThis.Ref<HTMLElement | undefined>;
        focus: () => void;
        blur: () => void;
    }): any;
    append?(_: {
        toggleDatePicker: typeof toggleDatePicker;
        id: globalThis.ComputedRef<string>;
        messagesId: globalThis.ComputedRef<string>;
        isDirty: globalThis.ComputedRef<boolean>;
        isDisabled: globalThis.ComputedRef<boolean>;
        isReadonly: globalThis.ComputedRef<boolean>;
        isPristine: globalThis.Ref<boolean>;
        isValid: globalThis.ComputedRef<boolean | null>;
        isValidating: globalThis.Ref<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: () => void;
    }): any;
    label?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
