/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './dragAndDropList.module.css';
import classnames from 'classnames';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 */
type TModuleCssTypes = {};

/**
 * @typedef TContent
 * @type { object }
 * @property {string} content -
 */
type TContent = {
    content: string;
};

/**
 * @typedef TDndState
 * @type { object }
 * @property {number} startPosition -
 * @property {number } overPosition -
 * @property {TContent[]} updatePositionItems -
 */
type TDndState = {
    startPosition?: number;
    overPosition?: number;
    updatePositionItems: TContent[];
};

/**
 * @typedef TDragAndDropListTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 * @property {Array<TContent>} items -
 */
export type TDragAndDropListTypes = {
    id: string;
    className?: TModuleCssTypes;
    items: Array<TContent>;
};

/**
 * @description Renders a <DragAndDropList {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const DragAndDropList = React.forwardRef<HTMLDivElement, TDragAndDropListTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { items } = Props;

        /** @description useSate: returns a stateful value, and a function to update it **/
        const [sortableItems, setSortableItems] = React.useState<Array<TContent>>(items);

        /** @description useSate: returns a stateful value, and a function to update it **/
        const [state, setState] = React.useState<TDndState>({
            updatePositionItems: [],
        });

        /**
         * @function
         * @name onDragStart
         * @param { React.DragEvent<HTMLDivElement> } - event
         * @returns void
         */
        const onDragStart = React.useCallback(
            (index: number) => (event: React.DragEvent<HTMLDivElement>): void => {
                event?.dataTransfer.effectAllowed == 'move';

                /**
                 *
                 */
                setState({
                    ...state,
                    startPosition: index,
                });

                /**
                 * // Firefox requires calling dataTransfer.setData
                 * // for the drag to properly work
                 */
                event.dataTransfer?.setData('text/html', (event as any).currentTarget);
            },
            [state],
        );

        /**
         * @function
         * @name onDragOver
         * @param { React.DragEvent<HTMLDivElement> } - event
         * @returns void
         */
        const onDragOver = React.useCallback(
            (index: number) => (event: React.DragEvent<HTMLDivElement>): void => {
                event?.preventDefault();
                /**
                 * @constant remainingItems
                 */
                const remainingItems = sortableItems?.filter(
                    (_, index: number) => index !== state.startPosition,
                );

                /**
                 * @constant updatePositionItems
                 */
                if (state.startPosition) {
                    const updatePositionItems = [
                        ...remainingItems.slice(0, index),
                        sortableItems[state.startPosition],
                        ...remainingItems.slice(index),
                    ];

                    /**
                     *
                     */
                    setState({
                        ...state,
                        overPosition: index,
                        updatePositionItems,
                    });
                }
            },
            [sortableItems, state],
        );

        /**
         * @function
         * @name onDrop
         * @param { React.DragEvent<HTMLDivElement> } - event
         * @returns void
         */
        const onDrop = React.useCallback(
            (event: React.DragEvent<HTMLDivElement>): void => {
                event?.preventDefault();

                setSortableItems(state.updatePositionItems);

                /**
                 *
                 */
                setState({
                    ...state,
                    startPosition: undefined,
                    overPosition: undefined,
                });
            },
            [state],
        );

        /**
         * @type React.RefObject<HTMLDivElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

        return (
            <div ref={mergeRefs([outRef, forwardRef])} className="w-full h-auto p-0 m-0 relative">
                {sortableItems?.map((item: TContent, index: number) => (
                    <div
                        key={index}
                        className={classnames(styles?.dragAnddroplist_root)}
                        draggable
                        onDragStart={onDragStart(index)}
                        onDragOver={onDragOver(index)}
                        onDrop={onDrop}
                    >
                        <p className="flex-grow font-medium px-2">{item.content}</p>
                    </div>
                ))}
            </div>
        );
    },
);
