/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';

import mergeRefs from 'react-merge-refs';
import styles from './countDown.module.css';
import classnames from 'classnames';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom TextFile component
 * @property {string} border - border of the TextFile
 * @property {string} shadow - shadow of the TextFile
 * @property {string} rounded - radius of the TextFile
 */
type TModuleCssTypes = {
    variant: 'count' | 'timecircle';
    border?: 'none' | 'purple';
    shadow?: 'none' | 'inner' | 'medium';
    rounded?: 'none' | 'medium' | 'full';
};

/**
 * @typedef TCountDownTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {React.ReactNode} downloadicon - Add icon
 * @property {TModuleCssTypes} className - Css class
 */
export type TCountDownTypes = {
    id: string;
    endDate: Date;
    className?: TModuleCssTypes;
};

type TState = {
    key: string;
    value: number;
};
/** @constant {number} */
const _MILLE: number = 1000;

/** @constant {number} */
const SOIXANTE: number = 60;

/** @constant {number} */
const VINGT_QUATRE: number = 24;

/** @constant {number} */
const _COUNT_D: number = _MILLE * SOIXANTE * SOIXANTE * VINGT_QUATRE;

/** @constant {number} */
const _COUNT_H: number = _MILLE * SOIXANTE * SOIXANTE;

/** @constant {number} */
const _COUNT_M: number = _MILLE * SOIXANTE;

/**
 * @description Renders a <CountDown {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const CountDown = React.forwardRef<HTMLDivElement, TCountDownTypes>(
    ({ id, endDate, className }, forwardRef): JSX.Element => {
        /**
         * @type React.RefObject<HTMLDivElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLInputElement>(null);

        /** @constant {number} */
        const endtime = new Date(endDate).getTime();

        /** @constant {TState[]} */
        const [state, setState] = React.useState<TState[]>([
            { key: 'days', value: 0 },
            { key: 'hours', value: 0 },
            { key: 'minutes', value: 0 },
            { key: 'seconds', value: 0 },
        ]);
        /**
         * @function
         * @name calculateTimeLeft
         * @param {number} time
         * @returns void
         */
        const calculateTimeLeft = (time: number): void => {
            if (time) {
                const now = new Date().getTime();

                const difference = time - now;

                if (difference > 0) {
                    const days = Math.floor(difference / _COUNT_D);
                    const hours = Math.floor((difference % _COUNT_D) / _COUNT_H);
                    const minutes = Math.floor((difference % _COUNT_H) / _COUNT_M);
                    const seconds = Math.floor((difference % _COUNT_M) / _MILLE);
                    setState([
                        { key: 'days', value: days },
                        { key: 'hours', value: hours },
                        { key: 'minutes', value: minutes },
                        { key: 'seconds', value: seconds },
                    ]);
                } else {
                    setState([
                        { key: 'days', value: 0 },
                        { key: 'hours', value: 0 },
                        { key: 'minutes', value: 0 },
                        { key: 'seconds', value: 0 },
                    ]);
                }
            }
        };

        React.useEffect(() => {
            /**
             * @constant {  NodeJS.Timeout } interval
             */
            const interval: NodeJS.Timeout = setInterval(() => calculateTimeLeft(endtime), _MILLE);
            return () => clearInterval(interval);
        });

        return (
            <div
                id={id}
                ref={mergeRefs([outRef, forwardRef])}
                className={classnames(styles?.countdown_root)}
            >
                <ul>
                    {state?.map((time, index: number) => {
                        return (
                            <li
                                key={index}
                                className={classnames(styles[`li_first__${className?.variant}`])}
                            >
                                <div
                                    className={classnames(
                                        styles[`div_first__${className?.variant}`],
                                    )}
                                >
                                    <span>{time.value}</span>
                                    <i>{time.key}</i>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    },
);
