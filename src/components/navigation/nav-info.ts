import { divIds } from "../../shared/consts"

export type NavLinkType = {
    title: string,
    path: string
}

export const navigationMenu: Array<NavLinkType> = [
    {
        title: "Меню",
        path: "#" + divIds.menu,
    },
    {
        title: "Контакты",
        path: "#" + divIds.contacts,
    },
]