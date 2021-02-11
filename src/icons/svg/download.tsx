/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TDownloadIconTypes
 * @type { object }
 */
export type TDownloadIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <DownloadIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const DownloadIcon = React.forwardRef<SVGElement, TDownloadIconTypes>(
    (props, forwardRef) => {
        /**
         * @type React.RefObject<SVGElement>
         * @return { object}
         */
        const outRef: React.RefObject<SVGElement> = React.useRef<SVGElement>(null);

        return (
            <svg
                {...props}
                ref={mergeRefs([outRef, forwardRef])}
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
            >
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
        );
    },
);
