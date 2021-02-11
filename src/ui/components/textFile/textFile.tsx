/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import { useTextField } from '@react-aria/textfield';
import mergeRefs from 'react-merge-refs';
import { mergeProps } from '@react-aria/utils';
import styles from './textFile.module.css';
import classnames from 'classnames';

import type { AriaTextFieldProps } from '@react-types/textfield';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom TextFile component
 * @property {string} border - border of the TextFile
 * @property {string} shadow - shadow of the TextFile
 * @property {string} rounded - radius of the TextFile
 */
type TModuleCssTypes = {
    variant: 'default' | 'bar';
    border?: 'none' | 'purple';
    shadow?: 'none' | 'inner' | 'medium';
    rounded?: 'none' | 'medium' | 'full';
};

/**
 * @typedef TTextFileTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {React.ReactNode} downloadicon - Add icon
 * @property {TModuleCssTypes} className - Css class
 */
export type TTextFileTypes = AriaTextFieldProps & {
    id: string;
    multiple?: boolean;
    downloadicon?: React.ReactNode;
    className?: TModuleCssTypes;
};

/**
 * @description Renders a <TextFile {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const TextFile = React.forwardRef<HTMLInputElement, TTextFileTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { id, downloadicon, className, multiple } = Props;

        /**
         * @type React.RefObject<HTMLInputElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

        /**
         * @description useTextField provides the behavior and accessibility implementation for a TextFile component.
         */
        const { inputProps } = useTextField(Props, outRef);

        return (
            <div
                className={classnames(
                    styles?.textFile_root,
                    styles[`shadow__${className?.shadow}`],
                    styles[`border__${className?.border}`],
                    styles[`rounded__${className?.rounded}`],
                )}
            >
                <div className={classnames(styles[`relative_child__${className?.variant}`])}>
                    <label
                        htmlFor={id}
                        className={classnames(styles[`label_child__${className?.variant}`])}
                    >
                        <input
                            id={id}
                            ref={mergeRefs([outRef, forwardRef])}
                            {...mergeProps(inputProps)}
                            type="file"
                            className="appearance-none sr-only"
                            multiple={multiple}
                        />
                        {downloadicon}
                    </label>
                </div>
            </div>
        );
    },
);
