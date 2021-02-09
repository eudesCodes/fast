/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TMicrophoneIconTypes
 * @type { object }
 */
export type TMicrophoneIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <MicrophoneIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const MicrophoneIcon = React.forwardRef<SVGElement, TMicrophoneIconTypes>(
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
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        );
    },
);
