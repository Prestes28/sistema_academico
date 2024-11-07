import { useEffect } from "react"
import { useForm } from "react-hook-form";
import {createMateria, deleteMateria, updateMateria, getMateria} from '../api/Materias.api';
import { useNavigate, useParams } from "react-router-dom";

export function MateriasFormPage() {
    const {
        register,
         handleSubmit,
         formState:{errors},
         setValue
    }=useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit( async data => {
        if (params.id){
            console.log("Actualizando");
            await updateMateria(params.id,data)
        } else {
            await createMateria(data)
        }
        navigate('/materias');
    })
    useEffect(()=> {
        async function loadMateria(){
            if (params.id) {
                const res = await getMateria(params.id)
                console.log(res)
                setValue("nombre", res.data.nombre)
                setValue("cuposLibres",res.data.cuposLibres)
            }
        }
        loadMateria();
    })
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre" {...register("nombre",{required:true})} />
                {errors.nombre && <span>Este campo es obligatorio</span>}
                <input type="number"placeholder="Cupos Libres" {...register("cuposLibres",{required:true})}/>
                {errors.cuposLibres && <span>Este campo es obligatorio</span>}
                <button>Save</button>
            </form>
            {
                params.id && (
                    <button onClick={() => {
                        const acepted = window.confirm('Estas seguro de que quieres eliminar esta materia?')
                        if (acepted) {
                            deleteMateria(params.id)
                            navigate('/materias')
                        }
                    }}>Delete</button>
                )
            }
        </div>
    )
    
}