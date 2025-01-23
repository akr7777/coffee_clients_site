import { TypingEffect } from "../../components/typewriter/typewriter"

import "./wellcome.scss"

import img from "../../assets/images/coffee-1.webp"

export const WellcomeWidget = () => {
    return (
        <div className="wellcome-widget-container">
            <img alt="" src={img} />
            <div className="wellcome-text">
                <h2>
                    <TypingEffect words={[
                        "Вкусная выпечка",
                        "Кофе высших сортов",
                        "Уютная атмосфера",
                    ]} />
                </h2>
            </div>
        </div>
    )
}