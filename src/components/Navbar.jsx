import React from 'react'

export default function Navbar() {
   return (
      <nav class="navbar navbar-light bg-light">
         <a class="navbar-brand" href="#">
            <img src="../logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Admin Dashboard
         </a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
               <li class="nav-item active">
                  <a class="nav-link" href="#">Home </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">User</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">FeedBack</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link " href="#">Logout</a>
               </li>
            </ul>
         </div>
      </nav>
   )
}
