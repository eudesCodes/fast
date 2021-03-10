/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './cardImage.module.css';
import classnames from 'classnames';
import { ChatIcon, ShareIcon } from 'src/icons';

import image from 'src/assets/images/1534162781_luffy.gif';
import imageLarge from 'src/assets/images/1534162781_luffy_2.gif';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} rounded - radius of the CardImage
 * @property {string} shadow - shadow of the CardImage
 */
type TModuleCssTypes = {
    rounded?: 'none' | 'medium' | 'full';
    shadow?: 'none' | 'inner' | 'medium';
};

/**
 * @typedef TCardImageTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 */
export type TCardImageTypes = {
    id?: string;
    className?: TModuleCssTypes;
};

/**
 * @description Renders a <CardImage {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const CardImage = React.forwardRef<HTMLDivElement, TCardImageTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { id, className } = Props;

        /**
         * @type React.RefObject<HTMLDivElement>
         * @return { object }
         */
        const outRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

        return (
            <div className="max-w-sm w-full p-4" id={id} ref={mergeRefs([outRef, forwardRef])}>
                <div
                    className={classnames(
                        'overflow-hidden bg-white relative h-auto',
                        styles[`shadow__${className?.shadow}`],
                        styles[`rounded__${className?.rounded}`],
                    )}
                >
                    <div className="flex items-center justify-between w-full h-auto relative px-4 text-gray-700">
                        <div className="flex flex-row items-center">
                            <img
                                src={image}
                                className="h-10 w-10 rounded-full mr-2 border-gray-400 object-cover"
                            />
                            <span>Hello world!</span>
                        </div>
                        <span>30min</span>
                    </div>
                    <div className="w-full h-72 relative bg-purple-500 my-4">
                        <img src={imageLarge} className="object-cover w-full h-full" />
                    </div>

                    <div className="flex items-center justify-between w-full h-auto">
                        <div className="flex items-center w-full relative px-4 h-auto text-gray-500">
                            <ChatIcon className="h-6 w-6 mr-2 text-purple-500" />
                            <span>14 comments!</span>
                        </div>
                        <div className="flex items-center w-full justify-end relative p-4 h-auto text-gray-500">
                            <ShareIcon className="h-6 w-6 text-purple-500" />
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-center relative px-4 pt-4 h-auto text-gray-300 my-4 border-t">
                        <span>Hello world!!</span>
                    </div>
                </div>
            </div>
        );
    },
);
