/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import { useSearchField } from '@react-aria/searchfield';
import { useSearchFieldState } from '@react-stately/searchfield';
import mergeRefs from 'react-merge-refs';
import { mergeProps } from '@react-aria/utils';
import styles from './textSearch.module.css';
import classnames from 'classnames';

import type { AriaTextFieldProps } from '@react-types/textfield';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom texSearch component
 * @property {string} border - border of the texSearch
 * @property {string} shadow - shadow of the texSearch
 * @property {string} rounded - radius of the texSearch
 */
type TModuleCssTypes = {
    variant: 'normal' | 'micro';
    border?: 'none' | 'purple';
    shadow?: 'none' | 'inner' | 'medium';
    rounded?: 'none' | 'medium' | 'full';
};

/**
 * @typedef TTextSearchTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {string} label - Label of the textSearch
 * @property {string} type - Type of the textSearch
 * @property {string} text - label of the textSearch for ( micro )
 * @property {boolean} icon - presence of icon
 * @property {React.ReactNode} firstIcon - add icon
 * @property {React.ReactNode} secondIcon - add icon
 * @property {TModuleCssTypes} className - Css class
 */
export type TTextSearchTypes = AriaTextFieldProps & {
    id?: string;
    type: 'search';
    text?: string;
    className?: TModuleCssTypes;
    firstIcon?: React.ReactNode;
    secondIcon?: React.ReactNode;
};

/**
 * @description Renders a <TextSearch {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const TextSearch = React.forwardRef<HTMLInputElement, TTextSearchTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { type, id, className, firstIcon, secondIcon, text } = Props;

        /**
         * @type React.RefObject<HTMLInputElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

        /**
         * @description Selection state is managed by useSearchFieldState
         */
        const state = useSearchFieldState(Props);
        /**
         * @description useSearchField provides the behavior and accessibility implementation for a TextField component.
         */
        const { inputProps, labelProps } = useSearchField(Props, state, outRef);

        return (
            <label
                htmlFor={id}
                {...labelProps}
                className={classnames(
                    styles[`textSearch_label_root__${className?.variant}`],
                    styles[`shadow__${className?.shadow}`],
                    styles[`border__${className?.border}`],
                    styles[`rounded__${className?.rounded}`],
                )}
            >
                <div
                    className={classnames(
                        styles[`textSearch_relative_root__${className?.variant}`],
                    )}
                >
                    <input
                        id={id}
                        ref={mergeRefs([outRef, forwardRef])}
                        {...mergeProps(inputProps)}
                        autoComplete="OFF"
                        type={type}
                        className={classnames(
                            styles[`textSearch_input__${className?.variant}`],
                            'focus:outline-none',
                        )}
                    />
                </div>
                <span className={classnames(styles[`textSearch_icon__${className?.variant}`])}>
                    {firstIcon}
                </span>
                <span className={classnames(styles[`label_text__${className?.variant}`])}>
                    {text}
                </span>
                <span className={classnames(styles[`textSearch_icon__${className?.variant}`])}>
                    {secondIcon}
                </span>
            </label>
        );
    },
);
