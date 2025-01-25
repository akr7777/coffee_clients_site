
import { MenuItemType } from "../../../store/appSlice/types/app-types"
import "./menu-widget-card.scss"

type PropsType = {
    item: MenuItemType
}

export const MenuWidgetCard = ({item} : PropsType) => {
    return (
        <div className="menu-widget-card">
            <img alt={item.title} src={item.image} />
            <label>{item.title}</label>
            <label>{item.description}</label>
            <div>
                {item.composition}
            </div>
        </div>
    )
}