import React from "react"
import './Layout.css'
import Header from "../../Header/Header"
import Footer from "../../footer/footer"
import Questions from "../../Questions/Questions"
import Map from "../../Map/Map"
import SubHeader from "../../SubHeader/SubHeader"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return(
        <>
        <Header/>
        <SubHeader/>
        <Outlet/>
        <Questions/>
        <Map/>
        <Footer/>
        </>
    )
}