import React from 'react';
import styles from './Grid.module.scss';

export interface IGridProps {
  children: React.ReactNode;
  className?: string;
}

export const Grid = ({ children, className = '' }: IGridProps) => {
  return (
    <div className={`${styles['grid']} ${styles[className]}`}>{children}</div>
  );
};
