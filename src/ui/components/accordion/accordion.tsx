/* eslint-disable react/display-name */
/* eslint-disable no-undef */

import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './accordion.module.css';
import classnames from 'classnames';
import { ChevronUpIcon, ChevronDownIcon } from 'src/icons';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom texSearch component
 * @property {string} border - border of the texSearch
 */
type TModuleCssTypes = {
    variant: 'normal' | 'rounded';
    border?: 'none' | 'purple';
};

/**
 * @typedef TAccordionTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 */
export type TAccordionTypes = {
    id?: string;
    className?: TModuleCssTypes;
    children: React.ReactNode;
};

/**
 * @description Renders a <accordion {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Accordion = React.forwardRef<HTMLDivElement, TAccordionTypes>(
    ({ id, className, children }, forwardRef): JSX.Element => {
        /**
         * @type React.RefObject<HTMLDivElement>
         * @return { object}
         */
        const mapRef: React.RefObject<any> = React.useRef<any>([]);

        /**
         * @description useSate: returns a stateful value, and a function to update it
         * @constant { number } arrayLength : accordionNode length
         */
        const [arrayLength, setArrayLength] = React.useState<number>(0);

        /**
         * @description useSate: returns a stateful value, and a function to update it
         * @constant { number } indexprops : accordionNode length
         */
        const [indexprops, setIndexprops] = React.useState<number>(-1);

        /**
         * @description : Fill in the table of refs
         */
        React.useMemo(() => {
            Array(arrayLength)
                .fill(null)
                .map((_, i) => (mapRef.current[i] = React.createRef()));
        }, [arrayLength]);

        /**
         * @function
         * @name toggleFn
         * @param { number } index
         * @returns { void }
         */
        const toggleFn = (index: number): any => (event: React.MouseEvent<any, MouseEvent>) => {
            /**
             * event
             */
            event.preventDefault();

            /**
             *
             */
            if (index !== indexprops) setIndexprops(index);
            else setIndexprops(-1);

            /**
             *
             */
            if (mapRef.current[index].current?.offsetHeight === 0)
                mapRef.current[index].current.style.height = '100px';
            else mapRef.current[index].current.style.height = '0';
        };

        /**
         * @type React.RefObject<HTMLDivElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
        /**
         * @constant
         * @name accordionNode
         * @type { JSX.Element[] }
         */
        const accordionNode: JSX.Element[] | null | undefined = React?.Children?.map(
            children,
            (child: any, index: number): JSX.Element => (
                <div key={index} className={classnames(styles?.accordion_child)}>
                    <div
                        onClick={toggleFn(index)}
                        className={classnames(styles[`header__${className?.variant}`])}
                    >
                        <h2 className={classnames(styles[`title__${className?.variant}`])}>
                            {child?.props?.title}
                        </h2>
                        <span className={classnames(styles[`icon__${className?.variant}`])}>
                            {index === indexprops && <ChevronUpIcon className="w-full h-full" />}
                            {index !== indexprops && <ChevronDownIcon className="w-full h-full" />}
                        </span>
                    </div>
                    <div
                        className={classnames(styles[`panel__${className?.variant}`])}
                        ref={mapRef?.current[index]}
                    >
                        {child?.props?.children}
                    </div>
                </div>
            ),
        );

        React.useEffect(() => {
            if (accordionNode) setArrayLength(accordionNode?.length);
        }, [accordionNode]);

        return (
            <div
                id={id}
                ref={mergeRefs([outRef, forwardRef])}
                className={classnames(styles?.accordion_root)}
            >
                {accordionNode}
            </div>
        );
    },
);
