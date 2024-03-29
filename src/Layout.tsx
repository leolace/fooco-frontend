import React from "react"
import { Outlet } from "react-router"
import Header from "./interface/Header"
import { MainContainer } from "./styles/container"
import Footer from "./interface/Footer"

const Layout = () => {
  return (
    <MainContainer>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </MainContainer>
  )
}

export default Layout
