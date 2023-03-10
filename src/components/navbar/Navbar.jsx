import React, { useState } from 'react'
import {Nav,Logo,Menu, MenuLink, HamburgerIcon} from "./Navbar.style"
import {menuIcon} from "../../helper/iconData"

const Navbar = ({currentUser,setCurrentUser}) => {

  const [showMenu, setShowMenu] = useState(false);
  const logout = () => {
    setCurrentUser(false)
    sessionStorage.clear();
  }
  return (
    <Nav justify="space-between" wrap="wrap" >
      <Logo to="/">University Library</Logo>
    <HamburgerIcon onClick={()=>setShowMenu(!showMenu)}>{menuIcon}</HamburgerIcon>
    <Menu showMenu={showMenu}>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/about">About</MenuLink>
      {currentUser ? ( 
          <MenuLink to="/log out" onClick={logout}>Log out</MenuLink>
      ) : (
        <>
      <MenuLink to="/register">Register</MenuLink>
      <MenuLink to="/log in">Login</MenuLink>
      </>
      )}
    </Menu>
    </Nav>
  )
};




export default Navbar;