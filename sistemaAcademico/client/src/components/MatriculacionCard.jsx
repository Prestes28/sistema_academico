import { useNavigate } from "react-router-dom";


export function MatriculacionCard({matriculacion}) {
    const navigate = useNavigate();
    return (
        <div style= {{background: "#202020"}}
        onClick={()=> {
           navigate('/matriculaciones/'+ matriculacion.id)
        }}>
            <h1>{matriculacion.alumno}</h1>
            <p>{matriculacion.materia}</p>
            <p>{matriculacion.fecha_inscripcion}</p>
            <hr />
        </div>
    )
}