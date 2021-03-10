/* eslint-disable react/display-name */
/* eslint-disable no-undef */

import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './avatar.module.css';
import classnames from 'classnames';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 * @property {string} variant - custom texSearch component
 * @property {string} border - border of the texSearch
 */
type TModuleCssTypes = {
    variant: 'default' | 'group';
};

/**
 * @typedef TAvatarTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 */
export type TAvatarTypes = {
    id?: string;
    item: any[];
    className: TModuleCssTypes;
    limit: number;
};

/**
 * @description Renders a <Avatar {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Avatar = React.forwardRef<HTMLDivElement, TAvatarTypes>(
    ({ id, className, limit, item }, forwardRef): JSX.Element => {
        /**
         * @type React.RefObject<HTMLDivElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

        /** @description useSate: returns a stateful value, and a function to update it **/
        const [resultats, setResultats] = React.useState<any[]>([]);
        const [difference, setDifference] = React.useState<number>(-1);

        /** @description Accepts a function that contains imperative, possibly effectful code.*/
        React.useEffect(() => {
            if (item && item.length > limit) {
                const sliceItem: any[] = item.slice(0, limit);
                setResultats(sliceItem);
                setDifference(item.length - limit);
            } else {
                setResultats(item);
                setDifference(-1);
            }
        }, [item, limit]);

        return (
            <div
                id={id}
                ref={mergeRefs([outRef, forwardRef])}
                className={classnames(styles?.avatar_root)}
            >
                {resultats?.map((resultat, i) => (
                    <div key={i} className={classnames(styles[`avatar__${className?.variant}`])}>
                        <img
                            src={resultat?.avatarImage}
                            alt={resultat.avatarName}
                            className={styles?.imageavatar}
                        />
                        <div
                            className={classnames(styles[`avatar_dot__${className?.variant}`])}
                        ></div>
                    </div>
                ))}
                {difference > 0 && (
                    <div className={classnames(styles[`avatar_limit__${className?.variant}`])}>
                        +{difference}
                    </div>
                )}
            </div>
        );
    },
);
