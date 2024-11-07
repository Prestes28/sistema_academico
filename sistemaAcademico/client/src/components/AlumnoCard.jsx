import { useNavigate } from "react-router-dom";


export function AlumnoCard({alumno}) {
    const navigate = useNavigate();
    return (
        <div style= {{background: "#202020"}}
         onClick={()=> {
            navigate('/alumnos/'+ alumno.id)
         }}
        >
            <h1>{alumno.nombre}</h1>
            <p>{alumno.apellido}</p>
            <hr />
        </div>
    )
}