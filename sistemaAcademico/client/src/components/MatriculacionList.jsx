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
        <div>

            {matriculaciones.map((matriculacion) => (
              <MatriculacionCard key={matriculacion.id} matriculacion={matriculacion} />
            ))}
        </div>
    )
}