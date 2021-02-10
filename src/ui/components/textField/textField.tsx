/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import { useTextField } from '@react-aria/textfield';
import mergeRefs from 'react-merge-refs';
import { mergeProps } from '@react-aria/utils';
import styles from './textField.module.css';
import classnames from 'classnames';

import type { AriaTextFieldProps } from '@react-types/textfield';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom textField component
 * @property {string} border - border of the textField
 * @property {string} shadow - shadow of the textField
 * @property {string} rounded - radius of the textField
 */
type TModuleCssTypes = {
    variant: 'floating' | 'default';
    border?: 'none' | 'purple';
    shadow?: 'none' | 'inner' | 'medium';
    rounded?: 'none' | 'medium' | 'full';
};

/**
 * @typedef TTextFieldTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {string} label - Label of the textField
 * @property {string} type - Type of the textField
 * @property {boolean} icon - presence of icon
 * @property {TModuleCssTypes} className - Css class
 */
export type TTextFieldTypes = AriaTextFieldProps & {
    id?: string;
    label?: string;
    icon?: boolean;
    type: 'text' | 'password';
    className?: TModuleCssTypes;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

/**
 * @description Renders a <TextField {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const TextField = React.forwardRef<HTMLInputElement, TTextFieldTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { type, id, className, leftIcon, rightIcon, icon, label } = Props;

        /**
         * @type React.RefObject<HTMLInputElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

        /**
         * @description useTextField provides the behavior and accessibility implementation for a TextField component.
         */
        const { inputProps } = useTextField(Props, outRef);

        return (
            <label
                htmlFor={id}
                className={classnames(
                    styles?.textField_label_root,
                    styles[`shadow__${className?.shadow}`],
                    styles[`border__${className?.border}`],
                    styles[`rounded__${className?.rounded}`],
                )}
            >
                <span
                    className={classnames(styles[`textField_icon__${className?.variant}`], {
                        hidden: !icon,
                        flex: icon,
                    })}
                >
                    {leftIcon}
                </span>
                <div
                    className={classnames(styles[`textField_relative_root__${className?.variant}`])}
                >
                    <input
                        id={id}
                        ref={mergeRefs([outRef, forwardRef])}
                        {...mergeProps(inputProps)}
                        autoComplete="OFF"
                        type={type}
                        className={classnames(
                            styles[`textField_input__${className?.variant}`],
                            'focus:outline-none',
                        )}
                    />
                    <span className={classnames(styles[`span_first_child__${className?.variant}`])}>
                        {label}
                    </span>
                </div>
                <span
                    className={classnames(styles[`textField_icon__${className?.variant}`], {
                        hidden: !icon,
                        flex: icon,
                    })}
                >
                    {rightIcon}
                </span>
            </label>
        );
    },
);
