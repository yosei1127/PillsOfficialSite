import React from 'react'
import Header from './header'
import Prof from "./profile"
import Footer from './footer'
import "./layout.css"

const Layout = (props) => {
    return ( 
        <div>
        <Header/>
        <Prof/>
        <Footer/>
        </div>
    )
}

export default Layout