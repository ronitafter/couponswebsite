import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CompanyMenu from '../../users/company/CompanyMenu';
import CustomerMenu from '../../users/customer/CustomerMenu';
import AdminMenu from '../../users/admin/AdminMenu';

import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <ListGroup className='d'>
        <ListGroup.Item>
          <Link to='/AdmainPage'>AdminPage</Link>
          {/*<AdminMenu />*/}
        </ListGroup.Item>
        <ListGroup className='d'>
          <ListGroup.Item>
            <Link to='/CompanyPage'>CompanyPage</Link>
            {/*CompanyMenu />*/}
          </ListGroup.Item>
          <ListGroup className='d'>
          <ListGroup.Item>
            <Link to='/CustomerPage'>CustomerPage</Link>
             {/*<CustomerMenu />*/}
          </ListGroup.Item>
          </ListGroup>
        </ListGroup>
      </ListGroup>


    </div>
  )
}

export default Sidebar



