import React from 'react'

import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='barra'>
      <div className='navbar'>
        <ul className='items'>
          <Link className='links' as={Link} to="./">Home</Link>

          <NavDropdown className='linksdrop' bg="#0066cc" title="Cursos" id="nav-dropdown">
            
            <NavDropdown.Item className='linksdrop2' as={Link} to="./cursos">Cursos</NavDropdown.Item>
      
          </NavDropdown>
          <Link className='links' as={Link} to="./admin">Administración</Link>
        </ul>
      </div>
    </div>
  )
}
export default Navbar