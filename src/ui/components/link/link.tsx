/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import { useLink } from '@react-aria/link';
import mergeRefs from 'react-merge-refs';
import { mergeProps } from '@react-aria/utils';
import styles from './link.module.css';
import classnames from 'classnames';

import type { AriaLinkProps } from '@react-types/link';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom link component
 */
type TModuleCssTypes = {
    variant?: 'default' | 'icon';
};

/**
 * @typedef TLinkTypes
 * @type { object }
 * @property {string} label - Label of the link
 * @property {TModuleCssTypes} className - Css class
 * @property {React.ReactNode} iconsvg - Add a svg image
 */
export type TLinkTypes = AriaLinkProps & {
    className?: TModuleCssTypes;
    iconsvg?: React.ReactNode;
    children: React.ReactNode;
};

/**
 * @description Renders a <link {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Link = React.forwardRef<HTMLAnchorElement, TLinkTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { children, className, iconsvg } = Props;

        /**
         * @type React.RefObject<HTML>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLAnchorElement> = React.useRef<HTMLAnchorElement>(null);

        /**
         * @description useLink provides the behavior and accessibility implementation for a link component.
         */
        const { linkProps } = useLink(Props, outRef);

        return (
            <a
                ref={mergeRefs([outRef, forwardRef])}
                {...mergeProps(linkProps)}
                className={classnames(
                    styles?.anchor_root,
                    styles[`anchor_child__${className?.variant}`],
                )}
            >
                {iconsvg}
                <span className={classnames(styles[`anchor_label__${className?.variant}`])}>
                    {children}
                </span>
            </a>
        );
    },
);
