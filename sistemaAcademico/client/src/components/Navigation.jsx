import { Link } from "react-router-dom";


export function Navigation() {
    return (
        <div>
            <div className="flex justify-center py-3 ">
                <Link to="/alumnos"><h1 className="font-bold text-3x1 mb- mx-3">Alumnos</h1></Link>
                <Link to= "/materias"><h1 className="font-bold text-3x1 mb- mx-3">Materias</h1></Link>
                <Link to="/matriculaciones"><h1 className="font-bold text-3x1 mb- mx-3">Matriculaciones</h1></Link>
            </div>
            <div>
                <ul className="flex justify-center px-3 m-3">
                    <button className="bg-indigo-500 px-3 py-2 rounded-lg m-3 hover:bg-indigo-700"><Link to="/materias-create">Crear Materia</Link></button>
                    <button className="bg-indigo-500 px-3 py-2 rounded-lg m-3 hover:bg-indigo-700"><Link to="/alumnos-create">Crear Alumno</Link></button>
                    <button className="bg-indigo-500 px-3 py-2 rounded-lg m-3 hover:bg-indigo-700"><Link to="/matriculaciones-create">Crear Matriculacion</Link></button>
                </ul>
            </div>
        </div>
    )
}