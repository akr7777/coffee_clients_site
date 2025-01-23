import clsx from "clsx"
import { Logo } from "../../components/logo/logo"
import { NavigationDesctop } from "../../components/navigation/desctop-nav"

import "./header.scss"

export const Header = () => {
    return (
        <header>
            <div className={clsx("chapter", "header-class")}>
                <Logo />
                <NavigationDesctop />
            </div>
        </header>
    )
}