import React from 'react'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/header/Header'
import Main from '../../layout/main/Main'
import AdminMenu from './AdminMenu'

function AdmainPage() {
  return (
    <div>
        <Header />
        <AdminMenu />
        <Main />
        <Footer />
    </div>
  )
}

export default AdmainPage