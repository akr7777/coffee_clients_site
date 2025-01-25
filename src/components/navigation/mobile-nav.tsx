import { useState } from "react"
import { navigationMenu } from "./nav-info"
import { NavigationMenuLink } from "./nav-link"

import "./navigation.scss"

import burgerMenu from "../../assets/icons/burger-menu.svg"
import { headerIconsSize } from "../../shared/consts"

export const NavigationMobile = () => {

    const [show, setShow] = useState<boolean>(false)

    const menuStyle = {
        width: headerIconsSize,
        height: headerIconsSize,
    }

    return (
        <div className="desctop-nav">

            <img alt="" src={burgerMenu} onClick={() => setShow(true) } style={menuStyle}/>

            {
                show && (
                    <div className="mobile-nav">
                        {navigationMenu.map(n => <NavigationMenuLink link={n} key={n.path} />)}
                    </div>
                )
            }
            
        </div>
        
    )
}