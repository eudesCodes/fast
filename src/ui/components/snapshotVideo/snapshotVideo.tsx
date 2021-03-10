/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import { mergeProps } from '@react-aria/utils';
import { useTextField } from '@react-aria/textfield';
// import styles from './snapshotVideo.module.css';
import classnames from 'classnames';
import { ChatIcon, PhotographIcon } from 'src/icons';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} rounded - radius of the SnapshotVideo
 * @property {string} shadow - shadow of the SnapshotVideo
 */
type TModuleCssTypes = {};

/**
 * @typedef TSnapshotVideoTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 */
export type TSnapshotVideoTypes = {
    id?: string;
    className?: TModuleCssTypes;
};

/**
 * @description Renders a <SnapshotVideo {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const SnapshotVideo = React.forwardRef<HTMLDivElement, TSnapshotVideoTypes>(
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

            let canvasElementHeight: number, canvasElementWidth: number;

            /**
             *
             */
            if (event.target?.files && event.target?.files[0]) {
                const video: HTMLVideoElement = document.createElement('video');

                video.setAttribute('src', window.URL.createObjectURL(event.target?.files[0]));

                video.addEventListener(
                    'loadedmetadata',
                    () => {
                        video.muted = false;
                        video.autoplay = false;
                        video.controls = false;

                        if (canvasElement !== null) {
                            canvasElementWidth = video.videoWidth;
                            canvasElementHeight = video.videoHeight;
                        }

                        Context?.drawImage(video, 0, 0, canvasElementWidth, canvasElementHeight);
                    },
                    false,
                );
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
                            <div className="h-10 w-10 rounded-full mr-2 bg-blue-500 border-gray-400 flex items-center justify-center">
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
                        <div className="border-blue-500 border px-5 py-2 rounded-md text-gray-500">
                            Hello world uploads one video !!
                        </div>
                        <input
                            id={id}
                            ref={mergeRefs([outRef, forwardRef])}
                            {...mergeProps(inputProps)}
                            onChange={onChange}
                            type="file"
                            accept="video/*"
                            className="appearance-none sr-only"
                        />
                        <PhotographIcon className="h-7 w-7 text-blue-500" role="button" />
                    </label>
                </div>
            </div>
        );
    },
);
