import { useEffect, useState } from "react";
import {getAllMatriculaciones} from "../api/Matriculacion.api"
import { MatriculacionCard } from "./MatriculacionCard";

export function MatriculacionList() {
    const [matriculaciones, setMatriculaciones] = useState([]);
    
    useEffect(()=>{
    async function loadMatriculaciones(){
        const res =  await getAllMatriculaciones()
        setMatriculaciones(res.data);
    }
    loadMatriculaciones();
    },[]);
    
    return(
        <div  className="grid grid-cols-3 gap-3 ">

            {matriculaciones.map((matriculacion) => (
              <MatriculacionCard key={matriculacion.id} matriculacion={matriculacion} />
            ))}
        </div>
    )
}