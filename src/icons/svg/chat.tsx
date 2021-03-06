/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TChatIconTypes
 * @type { object }
 */
export type TChatIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <ChatIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const ChatIcon = React.forwardRef<SVGElement, TChatIconTypes>((props, forwardRef) => {
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
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
        </svg>
    );
});
