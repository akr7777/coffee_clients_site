import { NavLinkType } from "./nav-info"

import "./navigation.scss"

type PropsType = {
    link: NavLinkType
}

export const NavigationMenuLink = ( { link }: PropsType) => {
    return (
        <div className="nav-link">
            <a href={link.path}>
                {link.title}
            </a>
        </div>
    )
}