import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navBar">
          <ul>
              <li>
                  <NavLink className="linkBtn" to= "/characters">
                    Characters
                </NavLink>
              </li>
              <li>
                  <NavLink className="linkBtn" to= "/location">
                    Location
                </NavLink>
              </li>
          </ul>
      </div>
  )
}

export default NavBar