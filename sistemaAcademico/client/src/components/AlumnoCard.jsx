export function AlumnoCard({alumno}) {
    return (
        <div>
            <h1>{alumno.nombre}</h1>
            <p>{alumno.apellido}</p>
            <hr />
        </div>
    )
}