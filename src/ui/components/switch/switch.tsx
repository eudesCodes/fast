/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import { useSwitch } from '@react-aria/switch';
import { useToggleState } from '@react-stately/toggle';
import mergeRefs from 'react-merge-refs';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import styles from './switch.module.css';
import classnames from 'classnames';

import type { AriaSwitchProps } from '@react-types/switch';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom switch component
 */
type TModuleCssTypes = {
    variant: 'dark' | 'elastic' | 'join';
};

/**
 * @typedef TSwitchTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {string} label - Label of the switch
 * @property {string} type - Type of the switch
 * @property {TModuleCssTypes} className - Css class
 * @property {React.ReactNode} iconsvg - Add a svg image
 */
export type TSwitchTypes = AriaSwitchProps & {
    id?: string;
    type: 'checkbox';
    className?: TModuleCssTypes;
};

/**
 * @description Renders a <switch {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Switch = React.forwardRef<HTMLInputElement, TSwitchTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { type, id, className } = Props;

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
         * @description useSwitch provides the behavior and accessibility implementation for a switch component.
         */
        const { inputProps } = useSwitch(Props, state, outRef);

        return (
            <label htmlFor={id} className={classnames(styles.switch_label_root)}>
                <div className={classnames(styles[`switch_relative_root__${className?.variant}`])}>
                    <input
                        id={id}
                        ref={mergeRefs([outRef, forwardRef])}
                        {...mergeProps(inputProps, useFocusRing)}
                        type={type}
                        className={classnames(styles?.input_root)}
                    />
                    <span
                        className={classnames(styles[`span_first_child__${className?.variant}`])}
                    ></span>
                </div>
            </label>
        );
    },
);
