/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './image.module.css';
import classnames from 'classnames';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom Image component
 */
type TModuleCssTypes = {
    rounded?: 'none' | 'medium' | 'full';
    classname?: string;
};

/**
 * @typedef TImageTypes
 * @type { object }
 * @property {string} label - Label of the Image
 * @property {TModuleCssTypes} className - Css class
 */
export type TImageTypes = {
    className?: TModuleCssTypes;
    label: string;
    id: string;
    src: string;
};

/**
 * @description Renders a <Image {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Image = React.forwardRef<HTMLImageElement, TImageTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { className, label, id, src } = Props;

        /**
         * @type React.RefObject<HTML>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLImageElement> = React.useRef<HTMLImageElement>(null);

        return (
            <img
                id={id}
                ref={mergeRefs([outRef, forwardRef])}
                className={classnames(
                    className?.classname,
                    'w-full h-full object-cover',
                    styles[`rounded__${className?.rounded}`],
                )}
                src={src}
                alt={label}
            />
        );
    },
);
