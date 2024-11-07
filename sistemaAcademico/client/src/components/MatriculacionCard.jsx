export function MatriculacionCard({matriculacion}) {
    return (
        <div>
            <h1>{matriculacion.alumno}</h1>
            <p>{matriculacion.materia}</p>
            <p>{matriculacion.fecha_inscripcion}</p>
            <hr />
        </div>
    )
}