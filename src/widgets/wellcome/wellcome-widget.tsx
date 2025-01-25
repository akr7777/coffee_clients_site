import { TypingEffect } from "../../components/typewriter/typewriter"

import "./wellcome.scss"

export const WellcomeWidget = () => {
    return (
        <div className={"wellcome-widget-container"}>
                <h2>
                    <TypingEffect words={[
                        "Вкусная выпечка",
                        "Кофе высших сортов",
                        "Уютная атмосфера",
                    ]} />
                </h2>
        </div>
    )
}