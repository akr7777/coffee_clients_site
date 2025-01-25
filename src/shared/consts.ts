import { NavigateFunction } from "react-router"

export const divIds = {
    menu: "menu",
    contacts: "contacts",
}

export const mobileMenuBreakPoint = 600
export const headerIconsSize = 48


export type NavLinkLocalActionPropsType = {
    divId: string | null, 
    pagePath: string, 
    navigate: NavigateFunction
}
export const navLinkLocalAction = ({divId, pagePath, navigate} : NavLinkLocalActionPropsType) => {
    navigate(pagePath)
    if (divId) {
        setTimeout(() => {
            const elem = document.getElementById(divId)
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth'})
            }
        }, 300)
    }
}