import { useEffect, useState } from "react";
import {getAllAlumnos} from '../api/Alumnos.api'
import { AlumnoCard } from "./AlumnoCard";

export function AlumnosList() {
    const [alumnos, setAlumnos] = useState([]);
    
    useEffect(()=>{
    async function loadAlumnos(){
        const res =  await getAllAlumnos()
        setAlumnos(res.data);
    }
    loadAlumnos();
    },[]);
    
    return(
        <div className="grid grid-cols-3 gap-3 ">
            {alumnos.map((alumno) => (
              <AlumnoCard key={alumno.id} alumno={alumno} />
            ))}
        </div>
    )
}