/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TLogoIconTypes
 * @type { object }
 */
export type TLogoIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <LogoIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const LogoIcon = React.forwardRef<SVGElement, TLogoIconTypes>((props, forwardRef) => {
    /**
     * @type React.RefObject<SVGElement>
     * @return { object}
     */
    const outRef: React.RefObject<SVGElement> = React.useRef<SVGElement>(null);

    return (
        <svg
            width="281px"
            height="60px"
            viewBox="0 0 281 60"
            version="1.1"
            {...props}
            ref={mergeRefs([outRef, forwardRef])}
        >
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-315.000000, -40.000000)">
                    <g>
                        <g id="logo" transform="translate(315.000000, 40.000000)">
                            <g id="Favicon">
                                <rect
                                    id="Base"
                                    fill="#702FFF"
                                    x="0"
                                    y="0"
                                    width="60"
                                    height="60"
                                    rx="14"
                                ></rect>
                                <g id="Group-3" transform="translate(15.000000, 11.000000)">
                                    <circle
                                        id="icon-oval-lg"
                                        className="icon-oval-lg"
                                        stroke="#FFFFFF"
                                        strokeWidth="7"
                                        cx="15"
                                        cy="15"
                                        r="11.5"
                                    ></circle>
                                    <circle
                                        id="icon-oval-sm"
                                        className="icon-oval-sm"
                                        fill="#FFFFFF"
                                        cx="4"
                                        cy="34"
                                        r="4"
                                    ></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
});
