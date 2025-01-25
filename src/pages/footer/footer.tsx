import "./footer.scss"

export const Footer = () => {
    const currentYear: number = new Date().getFullYear()

    return (
        <footer>
            <label>
                Hot & Cold, лучшая кофейня на районе
            </label>
            <label>
                All right reserved, {currentYear}
            </label>
        </footer>
    )
}