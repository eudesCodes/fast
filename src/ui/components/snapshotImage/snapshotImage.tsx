/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import { mergeProps } from '@react-aria/utils';
import { useTextField } from '@react-aria/textfield';
// import styles from './snapshotImage.module.css';
import classnames from 'classnames';
import { ChatIcon, PhotographIcon } from 'src/icons';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} rounded - radius of the SnapshotImage
 * @property {string} shadow - shadow of the SnapshotImage
 */
type TModuleCssTypes = {};

/**
 * @typedef TSnapshotImageTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 */
export type TSnapshotImageTypes = {
    id?: string;
    className?: TModuleCssTypes;
};

/**
 * @description Renders a <SnapshotImage {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const SnapshotImage = React.forwardRef<HTMLDivElement, TSnapshotImageTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { id } = Props;

        /**
         * @function
         * @name onChange
         * @param { React.MouseEvent<HTMLSpanElement, MouseEvent>} - event
         * @returns void
         */
        const onChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
            event?.preventDefault();

            /**
             *
             */
            const canvasElement: HTMLCanvasElement | null = document.querySelector('canvas');

            /**
             *
             */
            const Context: CanvasRenderingContext2D | null | undefined = canvasElement?.getContext(
                '2d',
            );

            /**
             *
             */
            if (event.target?.files && event.target?.files[0]) {
                const reader = new FileReader();

                reader.readAsDataURL(event.target?.files[0]);

                reader.onloadend = (e: any) => {
                    /**
                     *
                     */
                    const image: HTMLImageElement = new Image();

                    /**
                     *
                     */
                    image.src = e.target?.result;

                    /**
                     *
                     */
                    image.onload = () => {
                        if (canvasElement !== null) {
                            canvasElement.width = image.width;
                            canvasElement.height = image.height;

                            Context?.drawImage(
                                image,
                                0,
                                0,
                                canvasElement.width,
                                canvasElement.height,
                            );
                        }
                    };
                };
            }
        }, []);

        /**
         * @type React.RefObject<HTMLInputElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

        /**
         * @description useTextField provides the behavior and accessibility implementation for a TextFile component.
         */
        const { inputProps } = useTextField(Props, outRef);

        return (
            <div className="max-w-sm w-full pb-4 px-4" ref={mergeRefs([outRef, forwardRef])}>
                <div className="overflow-hidden bg-white relative h-auto shadow rounded-xl">
                    <canvas className="mb-4 w-full h-64 relavive bg-purple-500" />
                    <div className="flex items-center justify-between w-full h-auto relative px-4 text-gray-700">
                        <div className="flex flex-row items-center">
                            <div className="h-10 w-10 rounded-full mr-2 bg-green-500 border-gray-400 flex items-center justify-center">
                                <ChatIcon className="h-6 w-6 text-white" />
                            </div>
                            <span>Hello world!</span>
                        </div>
                    </div>

                    <label
                        htmlFor={id}
                        className={classnames(
                            'flex items-center justify-between w-full h-auto relative p-4 border-t mt-4 cursor-pointer',
                        )}
                    >
                        <div className="border-green-500 border px-5 py-2 rounded-md text-gray-500">
                            Hello world uploads your image !!
                        </div>
                        <input
                            id={id}
                            ref={mergeRefs([outRef, forwardRef])}
                            {...mergeProps(inputProps)}
                            onChange={onChange}
                            type="file"
                            accept="image/*"
                            className="appearance-none sr-only"
                        />
                        <PhotographIcon className="h-7 w-7 text-green-500" role="button" />
                    </label>
                </div>
            </div>
        );
    },
);
