/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TSearchIconTypes
 * @type { object }
 */
export type TSearchIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <SearchIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const SearchIcon = React.forwardRef<SVGElement, TSearchIconTypes>((props, forwardRef) => {
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
            fill="none"
            stroke="currentColor"
        >
            <path d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
});
