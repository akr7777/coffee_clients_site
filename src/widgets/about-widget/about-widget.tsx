import clsx from "clsx"
import "./about.scss"

export const AboutUsWidget = () => {
    return (
        <article className={clsx("chapter", "about-container")}>
            {/* <h3>О нас</h3> */}
            <div className="about-phrase">
                "Кофейня HOT & COLD - это место, где вы можете насладится ароматным кофе, попробовать вкусные десерты и выпечку, перекусить сэндвичами и печеньем."
            </div>
        </article>
    )
}