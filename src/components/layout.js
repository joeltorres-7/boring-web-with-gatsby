import * as React from 'react';
import Navbar from './navbar'

const Layout = ({ pageTitle, children }) => {
    return (
        <main>
            <Navbar />
        </main>
    )
}

export default Layout