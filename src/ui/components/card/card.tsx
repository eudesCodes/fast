/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './card.module.css';
import classnames from 'classnames';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} rounded - radius of the card
 * @property {string} shadow - shadow of the card
 */
type TModuleCssTypes = {
    rounded?: 'none' | 'medium' | 'full';
    shadow?: 'none' | 'inner' | 'medium';
};

/**
 * @typedef TCardTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 */
export type TCardTypes = {
    id?: string;
    className?: TModuleCssTypes;
};

/**
 * @description Renders a <Card {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Card = React.forwardRef<HTMLInputElement, TCardTypes>(
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
                className="max-w-sm w-full py-6 px-3"
                id={id}
                ref={mergeRefs([outRef, forwardRef])}
            >
                <div
                    className={classnames(
                        'overflow-hidden bg-white',
                        styles[`shadow__${className?.shadow}`],
                        styles[`rounded__${className?.rounded}`],
                    )}
                >
                    <div className="h-56 p-4 animate-pulse bg-purple-200">
                        <div className="flex justify-end text-white">
                            <div className="h-6 w-6 animate-pulse bg-indigo-300"></div>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="animate-pulse bg-indigo-100 w-1/3 h-4 mb-1"></p>
                        <p className="animate-pulse bg-gray-100 w-1/2 h-6 mb-1"></p>
                        <p className="animate-pulse bg-gray-200 w-3/4 h-3"></p>
                    </div>
                    <div className="flex p-4 border-t border-gray-300 text-gray-700">
                        <div className="flex-1 inline-flex items-center">
                            <div className="h-6 w-6 mr-3 animate-pulse bg-indigo-300"></div>
                            <p className="animate-pulse bg-gray-200 w-full h-3"></p>
                        </div>
                        <div className="flex-1 inline-flex items-center ml-2">
                            <div className="h-6 w-6 mr-3 animate-pulse bg-indigo-300"></div>
                            <p className="animate-pulse bg-gray-200 w-full h-3"></p>
                        </div>
                    </div>
                    <div className="p-4 border-t border-gray-200">
                        <div className="animate-pulse bg-indigo-100 w-2/3 h-4 mb-2"></div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 animate-pulse bg-purple-200"></div>
                            <div className="w-full ml-3">
                                <p className="animate-pulse bg-gray-200 w-2/4 h-4 mb-1"></p>
                                <p className="animate-pulse bg-gray-200 w-1/4 h-3"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
);
