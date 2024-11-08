import { useNavigate } from "react-router-dom";

export function AlumnoCard({ alumno }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate("/alumnos/" + alumno.id);
      }}
    >
      <h1 className="font-bold uppercase">Nombre: {alumno.nombre}</h1>
      <p className="text-slate-400">Apellido: {alumno.apellido}</p>
      <hr />
    </div>
  );
}
