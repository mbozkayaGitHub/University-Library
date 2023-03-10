import React, { useState } from 'react'
import {Nav,Logo,Menu, MenuLink, HamburgerIcon} from "./Navbar.style"
import {menuIcon} from "../../helper/iconData"

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  return (
    <Nav justify="space-between" wrap="wrap" >
      <Logo to="/">University Library</Logo>
    <HamburgerIcon onClick={()=>setShowMenu(!showMenu)}>{menuIcon}</HamburgerIcon>
    <Menu showMenu={showMenu}>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/about">About</MenuLink>
      <MenuLink to="/register">Register</MenuLink>
      <MenuLink to="/log in">Login</MenuLink>
      <MenuLink to="/log out">Log out</MenuLink>
    </Menu>
    </Nav>
  )
};




export default Navbar;