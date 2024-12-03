import { useEffect } from "react"
import { useForm } from "react-hook-form";
import {createMateria, deleteMateria, updateMateria, getMateria} from '../api/Materias.api';
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-hot-toast';

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
            toast.success('Materia Actualizada con exito')
        } else {
            await createMateria(data)
            toast.success('Materia Creada con exito')
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
        <div className="max-w-90 mx-auto justify-center">
            <h2 className="font-bold text-3x1 mb- mx-3">{params.id ? "Editar Inscripción" : "Crear Inscripción"}</h2>
            <form onSubmit={onSubmit}>
            <label className="font-bold text-3x1 mb- mx-3">Nombre: </label>
                <input className='bg-zinc-700 p-3 rounded- block w-full mb-3' type="text" placeholder="Nombre" {...register("nombre",{required:true})} />
                {errors.nombre && <span>Este campo es obligatorio</span>}
                <label className="font-bold text-3x1 mb- mx-3">Cupos Totales: </label>
                <input  className='bg-zinc-700 p-3 rounded- block w-full mb-3' type="number"placeholder="Cupos Totales" {...register("cuposLibres",{required:true})}/>
                {errors.cuposLibres && <span>Este campo es obligatorio</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block mt-3 w-full'>Guardar</button>
            </form>
            {
                params.id && (
                    <button className='bg-red-500 p-3 mt-3 rounded-md' onClick={() => {
                        const acepted = window.confirm('Estas seguro de que quieres eliminar esta materia?')
                        if (acepted) {
                            deleteMateria(params.id)
                            toast.success('Materia eliminada con exito')
                            navigate('/materias')
                        }
                    }}>Borrar</button>
                )
            }
        </div>
    )
    
}