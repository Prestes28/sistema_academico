import { useEffect, useState } from "react";
import {getAllMaterias} from '../api/Materias.api'
import { MateriaCard } from "./MateriaCard";

export function MateriasList() {
    const [materias, setMaterias] = useState([]);
    
    useEffect(()=>{
    async function loadMaterias(){
        const res =  await getAllMaterias()
        setMaterias(res.data);
    }
    loadMaterias();
    },[]);
    
    return(
        <div className="grid grid-cols-3 gap-3 ">
            {materias.map((materia) => (
              <MateriaCard key={materia.id} materia={materia} />
            ))}
        </div>
    )
}