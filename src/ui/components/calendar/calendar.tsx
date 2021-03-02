/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './calendar.module.css';
import classnames from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon } from 'src/icons';
import dayjs from 'dayjs';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 */
type TModuleCssTypes = {};

/**
 * @typedef TCalendarTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 * @property {Function} onDatePicker
 */
export type TCalendarTypes = {
    id?: string;
    className?: TModuleCssTypes;
    // eslint-disable-next-line no-unused-vars
    onDatePicker: (date: dayjs.Dayjs) => void;
};

/**
 * @description Renders a <Calendar {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Calendar = React.forwardRef<HTMLDivElement, TCalendarTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param { Object } Props
         */
        const { id, onDatePicker } = Props;

        /**
         * @constant
         * @name cellFormat
         * @return { string }
         */
        const cellFormat: string[] = React.useMemo(
            () => ['DD', 'dddd', 'DD MM YYYY', 'MMMM YYYY'],
            [],
        );

        /** @description useSate: returns a stateful value, and a function to update it **/
        const [stateCurrentMonth, setStateCurrentMonth] = React.useState<dayjs.Dayjs>(
            dayjs(new Date()),
        );
        const [stateCurrentCellsDay, setStateCurrentCellsDay] = React.useState<any>([]);
        const [stateDays, setStateDays] = React.useState<Array<string>>([]);
        const [stateDateSelected, setStateDateSelected] = React.useState<string>();

        /**
         * @function
         * @name onNextMonthFn
         */
        const onNextMonthFn = React.useCallback(
            (event: React.MouseEvent<SVGElement, MouseEvent>): void => {
                event?.preventDefault();

                setStateCurrentMonth(dayjs(stateCurrentMonth).add(1, 'month'));
            },
            [stateCurrentMonth],
        );

        /**
         * @function
         * @name onPreviousMonthFn
         */
        const onPreviousMonthFn = React.useCallback(
            (event: React.MouseEvent<SVGElement, MouseEvent>): void => {
                event?.preventDefault();

                setStateCurrentMonth(dayjs(stateCurrentMonth).subtract(1, 'month'));
            },

            [stateCurrentMonth],
        );

        /**
         *
         */
        const onDatePickerFn = React.useCallback(
            (date: dayjs.Dayjs) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
                event?.preventDefault();
                setStateDateSelected(date.format(cellFormat[2]));
                onDatePicker(date);
            },
            //
            [onDatePicker, cellFormat],
        );

        /**
         * @type React.RefObject<HTMLDivElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

        React.useEffect(() => {
            /**
             * Create the days Mon, Tu, ....Sun
             */
            /**
             * @constant days
             * @return { string[] }
             */
            const days: string[] = [];
            /**
             * @constant startDate
             */
            const startDate: dayjs.Dayjs = dayjs(stateCurrentMonth).startOf('week');

            for (let i = 0; i <= 6; i++) {
                days.push(startDate.add(i, 'days').format(cellFormat[1]));
            }

            setStateDays(days);

            /**
             * Create the CellsDays : 1,....31
             */
            /**
             * @constant days
             * @return { JSX.Element[] }
             */
            const cellsdays: JSX.Element[] = [];

            /**
             * @constant startDateForCells
             * @return { dayjs.Dayjs }
             */
            let startDateForCells: dayjs.Dayjs = dayjs(stateCurrentMonth).startOf('week');

            /**
             * @constant endDateForCells
             * @description
             * @return { dayjs.Dayjs }
             */
            const endDateForCells: dayjs.Dayjs = dayjs(stateCurrentMonth)
                .endOf('month')
                .endOf('week');

            /**
             * @constant nowDate
             * @description
             * @return { string }
             */
            const nowDate: string = dayjs(new Date()).format(cellFormat[2]);

            while (startDateForCells <= endDateForCells) {
                for (let i = 0; i <= 6; i++) {
                    const selectedDate: boolean =
                        stateDateSelected === startDateForCells?.format(cellFormat[2]);
                    const nowSelected: boolean =
                        nowDate === startDateForCells?.format(cellFormat[2]);

                    cellsdays.push(
                        <div
                            onClick={onDatePickerFn(startDateForCells)}
                            className={classnames('cursor-pointer p-4', {
                                'bg-purple-300 text-white': selectedDate,
                                'bg-green-300 text-white': nowSelected,
                            })}
                        >
                            {dayjs(startDateForCells).format(cellFormat[0])}
                        </div>,
                    );
                    startDateForCells = dayjs(startDateForCells).add(1, 'day');
                }
            }
            setStateCurrentCellsDay(cellsdays);
        }, [stateCurrentMonth, cellFormat, onDatePickerFn, stateDateSelected]);

        return (
            <div
                className={classnames(styles?.calendar)}
                id={id}
                ref={mergeRefs([outRef, forwardRef])}
            >
                <div className="flex items-center justify-between justify-content py-5 px-12">
                    <span className="w-1/2 text-xs">
                        {dayjs(stateCurrentMonth).format(cellFormat[3])}
                    </span>
                    <span className="w-1/2">
                        <ChevronLeftIcon
                            className="w-4 h-4 inline-block cursor-pointer mr-1"
                            onClick={onPreviousMonthFn}
                        />
                        <ChevronRightIcon
                            className="w-4 h-4 inline-block cursor-pointer ml-1"
                            onClick={onNextMonthFn}
                        />
                    </span>
                </div>
                <div className="bg-white relative">
                    <div className={classnames(styles?.cells)}>
                        {stateDays?.map((day: string, index: number) => (
                            <span className={classnames(styles?.daynames)} key={index}>
                                {day}
                            </span>
                        ))}
                    </div>
                    <div className={classnames(styles?.cells)}>
                        {stateCurrentCellsDay?.map((cellsADy: string, index: number) => (
                            <div className={classnames(styles?.days)} key={index}>
                                {cellsADy}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    },
);
