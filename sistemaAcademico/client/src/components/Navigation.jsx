import { Link } from "react-router-dom";


export function Navigation() {
    return (
        <div>
            <Link to="/alumnos"><h1>Alumno App</h1></Link>
            <Link to= "/materias"><h1>Materias</h1></Link>
            <Link to="/matriculaciones"><h1>Matriculaciones</h1></Link>
            <ul>
                <li><Link to="/materias-create">Crear Materia</Link></li>
                <li><Link to="/alumnos-create">Create Alumno</Link></li>
                <li><Link to="/matriculaciones-create">Create Matriculacion</Link></li>
            </ul>
         
        </div>
    )
}