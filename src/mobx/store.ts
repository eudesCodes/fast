import { observable, action, makeObservable } from 'mobx';

/**
 * @class
 * @name IncrementStore
 */
class IncrementStore {
    constructor() {
        makeObservable(this, {
            increment: observable,
            IncrementFn: action,
            DecrementFn: action,
        });
    }
    /**
     * @constant  increment
     */
    increment: any = 0;

    /**
     * @method
     * @name IncrementFn
     */
    IncrementFn = (): void => {
        this.increment += 1;
    };

    /**
     * @method
     * @name DecrementFn
     */
    DecrementFn = (): void => {
        if (this.increment > 0) this.increment -= 1;
    };
}

export default IncrementStore;
