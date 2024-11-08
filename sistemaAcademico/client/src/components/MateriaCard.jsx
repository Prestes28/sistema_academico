import { useNavigate } from "react-router-dom"


export function MateriaCard({materia}) {
    const navigate = useNavigate();
    return (
        <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
        onClick={()=> {
           navigate('/materias/'+ materia.id)
        }}>
            <h1 className="font-bold uppercase">Materia: {materia.nombre}</h1>
            <p className="text-slate-400">Cupos: {materia.cuposLibres}</p>
            <hr />
        </div>
    )
}