import { useNavigate } from "react-router"
import { navLinkLocalAction } from "../../shared/consts"
import { NavLinkType } from "./nav-info"

import "./navigation.scss"

type PropsType = {
    link: NavLinkType
}

export const NavigationMenuLink = ( { link }: PropsType) => {

    const navigate = useNavigate()
    const divId: string | null = link.path[0] === '#'
        ? link.path.slice(1, link.path.length)
        : null

    const onClickAction = () => {
        navLinkLocalAction({divId, pagePath: link.path, navigate})
    }

    return (
        <>
            {divId ? (
                <div className="nav-link" onClick={onClickAction}>
                    {link.title}
                </div>
            ) : (
                <div className="nav-link">
                    <a href={link.path}>
                        {link.title}
                    </a>
                </div>
            )}
        </>
    )
}