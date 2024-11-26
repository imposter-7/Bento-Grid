import styles from './Card.module.scss';

export interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: ICardProps) => {
  return <div className={`${className} ${styles['card']}`}>{children}</div>;
};
