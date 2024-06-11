import { ActiveLink } from "../active-link/ActiveLink"

interface Props {
    path: string,
    icon: JSX.Element,
    title: string,
    subtitle: string
}
export const SideBarMenuItem = ({ path, icon, title, subtitle }: Props) => {
    return (
        <ActiveLink path={path} title={title} subtitle={subtitle} icon={icon}  />
    )
}
