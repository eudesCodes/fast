/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './pagination.module.css';
import classnames from 'classnames';

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
 * @typedef TPaginationTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 */
export type TPaginationTypes = {
    id?: string;
    className?: TModuleCssTypes;
    page: any[];
    visibleNumbers: number;
    // eslint-disable-next-line no-unused-vars
    onChangeCurrentPage: (currentIndex: number) => void;
};

/**
 * @description Renders a <Pagination {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Pagination = React.forwardRef<HTMLDivElement, TPaginationTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { id, className, page, visibleNumbers, onChangeCurrentPage } = Props;

        /** @description useSate: returns a stateful value, and a function to update it **/
        const [pageIndex, setPageIndex] = React.useState<number[]>([]);
        const [activeNumber, setActiveNumber] = React.useState<boolean[]>([]);
        const [currentIndex, setCurrentIndex] = React.useState<number>(0); // use this value for your item
        const [visibleIndex, setVisibleIndex] = React.useState<boolean[]>([]);

        /**
         * @description
         * @function
         * @name : visibilityFn
         * @param {number} index
         * @param {number} keyLoop
         * @returns void
         */
        const visibilityFn = (index: number, keyLoop: number): void => {
            /**  */
            if (index < visibleNumbers) {
                if (visibleNumbers < page?.length) {
                    if (keyLoop <= visibleNumbers) visibleIndex[keyLoop] = true;
                    else visibleIndex[keyLoop] = false;
                } else visibleIndex[keyLoop] = true;
            } else if (index >= visibleNumbers) {
                if (keyLoop > index - visibleNumbers && keyLoop <= index + visibleNumbers)
                    visibleIndex[keyLoop] = true;
                else visibleIndex[keyLoop] = false;
            }

            /** @description  useState function **/
            setVisibleIndex(visibleIndex);
        };
        /**
         * @description
         * @function
         * @name activePageIndexFn
         * @param {number} index
         *
         */
        const activePageIndexFn = (index: number) => (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        ): void => {
            event.preventDefault();

            page?.forEach((value: object, key: number) => {
                /** @description fill the array **/
                activeNumber[key] = false;
                visibilityFn(index, key);
            });

            activeNumber[index] = true;
            onChangeCurrentPage(index);

            /** @description  useState function **/
            setCurrentIndex(index);
            setActiveNumber(activeNumber);
        };

        /**
         * @description:
         * @function
         * @name previousPageIndexFn
         * @param event { React.MouseEvent<HTMLButtonElement, MouseEvent> }
         */
        const previousPageIndexFn = (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        ): void => {
            event.preventDefault();

            if (currentIndex > 0) {
                page?.forEach((value: object, key: number) => {
                    /** @description fill the array **/
                    activeNumber[key] = false;
                    visibilityFn(currentIndex, key);
                });

                activeNumber[currentIndex - 1] = true;

                onChangeCurrentPage(currentIndex - 1);

                /** @description  useState function **/
                setCurrentIndex(currentIndex - 1);
                setActiveNumber(activeNumber);
            }
        };

        /**
         * @description:
         * @function
         * @name nextPageIndexFn
         * @param event { React.MouseEvent<HTMLButtonElement, MouseEvent> }
         */
        const nextPageIndexFn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
            event.preventDefault();

            if (currentIndex >= 0 && page?.length > currentIndex + 1) {
                page?.forEach((value: object, key: number) => {
                    /** @description fill the array **/
                    activeNumber[key] = false;
                    visibilityFn(currentIndex, key);
                });

                activeNumber[currentIndex + 1] = true;

                onChangeCurrentPage(currentIndex + 1);
                /** @description  useState function **/
                setCurrentIndex(currentIndex + 1);
                setActiveNumber(activeNumber);
            }
        };

        /**
         * @description Accepts a function that contains imperative, possibly effectful code.
         */
        React.useEffect(() => {
            /**
             * @description
             * @constant {  number[] } pageindex
             * @constant {  boolean[] } activeindex
             * @constant {  boolean[] } visibleindex
             */
            const pageindex: number[] = [];
            const activeindex: boolean[] = [];
            const visibleindex: boolean[] = [];

            /** for Loop:  initialization **/
            page?.forEach((value: object, index: number) => {
                /** @description fill the array **/
                activeindex[index] = false;
                pageindex[index] = index;

                /** */
                if (visibleNumbers < page?.length) {
                    if (index <= visibleNumbers + 1) visibleindex[index] = true;
                    else visibleindex[index] = false;
                } else visibleindex[index] = true;
            });

            /** initialization **/
            activeindex[0] = true;
            onChangeCurrentPage(1);

            /** @description  useState function **/
            setPageIndex(pageindex);
            setActiveNumber(activeindex);
            setVisibleIndex(visibleindex);

            /** @description  useEffect  dependency**/
        }, [page, visibleNumbers, onChangeCurrentPage]);

        /**
         * @type React.RefObject<HTMLDivElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

        return (
            <nav
                id={id}
                ref={mergeRefs([outRef, forwardRef])}
                className={classnames(
                    styles?.pagination_ul_list,
                    styles[`pagination_label_root__${className?.variant}`],
                )}
            >
                <button
                    type="button"
                    onClick={previousPageIndexFn}
                    className={classnames(styles?.pagination_chevron_left)}
                ></button>
                {pageIndex?.map((Elements: number, index: number) => {
                    return (
                        visibleIndex[index] && (
                            <button
                                key={index}
                                type="button"
                                onClick={activePageIndexFn(index)}
                                className={classnames(
                                    styles[`pagination_btn__${className?.variant}`],
                                    {
                                        'bg-purple-500 text-white': activeNumber[index],
                                    },
                                )}
                            >
                                {Elements + 1}
                            </button>
                        )
                    );
                })}
                <button
                    type="button"
                    onClick={nextPageIndexFn}
                    className={classnames(styles?.pagination_chevron_right)}
                ></button>
            </nav>
        );
    },
);
