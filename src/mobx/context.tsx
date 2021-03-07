/* eslint-disable no-undef */
import * as React from 'react';
import IncrementStore from 'src/mobx/store';
import { useLocalObservable } from 'mobx-react';

/**
 * Create a Store Intarface
 */
export interface IStore {
    inc: IncrementStore;
}

/**
 * export the store
 */
export const Store: IStore = {
    inc: new IncrementStore(),
};

/**
 * @constant StoreCreateContext
 */
const StoreCreateContext = React.createContext<IStore>(Store);

/**
 * @function
 * @constant StoreProvider
 * @param { React.PropsWithChildren } - children
 * @returns { JSX.Element }
 */
export const StoreProvider: React.FC<React.PropsWithChildren<any>> = ({
    children,
}: React.PropsWithChildren<any>): JSX.Element => {
    return (
        <StoreCreateContext.Provider value={useLocalObservable(() => Store)}>
            {children}
        </StoreCreateContext.Provider>
    );
};

/**
 * @function
 * @constant StoreProvider
 */
export const useStoreContext = () => React.useContext(StoreCreateContext);
