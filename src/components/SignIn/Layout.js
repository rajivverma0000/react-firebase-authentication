import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
    return (
        <>
            <nav>
                <Link to='/'></Link>&nbsp;
                <Link to='/app'></Link>&nbsp;
                <Link to='/login'></Link>&nbsp;
                <Link to='/signup'></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout