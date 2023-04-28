import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <>
  <ul>
    <li>
  <a href="#" data-item="Home">
          <Link to={'/'} >home</Link>
          </a>
    </li>
    <li>
          <a href="#" data-item="ContactList">
            <Link to={'/contact'} >ContactList</Link>
          </a>
        </li>
    <li><a href="#" data-item="AddContact">
             <Link to={'/Add'} >AddContact</Link>
          </a></li>
    <li> <a href="#" data-item=" Login / Logout">
             <Link to={'/Login'} >Login / Logout</Link>
          </a></li>
  </ul>
  <a
    className="shameless-plug"
    href="https://scottyzen.com/?cp"
    target="_blank"
  >
    
  </a>
</>

    </div>
  )
}

export default NavBar

