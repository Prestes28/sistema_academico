import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllAlumnos } from "../api/Alumnos.api";
import { getAllMaterias } from "../api/Materias.api";

export function MatriculacionCard({ matriculacion }) {
  const navigate = useNavigate();
  const [alumnos, setAlumnos] = useState([]);
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const loadAlumnosAndMaterias = async () => {
      const alumnosResponse = await getAllAlumnos();
      const materiasResponse = await getAllMaterias();
      setAlumnos(alumnosResponse.data);
      setMaterias(materiasResponse.data);
    };
    loadAlumnosAndMaterias();
  }, []); // Agregar el array de dependencias vacío para evitar un bucle infinito

  // Buscar el nombre del alumno por su ID
  const alumno = alumnos.find(a => a.id === matriculacion.alumno);
  // Buscar el nombre de la materia por su ID
  const materia = materias.find(m => m.id === matriculacion.materia);

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate("/matriculaciones/" + matriculacion.id);
      }}
    >
      <h1 className="font-bold uppercase">Nombre de alumno: {alumno ? alumno.nombre : "Alumno no encontrado"}</h1>
      <p className="text-slate-400">Materia: {materia ? materia.nombre : "Materia no encontrada"}</p>
      <p className="text-slate-400">Fecha de matriculacion: {matriculacion.fecha_inscripcion}</p>
      <hr />
    </div>
  );
}
