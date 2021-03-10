/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TUserIconTypes
 * @type { object }
 */
export type TUserIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <UserIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const UserIcon = React.forwardRef<SVGElement, TUserIconTypes>((props, forwardRef) => {
    /**
     * @type React.RefObject<SVGElement>
     * @return { object}
     */
    const outRef: React.RefObject<SVGElement> = React.useRef<SVGElement>(null);

    return (
        <svg {...props} ref={mergeRefs([outRef, forwardRef])} viewBox="0 0 24 24" fill="none">
            <path
                stroke="currentColor"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
});
