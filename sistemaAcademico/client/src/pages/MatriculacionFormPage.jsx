// src/pages/InscripcionFormPage.jsx
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllAlumnos } from '../api/Alumnos.api';
import { getAllMaterias } from '../api/Materias.api';
import { toast } from 'react-hot-toast';
import { createMatriculacion, deleteMatriculacion, getMatriculacion, updateMatriculacion } from '../api/Matriculacion.api';

export function MatriculacionFormPage() {
  const { register, handleSubmit, setValue, formState:{errors} } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  // Estados para almacenar las listas de alumnos y materias
  const [alumnos, setAlumnos] = useState([]);
  const [materias, setMaterias] = useState([]);

  const onSubmit = async (data) => {
    try {
        const matriculacionData = {
            alumno: data.alumno_id, // Asegúrate de que estos coincidan con Django
            materia: data.materia_id,}

      if (id) {
        await updateMatriculacion(id, matriculacionData);
        toast.success('Matriculacion Actualizada con exito')
        
      } else {
        await createMatriculacion(matriculacionData);
        toast.success('Matriculacion Creada con exito')
      }
      navigate("/matriculaciones");
    } catch (error) {
        if (error.response && error.response.status === 400) {
            alert(error.response.data.detail || 'Error al crear la inscripcion'); // Muestra "No hay más cupos disponibles para esta materia."
        } else {
      console.error("Error al crear o actualizar la inscripción", error);
      console.log(error.response?.data);}
    }
  };

  // Función para cargar alumnos y materias al montar el componente
  useEffect(() => {
    const loadAlumnosAndMaterias = async () => {
      const alumnosResponse = await getAllAlumnos();
      const materiasResponse = await getAllMaterias();
      setAlumnos(alumnosResponse.data);
      setMaterias(materiasResponse.data);
    };
    
    loadAlumnosAndMaterias();
    if (id) {
        // Cargar la matriculación específica para edición
        const loadMatriculacion = async () => {
          const response = await getMatriculacion(id);
          setValue("alumno_id", response.data.alumno_id);
          setValue("materia_id", response.data.materia_id);
        };
        loadMatriculacion();
      }
    }, [id, setValue]);
    
 
  return (
    <div className="max-w-90 mx-auto justify-center">
      <h2 className="font-bold text-3x1 mb- mx-3">{id ? "Editar Inscripción" : "Crear Inscripción"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-bold text-3x1 mb- mx-3">Alumno:</label>
          <select className='bg-zinc-700 p-3 rounded- block w-full mb-3' {...register("alumno_id", { required: true })}>
            <option value="">Seleccione un alumno</option>
            {alumnos.map(alumno => (
              <option key={alumno.id} value={alumno.id}>
                {alumno.nombre} {/* Cambia 'nombre' por el campo de nombre real */}
              </option>
            ))}
          </select>
          {errors.alumno_id && <span className='text-red-500 text-lg' >Este campo es requerido</span>}
        </div>
        
        <div>
          <label className="font-bold text-3x1 mb- mx-3">Materia:</label>
          <select className='bg-zinc-700 p-3 rounded- block w-full mb-3' {...register("materia_id", { required: true })}>
            <option value="">Seleccione una materia</option>
            {materias.map(materia => (
              <option key={materia.id} value={materia.id}>
                {materia.nombre} {/* Cambia 'nombre' por el campo de nombre real */}
              </option>
            ))}
          </select>
          {errors.materia_id && <span className='text-red-500 text-lg'>Este campo es requerido</span>}
        </div>
       
        <button className='bg-indigo-500 p-3 rounded-lg block mt-3 w-full' type="submit">{id ? "Actualizar" : "Crear"}</button>  
      </form>
       {
        id && (
          <button className='bg-red-500 p-3 mt-3 rounded-md' onClick={() => {

            const acented = window.confirm('Estas seguro?')
            if (acented) {
             deleteMatriculacion(id)
             toast.success('Matriculacion eliminada con exito')
             navigate('/matriculaciones')
            }
         }}>Borrar</button>
        )
       }
    </div>
  );
}

export default MatriculacionFormPage;
