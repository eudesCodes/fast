/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import { useCheckbox } from '@react-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import mergeRefs from 'react-merge-refs';
import { mergeProps } from '@react-aria/utils';
import styles from 'src/ui/components/checkbox/checkbox.module.css';
import classnames from 'classnames';
import { CheckIcon } from 'src/icons';

import type { AriaCheckboxProps } from '@react-types/checkbox';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom checkbox component
 */
type TModuleCssTypes = {
    variant: 'chippy' | 'task' | 'normal' | 'radio';
};

/**
 * @typedef TCheckboxTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {string} label - Label of the checkbox
 * @property {string} type - Type of the checkbox
 * @property {TModuleCssTypes} className - Css class
 * @property {React.ReactNode} iconsvg - Add a svg image
 */
export type TCheckboxTypes = AriaCheckboxProps & {
    id?: string;
    label?: string;
    type: 'radio' | 'checkbox';
    className?: TModuleCssTypes;
};

/**
 * @description Renders a <Checkbox {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Checkbox = React.forwardRef<HTMLInputElement, TCheckboxTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { label, type, id, className } = Props;

        /**
         * @type React.RefObject<HTMLInputElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

        /**
         * @description Selection state is managed by useToggleState
         */
        const state = useToggleState(Props);
        /**
         * @description useCheckbox provides the behavior and accessibility implementation for a checkbox component.
         */
        const { inputProps } = useCheckbox(Props, state, outRef);

        return (
            <label
                htmlFor={id}
                className={classnames(styles[`checkbox_label_root__${className?.variant}`])}
            >
                <input
                    id={id}
                    ref={mergeRefs([outRef, forwardRef])}
                    {...mergeProps(inputProps)}
                    type={type}
                    className={classnames(styles?.input_root)}
                />

                <span className={classnames(styles[`span_first_child__${className?.variant}`])}>
                    <CheckIcon className={classnames(styles[`svg_child__${className?.variant}`])} />
                </span>
                <span className={classnames(styles[`span_second_child__${className?.variant}`])}>
                    {label}
                </span>
            </label>
        );
    },
);
