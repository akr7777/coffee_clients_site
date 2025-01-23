import { navigationMenu } from "./nav-info"
import { NavigationMenuLink } from "./nav-link"

import "./navigation.scss"

export const NavigationDesctop = () => {
    return (
        <div className="desctop-nav">
            {navigationMenu.map(n => <NavigationMenuLink link={n} key={n.path} />)}
        </div>
    )
}