import "./Alumnos.css";
// import { useEffect, useState} from "react";

const Alumnos = () => {

  const alumnos = [
    {
        nombre: "Pedro",
        edad: 20,
        carrera: "Ingeniería",
        hobbie: "Futbol"
    },
    {
        nombre: "Rodrigo",
        edad: 22,
        carrera: "Arquitectura",
        hobbie: "Bajo eléctrico"
    },
    {
        nombre: "Romina",
        edad: 21,
        carrera: "Abogacía",
        hobbie: "Acrobacia"
    },
    {
        nombre: "Ana",
        edad: 23,
        carrera: "Contadora",
        hobbie: "Astronomía"
    }
]
  

  return (
    <div class="div-alumnos pt-5 container-fluid">
      <h4 class="text-center pt-5">ALUMNOS CURSANDO</h4>
      <div class="row justify-content-end d-flex align-items-end container-fluid">
      <hr></hr>
            <p class="col-2 justify-content-center d-flex categorias border-start fw-bold">#</p>
            <p class="col-2 justify-content-center d-flex categorias border-start fw-bold">NOMBRE</p>
            <p class="col-2 justify-content-center d-flex categorias  border-start fw-bold">EDAD</p>
            <p class="col-3 justify-content-center d-flex categorias  border-start fw-bold">CARRERA</p>
            <p class="col-3 justify-content-center d-flex categorias border-start border-end fw-bold">HOBBIE</p>
        <hr ></hr>
      </div>
      {
        alumnos.length > 0 ?
          alumnos.map((alumno,i) =>(
            <div key={alumno.nombre} class="row  d-flex justify-content-evenly container-fluid">
              <p class="col-2 justify-content-center d-flex border-start fw-bold">{i+1}</p>
              <p class="col-2 justify-content-center d-flex border-start">{alumno.nombre}</p>
              <p class="col-2 justify-content-center d-flex border-start">{alumno.edad}</p>
              <p class="col-3 justify-content-center d-flex border-start">{alumno.carrera}</p>
              <p class="col-3 justify-content-center d-flex border-start border-end" >{alumno.hobbie}</p>
              <hr></hr>
            </div>
          ))
        : <p>No hay alumnos</p>
      }
    </div>
  )
}

export default Alumnos