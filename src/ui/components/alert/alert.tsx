/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './alert.module.css';
import classnames from 'classnames';
import { BellIcon } from 'src/icons';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom alert component
 * @property {string} rounded - radius of the alert
 * @property {string} shadow - shadow of the alert
 */
type TModuleCssTypes = {
    variant?: 'default' | 'custom';
    rounded?: 'none' | 'medium' | 'full';
    shadow?: 'none' | 'inner' | 'medium';
};

/**
 * @typedef TAlertTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 */
export type TAlertTypes = {
    id?: string;
    className?: TModuleCssTypes;
};

/**
 * @description Renders a <Alert {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Alert = React.forwardRef<HTMLInputElement, TAlertTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { id, className } = Props;

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
                    styles[`alert_root__${className?.variant}`],
                    styles[`shadow__${className?.shadow}`],
                    styles[`border__${className?.rounded}`],
                )}
            >
                <span className={styles?.alert_bell}>
                    <BellIcon className="w-6 h-6" />
                </span>
                <span className={styles?.alert_text}>
                    <b className="capitalize">Your browser is outdated!</b> - check it out!
                </span>
                <button className={classnames(styles?.alert_btn, 'focus:outline-none')}>
                    <span>×</span>
                </button>
            </div>
        );
    },
);
