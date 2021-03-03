/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './datepicker.module.css';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from 'src/icons';
import days from 'dayjs';

/**
 * @typedef TModuleCssTypes
 * @type { object }
 */
type TModuleCssTypes = {};

/**
 * @typedef TDatepickerTypes
 * @type { object }
 * @property {string} id - an ID
 * @property {TModuleCssTypes} className - Css class
 * @property {string} name - used for input
 */
export type TDatepickerTypes = {
    id: string;
    name: string;
    className?: TModuleCssTypes;
    // eslint-disable-next-line no-unused-vars
    onDatePicker: (date: days.Dayjs) => void;
};

/**
 * @description Renders a <Datepicker {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const Datepicker = React.forwardRef<HTMLDivElement, TDatepickerTypes>(
    (Props, forwardRef): JSX.Element => {
        /**
         * @description Destructuring props
         * @param {Object} Props
         */
        const { id, name, onDatePicker } = Props;

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
        const [currentMonth, setCurrentMonth] = React.useState<days.Dayjs>(days(new Date()));
        const [currentDays, setCurrentDays] = React.useState<string[]>([]);
        const [currentCells, setCurrentCells] = React.useState<JSX.Element[]>([]);
        const [selectedDate, setSelectedDate] = React.useState<days.Dayjs>();
        const [datapickerOpen, setDatapickerOpen] = React.useState<boolean>(false);

        /**
         * @function
         * @name openorCloseDatePicker
         * @param { React.MouseEvent<HTMLDivElement, MouseEvent>} - event
         * @returns void
         */
        const openorCloseDatePicker = React.useCallback(
            (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
                event?.preventDefault();
                setDatapickerOpen(!datapickerOpen);
            },
            [datapickerOpen],
        );

        /**
         * @function
         * @name onNextMonth
         * @param { React.MouseEvent<SVGElement, MouseEvent>} - event
         * @returns void
         */
        const onNextMonth = React.useCallback(
            (event: React.MouseEvent<SVGElement, MouseEvent>): void => {
                event?.preventDefault();
                setCurrentMonth(days(currentMonth).add(1, 'month'));
            },
            [currentMonth],
        );

        /**
         * @function
         * @name onPreviousMonth
         * @param { React.MouseEvent<SVGElement, MouseEvent>} - event
         * @returns void
         */
        const onPreviousMonth = React.useCallback(
            (event: React.MouseEvent<SVGElement, MouseEvent>): void => {
                event?.preventDefault();
                setCurrentMonth(days(currentMonth).subtract(1, 'month'));
            },
            [currentMonth],
        );

        /**
         * @function
         * @name onDate
         * @param { React.MouseEvent<HTMLSpanElement, MouseEvent>} - event
         * @returns void
         */
        const onDate = React.useCallback(
            (date: days.Dayjs) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
                event?.preventDefault();
                setSelectedDate(date);
                onDatePicker(date);
            },
            [setSelectedDate, onDatePicker],
        );

        /**
         * @type React.RefObject<HTMLDivElement>
         * @return { object}
         */
        const outRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

        React.useEffect(() => {
            /**
             * Create the days : Sun,....Sat
             */
            const weekDays: string[] = [];

            /**
             * @constant startDayOfWeekendOfMonth
             * @description
             * @returns { days.Dayjs }
             */
            const startDayOfWeekendOfMonth: days.Dayjs = days(currentMonth).startOf('week');

            for (let w = 0; w <= 6; w++) {
                weekDays.push(startDayOfWeekendOfMonth.add(w, 'day').format('ddd'));
            }
            setCurrentDays(weekDays);

            /**
             * Creating the cells: 1, ... 31
             */
            const cellDays: JSX.Element[] = [];

            /**
             * @constant startCellDayOfWeekendOfMonth
             * @description
             * @returns { days.Dayjs }
             */
            let startCellDayOfWeekendOfMonth: days.Dayjs = days(currentMonth)
                .startOf('month')
                .startOf('week');

            /**
             * @constant endCellDayOfWeekendOfMonth
             * @description
             * @returns { days.Dayjs }
             */
            const endCellDayOfWeekendOfMonth: days.Dayjs = days(currentMonth)
                .endOf('month')
                .endOf('week');

            while (startCellDayOfWeekendOfMonth <= endCellDayOfWeekendOfMonth) {
                for (let i = 0; i <= 6; i++) {
                    cellDays.push(
                        <span
                            onClick={onDate(startCellDayOfWeekendOfMonth)}
                            className={classnames(styles?.cellsCard, {
                                'bg-purple-500 text-white':
                                    selectedDate?.format(cellFormat[2]) ===
                                    startCellDayOfWeekendOfMonth.format(cellFormat[2]),
                            })}
                        >
                            {startCellDayOfWeekendOfMonth.format(cellFormat[0])}
                        </span>,
                    );
                    startCellDayOfWeekendOfMonth = startCellDayOfWeekendOfMonth.add(1, 'day');
                }
            }
            setCurrentCells(cellDays); // fill the currentCells array
        }, [currentMonth, onDate, selectedDate, cellFormat]);

        return (
            <div id={id} className="w-1/2 h-auto p-0 m-0 relative">
                <div
                    className={classnames(styles?.input_relative_root)}
                    onClick={openorCloseDatePicker}
                >
                    <input
                        type="text"
                        name={name}
                        ref={mergeRefs([outRef, forwardRef])}
                        className={classnames(styles?.textField_input)}
                        placeholder="hello world!"
                        value={selectedDate?.format(cellFormat[2])}
                    />

                    <div className={classnames(styles?.textField_icon)}>
                        <CalendarIcon className="w-full h-full" />
                    </div>
                </div>
                {datapickerOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-50' }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className={styles?.motion}
                    >
                        <div className={styles?.header}>
                            {/* Header */}
                            <ChevronLeftIcon
                                className={styles?.svgchevron}
                                onClick={onPreviousMonth}
                            />
                            <span className="text-xs">
                                {days(currentMonth).format(cellFormat[3])}
                            </span>
                            <ChevronRightIcon
                                className={styles?.svgchevron}
                                onClick={onNextMonth}
                            />
                        </div>
                        <div className={classnames(styles?.gridcell, styles?.daynames)}>
                            {/* Days */}
                            {currentDays?.map((day: string, index: number) => (
                                <span key={index}>{day}</span>
                            ))}
                        </div>
                        <div className={classnames(styles?.gridcell, 'text-center')}>
                            {/* Cells */}
                            {currentCells?.map((cell: JSX.Element, index: number) => (
                                <span key={index} className="p-3">
                                    {cell}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        );
    },
);
