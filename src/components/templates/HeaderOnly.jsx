import { Header } from "../atoms/layout/Header"
import '../../global.css'

export const HeaderOnly = (props) => {
    const { children } = props
    return (
        <>
            <Header />
            <main>
                { children }
            </main>
        </>
    )
}
