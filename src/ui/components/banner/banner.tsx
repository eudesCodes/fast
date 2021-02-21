/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './banner.module.css';
import classnames from 'classnames';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom banner component
 * @property {string} rounded - radius of the banner
 * @property {string} shadow - shadow of the banner
 */
type TModuleCssTypes = {
    variant?: 'default' | 'custom';
    rounded?: 'none' | 'medium' | 'full';
    shadow?: 'none' | 'inner' | 'medium';
};

/**
 * @typedef TBannerTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 */
export type TBannerTypes = {
    id?: string;
    className?: TModuleCssTypes;
    children: React.ReactNode;
};

/**
 * @description Renders a <Banner {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Banner = React.forwardRef<HTMLInputElement, TBannerTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { id, className, children } = Props;

        /**
         * @type React.RefObject<HTMLInputElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

        return (
            <div
                id={id}
                ref={mergeRefs([outRef, forwardRef])}
                className={classnames(
                    styles[`banner_root__${className?.variant}`],
                    styles[`shadow__${className?.shadow}`],
                    styles[`border__${className?.rounded}`],
                )}
            >
                <button className={classnames(styles?.banner_btn, 'focus:outline-none')}>
                    <span>×</span>
                </button>
                <div>{children}</div>
            </div>
        );
    },
);
