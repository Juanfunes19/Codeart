import { Link } from 'react-router-dom'
import "./Home.css"
import fondo from "./fondo.png"

const Home = () => {
  return (
    <div class="home d-flex justify-content-center row">
      <div class="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center row">
        <div class="col-9 pt-5 ">
          <h3 class="titulo ">Unite a la comunidad de aprendizaje online en vivo más grande de Latinoamérica</h3> 
          <p>Clases online en vivo dictadas por expertos de la industria, enfoque 100% práctico, mentorías personalizadas y acceso a una comunidad de +150.000 estudiantes.</p>
          <Link to="/incripcion"><button class="btn btn-primary justify-content-center">EMPEZA AHORA</button></Link >
        </div>
      </div>
      <div class="col-md-6 col-lg-6 d-flex justify-content-start d-none d-lg-block">
        <div class="container">
          <img src={fondo} class=""></img>
        </div>
      </div>
    </div>
  )
}

export default Home