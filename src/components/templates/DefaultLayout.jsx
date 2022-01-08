import React from 'react'
import { Footer } from '../atoms/layout/Footer'
import { Header } from '../atoms/layout/Header'
import '../../global.css'

export const DefaultLayout = (props) => {
    const { children } = props
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
