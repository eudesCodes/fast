/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import { useButton } from '@react-aria/button';
import mergeRefs from 'react-merge-refs';
import { mergeProps } from '@react-aria/utils';
import styles from 'src/ui/components/buttons/buttons.module.css';
import classnames from 'classnames';

import type { AriaButtonProps } from '@react-types/button';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - size of the button
 * @property {string} padding - padding of the button
 * @property {string} rounded - radius of the button
 * @property {string} background - background of the button
 * @property {string} border - border of the button
 * @property {string} shadow - shadow of the button
 */
type TModuleCssTypes = {
    variant?: 'small' | 'large';
    padding?: 'small' | 'medium';
    rounded?: 'none' | 'medium' | 'full';
    background?: 'none' | 'purple';
    border?: 'none' | 'purple';
    shadow?: 'none' | 'inner' | 'medium';
};

/**
 * @typedef TButtonTypes
 * @type { object }
 * @property {string} label - Label of the button
 * @property {string} type - Type of the button
 * @property {TModuleCssTypes} className - Css class
 * @property {React.ReactNode} iconsvg - Add a svg image
 */
export type TButtonTypes = AriaButtonProps & {
    label?: string;
    type?: 'submit' | 'reset' | 'button';
    className?: TModuleCssTypes;
    iconsvg?: React.ReactNode;
};

/**
 * @description Renders a <Button {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Button = React.forwardRef<HTMLButtonElement, TButtonTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { label, type, className, iconsvg } = Props;

        /**
         * @type React.RefObject<HTMLButtonElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLButtonElement> = React.useRef<HTMLButtonElement>(null);

        /**
         * @description useButton assumes that you are using it with a native <button> element.
         */
        const { buttonProps } = useButton(Props, outRef);

        return (
            <button
                type={type}
                ref={mergeRefs([outRef, forwardRef])}
                {...mergeProps(buttonProps)}
                className={classnames(
                    styles.button__root,
                    styles[`variant__${className?.variant}`],
                    styles[`rounded__${className?.rounded}`],
                    styles[`background__${className?.background}`],
                    styles[`shadow__${className?.shadow}`],
                    styles[`border__${className?.border}`],
                    styles[`padding__${className?.padding}`],
                    'focus:outline-none',
                )}
            >
                {iconsvg}
                {label}
            </button>
        );
    },
);
