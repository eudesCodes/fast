/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import styles from './menu.module.css';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 */
type TModuleCssTypes = {};

/**
 * @typedef Tmenu
 * @type { object }
 * @property {string} title - menu title
 * @property {string} href - menu href
 */
type Tmenu = {
    title?: string;
    href?: string;
};
/**
 * @typedef TMenuTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 * @property {Tmenu[]} menuContent -
 * @property {React.ReactNode} children -
 */
export type TMenuTypes = {
    id?: string;
    className?: TModuleCssTypes;
    menuContent: Tmenu[];
    children: React.ReactNode;
};

/**
 * @constant createMenuContext
 */
const CreateMenuContext = React.createContext<any>({});

/**
 * @function
 * @constant MenuProvider
 * @returns { JSX.Element }
 */
export const MenuProvider: React.FC<TMenuTypes> = ({ children, menuContent }): JSX.Element => {
    return (
        <CreateMenuContext.Provider value={{}}>
            <input type="checkbox" id="main-navigation" className="appearance-none sr-only" />
            <label htmlFor="main-navigation" className={styles?.close_label}>
                <span className={styles?.close_btn} />
            </label>
            <nav className={styles?.nav_main}>
                <ul className={styles?.menu}>
                    {menuContent?.map((menu: Tmenu, index: number) => (
                        <li key={index} className={styles?.menu__item}>
                            <a className={styles?.menu__link} href={menu?.href}>
                                {menu.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className={styles?.container}>{children}</main>
        </CreateMenuContext.Provider>
    );
};

/**
 * @function
 * @constant useMenuContext
 */
export const useMenuContext = () => React.useContext(CreateMenuContext);
