import { AboutUsWidget } from "../../widgets/about-widget/about-widget"
import { WellcomeWidget } from "../../widgets/wellcome/wellcome-widget"

export const RootPage = () => {

    return (
        <>
            <WellcomeWidget />
            <AboutUsWidget />
        </>
    )
}