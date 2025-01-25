import { AboutUsWidget } from "../../widgets/about-widget/about-widget"
import { ContactsWidget } from "../../widgets/contacts/contacts"
import { MenuWidget } from "../../widgets/menu-widget/menu-widget"
import { WellcomeWidget } from "../../widgets/wellcome/wellcome-widget"

export const RootPage = () => {

    return (
        <>
            <WellcomeWidget />
            <AboutUsWidget />

            <MenuWidget />

            <ContactsWidget />
        </>
    )
}