export function MateriaCard({materia}) {
    return (
        <div>
            <h1>{materia.nombre}</h1>
            <p>{materia.cuposLibres}</p>
            <hr />
        </div>
    )
}