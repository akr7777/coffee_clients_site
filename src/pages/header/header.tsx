import clsx from "clsx"
import { Logo } from "../../components/logo/logo"
import { NavigationDesctop } from "../../components/navigation/desctop-nav"
import { useResize } from "../../hooks/use-resize/useResize"
import { NavigationMobile } from "../../components/navigation/mobile-nav"
import { mobileMenuBreakPoint } from "../../shared/consts"

import "./header.scss"

export const Header = () => {

    const devWidth: number = useResize().width

    return (
        <header>
            <div className={clsx("chapter", "header-class")}>
                <Logo />
                {devWidth < mobileMenuBreakPoint ? <NavigationMobile /> : <NavigationDesctop />}
            </div>
        </header>
    )
}