import "./Incripcion.css"
import { useEffect, useState} from "react";
import Swal from 'sweetalert2'


const Incripcion = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [edad, setEdad] = useState("")
    const [carrera, setCarrera] = useState("")


    // Funcion de incripcion
    const handleSubmitRegister = (e) =>{
        e.preventDefault()
        if(email === '' || edad === '' || name === ''|| carrera === ''){
            return alert("Todos los campos deben ser completados")
        }

            Swal.fire({
            icon: 'success',
            text: 'Formulario enviado',
            })
            setName("")
            setEmail("")
            setEdad("")
            setCarrera("")
    

        console.log(`Datos de la incripcion: 
        Nombre:${name},
        Email:${email},
        Edad:${edad},
        Carrera: ${carrera}`)
    }


  return (
    <>
    <div class="div-incripcion container">
    <h4 class=" text-center">FORMULARIO DE INCRIPCIÓN</h4>
        <form className="row d-flex justify-content-center align-items-center flex-column col-12" onSubmit={handleSubmitRegister}>
            <div className="mb-3 col-12">
                <input type="text"  className="form-control" value={name} onChange={e => setName(e.target.value)} placeholder="Nombre"/>
            </div>
            <div className="mb-3 col-12">
                <input type="email"  className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
            </div>
            <div className="mb-3 col-12">
                <input type="number" className="form-control" value={edad} onChange={e => setEdad(e.target.value)} placeholder="Edad"/>
            </div>
            <div className="mb-3 col-12">
                <input type="text" className="form-control" value={carrera} onChange={e => setCarrera(e.target.value)} placeholder="Carrera"/>
            </div>
            <button type="submit" className="btn btn-primary cmb-3 col-12 ">Inscribirse</button>
        </form>
    </div>
    </>
  )
}

export default Incripcion