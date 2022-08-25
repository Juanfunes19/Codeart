import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import logo2 from "./logo2.png"
import "./Nav.css"

const Nav = () => {
  return (
    <div>

    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
        <div class="div-navbar d-flex justify-content-center  align-items-center">
            <Link  to="/" class="navbar-brand logo align-items-center" ><img src={logo2} alt="Logo" /></Link>
            <Link to="/"  class="navbar-brand-movil "><img src={logo} alt="Logo" /></Link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bi-list"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
                <Link  to="/" class="nav-link active" >Home</Link>
                <Link  to="/alumnos" class="nav-link active" >Alumnos</Link>
                <Link  to="/incripcion" class="nav-link active" >Inscripcion</Link>
        </ul>
        </div>
    </div>
    </nav>


    </div>
  )
}

export default Nav