import { Link } from "react-router-dom";


export function Navigation() {
    return (
        <div>
            <Link to="/alumnos">
                <h1>Alumno App</h1>
            </Link>
            <Link to= "/materias"><h1>Materias</h1></Link>
            <Link to="/materias-create">Crear Materia</Link>
            <br />
            <Link to="/alumnos-create">Create Alumno</Link>
        </div>
    )
}