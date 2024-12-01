import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { createAlumno, deleteAlumno, updateAlumno, getAlumno } from '../api/Alumnos.api';
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'
export function AlumnosFormPage() {

    const {register, 
        handleSubmit, 
        formState:{errors},
        setValue
    } = useForm();

    const navigate=useNavigate();
    const params = useParams();
    // console.log(params)

    const onSubmit = handleSubmit( async data => {
        if (params.id) {
            console.log("Actualizando");
            await updateAlumno(params.id, data)
            toast.success('Alumno Actualizado con exito')
        } else {
            await createAlumno(data)
            toast.success('Alumno registrado con exito')
        }
        navigate('/alumnos');
    })
    useEffect(() => {
        async function loadAlumno(){
            if (params.id){
                const res = await getAlumno(params.id)
                console.log(res)
                setValue("nombre",res.data.nombre)
                setValue("apellido",res.data.apellido)
                setValue("fecha_nac", res.data.fecha_nac)
             }
        }
        loadAlumno();
    })
    return (
        <div className="max-w-90 mx-auto justify-center">
            <form onSubmit={onSubmit}>
                <label className="font-bold text-3x1 mb- mx-3">Nombre:</label>
                <input className='bg-zinc-700 p-3 rounded- block w-full mb-3' type="text" placeholder="Nombre" {...register("nombre",{required:true})}/>
                {errors.nombre && <span>Este campo es requerido</span>}
                <label className="font-bold text-3x1 mb- mx-3">Apellido:</label>
                <input  className='bg-zinc-700 p-3 rounded- block w-full mb-3' type="text" placeholder="Apellido" {...register("apellido",{required:true})}/>
                {errors.apellido && <span>Este campo es requerido</span>}
                <label className="font-bold text-3x1 mb- mx-3">Fecha de nacimiento:</label>
                <input className='bg-zinc-700 p-3 rounded- block w-full mb-3' type="date" placeholder="Fecha de Nacimiento" {...register("fecha_nac")} />
                <button className='bg-indigo-500 p-3 rounded-lg block mt-3 w-full'>Save</button>

            </form>

            {
                params.id && (
                    <button className='bg-red-500 p-3 mt-3 rounded-md' onClick={() => {

                       const acented = window.confirm('Estas seguro?')
                       if (acented) {
                        deleteAlumno(params.id)
                        toast.success('Alumno eliminado con exito')
                        navigate('/alumnos')
                       }
                    }}>Delete</button>
                )
            }


        </div>
    )
    
}