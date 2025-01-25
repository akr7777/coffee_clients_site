import { v4 } from "uuid"
import { menuItems } from "../../shared/menu"
import { MenuWidgetCard } from "./card/menu-widget-card"
import { divIds } from "../../shared/consts"

import "./menu-widget.scss"

export const MenuWidget = () => {
    return (
        <div className="chapter" id={divIds.menu}>
            <h3>Наше меню</h3>
            <div className="menu-widget-container">
                {menuItems.map(item => <MenuWidgetCard item={item} key={v4()} />)}
            </div>
        </div>
    )
}