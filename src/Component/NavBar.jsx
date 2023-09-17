import React from "react"
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <div className="bg-sky-700 pb-2 pt-2">
        <ul className="flex gap-5 justify-center">
        <NavLink to="/" className={({isActive})=>isActive ? "text-sky-50 text-3xl border-b-2 font-semibold " : "text-2xl text-cyan-400"}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>isActive ? "text-sky-50 text-3xl border-b-2 font-semibold " : "text-2xl text-cyan-400"}>About</NavLink>
        <NavLink to="/contact" className={({isActive})=>isActive ? "text-sky-50 text-3xl border-b-2  font-semibold" : "text-2xl text-cyan-400"}>Contact</NavLink>
     

        </ul>
    </div>
  )
}

export default NavBar

