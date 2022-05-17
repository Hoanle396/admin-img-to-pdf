import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Navbar() {
   const nav = useNavigate()
   const logout = ()=>{
      localStorage.removeItem('token');
      nav("login")
   }
   return (
      <nav className="navbar navbar-light bg-light">
         <a className="navbar-brand" href="">
            Admin Dashboard
         </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-lg navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
               <li className="nav-item active">
                  <a className="nav-link" href="">Home </a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" onClick={()=>nav('user')}>User</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" onClick={()=>nav('feedback')}>FeedBack</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" onClick={()=>nav('/send')}>Send Notification</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link " onClick={logout}>Logout</a>
               </li>
            </ul>
         </div>
      </nav>
   )
}
