import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Navdata } from "./Navdata"
import "./Navbar.css"
import { IconContext } from "react-icons"


function Navbar() {
const [sidebar, setSidebar] = useState(false)

const sidebarFunction = () => {
    setSidebar(!sidebar)
}


  return (
    <>
    <IconContext.Provider value={{color: "#272b33"}}>
        <div className='navbar'>
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars className='bar-icon' onClick={sidebarFunction}/>
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className='nav-menu-items' onClick={sidebarFunction}>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars' >
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {Navdata.map((item,index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <NavLink to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar