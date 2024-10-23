import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { Children, FC, PropsWithChildren, ReactNode } from 'react';


interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props: PropsWithChildren<AppLinkProps>) => {

    const { to,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className])} {...otherProps}>
            {children}
        </Link>
    );
};