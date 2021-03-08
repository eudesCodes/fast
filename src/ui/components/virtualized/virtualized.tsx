import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} rounded - radius of the Virtualized
 * @property {string} shadow - shadow of the Virtualized
 */
type TModuleCssTypes = {};

/**
 * @typedef TVirtualizedTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 * @property {number} itemLength -
 * @property {Array<any>} item -
 * @property {number} windowHeight -
 */
export type TVirtualizedTypes = {
    id?: string;
    className?: TModuleCssTypes;
    itemLength: number;
    height: number;
    item: Array<any>;
    windowHeight: number;
};

/**
 * @typedef TRenderVisibleItemsTypes
 * @type { object }
 * @property {number} index - an ID
 * @property {React.CSSProperties} style - style proporties
 * @property {Array<any>} render -
 */
type TRenderVisibleItemsTypes = {
    index: number;
    style?: React.CSSProperties;
    render: Array<any>;
};

/**
 * @description Renders a <Virtualized {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
// eslint-disable-next-line react/display-name
export const Virtualized = React.forwardRef<HTMLDivElement, TVirtualizedTypes>(
    // eslint-disable-next-line no-undef
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { id, itemLength, height, item, windowHeight } = Props;

        /** @description useSate: returns a stateful value, and a function to update it **/
        const [scrollTop, setScrollTop] = React.useState<number>(0);
        const [startIndex, setStartIndex] = React.useState<number>(0);
        const [endIndex, setEndIndex] = React.useState<number>(0);

        /**
         * @type React.RefObject<HTMLInputElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

        const virtualizedItems: any = [];

        /**
         * Populate visible items
         */
        for (let i = startIndex; i <= endIndex; i++) {
            virtualizedItems.push(
                RenderVisibleItem({
                    index: i,
                    style: {
                        position: 'absolute',
                        background: '#8A2BE2',
                        color: 'white',
                        top: `${i * height}px`,
                        width: '100%',
                    },
                    render: item,
                }),
            );
        }

        /**
         *
         */
        React.useEffect(() => {
            /**
             * @function
             * @name onScroll
             * @param { any } event
             */
            const onScroll = (event: any) => {
                setScrollTop(event?.target?.documentElement?.scrollTop);
            };

            window.addEventListener('scroll', onScroll);

            /**
             * Update the StartIndex
             */
            setStartIndex(Math.floor(scrollTop / height));

            /**
             * Update the EndIndex
             */
            setEndIndex(Math.min(itemLength, Math.floor((scrollTop + windowHeight) / height)));
            /**
             *
             */
            return () => window.removeEventListener('scroll', onScroll);
        }, [scrollTop, itemLength, height, windowHeight]);

        return (
            <div className="w-full h-auto" id={id} ref={mergeRefs([outRef, forwardRef])}>
                {virtualizedItems}
            </div>
        );
    },
);

/**
 *
 * @param
 * @returns
 */
const RenderVisibleItem: React.FC<TRenderVisibleItemsTypes> = ({ index, style, render }) => {
    return (
        <div key={index} style={style}>
            {render[index]?.name}
        </div>
    );
};
