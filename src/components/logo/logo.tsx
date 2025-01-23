import "./logo.scss"

import logo from "../../assets/images/coffee-beans-94.png"

export const Logo = () => {
    return (
        <div className="logo-style">
            <img alt="logo" src={logo} />
            <h2>Hot & Cold</h2>
        </div>
    )
}