import "./logo.scss"

import logo from "../../assets/images/coffee-beans-94.png"
import { useResize } from "../../hooks/use-resize/useResize"
import { headerIconsSize, mobileMenuBreakPoint } from "../../shared/consts"
import { useEffect, useState } from "react"

const getStyle = (devWidth: number) => {
    return devWidth >= mobileMenuBreakPoint
    ? {
        width: 96,
        height: 96
    } : {
        width: headerIconsSize,
        height: headerIconsSize,
    }
}

export const Logo = () => {
    const devWidth: number = useResize().width

    const [imgStyle, setImgStyle] = useState(getStyle(devWidth))

    useEffect(() => {
        setImgStyle(getStyle(devWidth))
    }, [devWidth])

    console.log('imgStyle=', imgStyle);
    
    return (
        <div className="logo-style">
            <img alt="logo" src={logo} style={imgStyle}/>
            <h2>Hot & Cold</h2>
        </div>
    )
}