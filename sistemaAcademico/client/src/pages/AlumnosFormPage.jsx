import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { createAlumno, deleteAlumno, updateAlumno, getAlumno } from '../api/Alumnos.api';
import {useNavigate, useParams} from 'react-router-dom'
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
        } else {
            await createAlumno(data)
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
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre" {...register("nombre",{required:true})}/>
                {errors.nombre && <span>Este campo es requerido</span>}
                <input type="text" placeholder="Apellido" {...register("apellido",{required:true})}/>
                {errors.apellido && <span>Este campo es requerido</span>}
                <input type="date" placeholder="Fecha de Nacimiento" {...register("fecha_nac")} />
                <button>Save</button>

            </form>

            {
                params.id && (
                    <button onClick={() => {

                       const acented = window.confirm('Estas seguro?')
                       if (acented) {
                        deleteAlumno(params.id)
                        navigate('/alumnos')
                       }
                    }}>Delete</button>
                )
            }


        </div>
    )
    
}