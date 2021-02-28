/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import { useTextField } from '@react-aria/textfield';
import mergeRefs from 'react-merge-refs';
import { mergeProps } from '@react-aria/utils';
import styles from './dropzone.module.css';
import classnames from 'classnames';

import type { AriaTextFieldProps } from '@react-types/textfield';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} border - border of the DropZone
 * @property {string} shadow - shadow of the DropZone
 * @property {string} rounded - radius of the DropZone
 */
type TModuleCssTypes = {
    border?: 'none' | 'purple';
    shadow?: 'none' | 'inner' | 'medium';
    rounded?: 'none' | 'medium' | 'full';
};

/**
 * @typedef TDropZoneTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 */
export type TDropZoneTypes = AriaTextFieldProps & {
    id: string;
    className?: TModuleCssTypes;
    // eslint-disable-next-line no-unused-vars
    onGetFilesList: (list?: FileList) => void;
};

/**
 * @description Renders a <DropZone {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const DropZone = React.forwardRef<HTMLInputElement, TDropZoneTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { id, onGetFilesList } = Props;

        /** @description useSate: returns a stateful value, and a function to update it **/
        const [dragDrop, setDragDrop] = React.useState<boolean>(false);

        /**
         * @function
         * @name dragOverFn
         * @param { React.DragEvent<HTMLLabelElement> } - event
         * @returns void
         */
        const dragOverFn = React.useCallback(
            (event: React.DragEvent<HTMLLabelElement>): void => {
                event.preventDefault();
                setDragDrop(true);
            },
            [setDragDrop],
        );

        /**
         * @function
         * @name dragLeaveFn
         * @param { React.DragEvent<HTMLLabelElement> } - event
         * @returns void
         */
        const dragLeaveFn = React.useCallback(
            (event: React.DragEvent<HTMLLabelElement>): void => {
                event.preventDefault();
                setDragDrop(false);
            },
            [setDragDrop],
        );
        /**
         * @function
         * @name fileDropFn
         * @param { React.DragEvent<HTMLLabelElement> } - event
         * @returns void
         */
        const fileDropFn = React.useCallback(
            (event: React.DragEvent<HTMLLabelElement>): void => {
                event.preventDefault();
                onGetFilesList(event.dataTransfer.files);
            },
            [onGetFilesList],
        );
        /**
         * @type React.RefObject<HTMLInputElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

        /**
         * @description useTextField provides the behavior and accessibility implementation for a DropZone component.
         */
        const { inputProps, labelProps } = useTextField(Props, outRef);

        return (
            <label
                htmlFor={id}
                {...mergeProps(labelProps)}
                className={styles?.dropzone_root}
                onDragOver={dragOverFn}
                onDragLeave={dragLeaveFn}
                onDrop={fileDropFn}
                draggable={true}
            >
                <input
                    id={id}
                    ref={mergeRefs([outRef, forwardRef])}
                    {...mergeProps(inputProps)}
                    type="file"
                    className="appearance-none sr-only"
                    multiple={true}
                />
                <div className={classnames(styles?.drop_message)}>
                    <div className={classnames(styles?.upload_icon)}>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" />
                            <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                            {!dragDrop && (
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            )}
                        </svg>
                    </div>
                    <p>Drag & Drop files here</p>
                </div>
            </label>
        );
    },
);
