/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import { createPortal } from 'react-dom';
import styles from './toast.module.css';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
/**
 * @typedef TModuleCssTypes
 * @type { object }
 */
type TModuleCssTypes = {
    position?:
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right';
};

/**
 * @typedef TToastProviderTypes
 * @type { object }
 * @property {TModuleCssTypes} className - Css class
 */
export type TToastProviderTypes = {
    className?: TModuleCssTypes;
    children: React.ReactNode;
};

/**
 * @typedef TOptionsTypes
 * @type { object }
 * @property {string} appearance -
 */
type TOptionsTypes = {
    appearance?: 'error' | 'success';
};

/**
 * @typedef TValueProvider
 * @type { object }
 * @property {function} add -
 * @property {function} remove -
 */
type TValueProvider = {
    add: (content: string, options?: TOptionsTypes) => void;
    remove: (id: string) => void;
};

/**
 * @constant CreateToastContext
 */
const CreateToastContext = React.createContext<any>(null);

/**
 * @function
 * @constant ToastProvider
 * @returns { JSX.Element }
 */
export const ToastProvider: React.FC<TToastProviderTypes> = ({
    children,
    className,
}): JSX.Element => {
    /**
     * @constant state
     */
    const [state, setState] = React.useState<
        Array<{
            content: string;
            id: string;
            options?: TOptionsTypes;
        }>
    >([]);

    /**
     * @function
     * @name add
     */
    const add = React.useCallback((content: string, options?: TOptionsTypes) => {
        /**
         * @constant id
         */
        const id: string = uuidv4();
        setState((prev: any) => [...prev, { content, id, options }]);
    }, []);

    /**
     * @function
     * @name remove
     */
    const remove = React.useCallback(
        (id: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            setState((state: any) =>
                state.filter((t: { content: string; id: string }) => t.id !== id),
            );
        },
        [],
    );

    return (
        <CreateToastContext.Provider value={{ add, remove }}>
            {children}
            {/* Create a simple React Portals with Hooks */}
            {createPortal(
                <div
                    className={classnames(
                        styles.toast__container,
                        styles[`${className?.position}`],
                    )}
                >
                    {state?.map(({ content, id, options }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className={classnames(
                                styles[`toast_appearance__${options?.appearance}`],
                            )}
                        >
                            <div
                                className={classnames(
                                    styles[`toast_appearance_icon__${options?.appearance}`],
                                )}
                            />
                            <p
                                className={classnames(
                                    styles[`toast_appearance_content__${options?.appearance}`],
                                )}
                            >
                                {content}
                            </p>

                            <button
                                onClick={remove(id)}
                                className={classnames(styles?.toast_btn, 'focus:outline-none')}
                            >
                                x
                            </button>
                        </motion.div>
                    ))}
                </div>,
                document.body,
            )}
        </CreateToastContext.Provider>
    );
};

/**
 * @function
 * @constant useToastContext
 */
export const useToastContext = (): TValueProvider => React.useContext(CreateToastContext);

/**
 * Some exemple
 */
export const Toast = (): JSX.Element => {
    const { add } = useToastContext();
    return (
        <button
            className={styles?.btn_toast_exemple}
            onClick={() => add('hello world!', { appearance: 'error' })}
        >
            Add Toast
        </button>
    );
};
