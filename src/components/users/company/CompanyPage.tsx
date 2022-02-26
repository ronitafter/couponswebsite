import React from 'react'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/header/Header'
import Main from '../../layout/main/Main'
import CompanyMenu from './CompanyMenu'

function CompanyPage() {
  return (
    <div>
      <Header />
       <CompanyMenu />
      <Main />
      <Footer />
    </div>
  )
}


export default CompanyPage