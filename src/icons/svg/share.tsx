/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TShareIconTypes
 * @type { object }
 */
export type TShareIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <ShareIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const ShareIcon = React.forwardRef<SVGElement, TShareIconTypes>((props, forwardRef) => {
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
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
        </svg>
    );
});
