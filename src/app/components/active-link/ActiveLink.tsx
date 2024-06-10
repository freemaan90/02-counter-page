'use client'
import Link from "next/link"
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation"


interface Props {
    path: string,
    title: string,
    subtitle: string,
    icon: JSX.Element
}

export const ActiveLink = ({ path, title, icon, subtitle }: Props) => {
    const pathName = usePathname()
    return (
        <Link
            className={`${style.link} ${(path === pathName) && style['active-link']} `}
            href={path}
        >
            {icon}
            <div className={style.container}>
                <span className={style.title}>{title}</span>
                <span className={style.subtitle}>{subtitle}</span>
            </div>
        </Link>
    )
}