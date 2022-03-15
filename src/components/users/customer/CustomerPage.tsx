import React from 'react'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/header/Header'
import Main from '../../layout/main/Main'
import CouponsList from '../../Coupons/CouponsList'
import CustomerMenu from './CustomerMenu'

function CustomerPage() {
  return (
    <div>
      <CouponsList />
      <CustomerMenu/>
    </div>
  )
}


export default CustomerPage