/* eslint-disable no-undef */
import * as React from 'react';

/**
 *
 */
export interface IButtonProps {
    color?: string;
}

/**
 *
 *
 */
export const Button: React.FC<IButtonProps> = ({ color }): JSX.Element => {
    return <div className="max-w-sm rounded overflow-hidden shadow-lg">Hello world {color}</div>;
};
