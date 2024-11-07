import { useNavigate } from "react-router-dom"


export function MateriaCard({materia}) {
    const navigate = useNavigate();
    return (
        <div style= {{background: "#202020"}}
        onClick={()=> {
           navigate('/materias/'+ materia.id)
        }}>
            <h1>{materia.nombre}</h1>
            <p>{materia.cuposLibres}</p>
            <hr />
        </div>
    )
}