// src/pages/InscripcionFormPage.jsx
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllAlumnos } from '../api/Alumnos.api';
import { getAllMaterias } from '../api/Materias.api';
import { createMatriculacion, getMatriculacion, updateMatriculacion } from '../api/Matriculacion.api';

export function MatriculacionFormPage() {
  const { register, handleSubmit, setValue } = useForm();
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
        alert("Inscripción actualizada con éxito");
      } else {
        await createMatriculacion(matriculacionData);
        alert("Inscripción creada con éxito");
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
    <div>
      <h2>{id ? "Editar Inscripción" : "Crear Inscripción"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Alumno:</label>
          <select {...register("alumno_id", { required: true })}>
            <option value="">Seleccione un alumno</option>
            {alumnos.map(alumno => (
              <option key={alumno.id} value={alumno.id}>
                {alumno.nombre} {/* Cambia 'nombre' por el campo de nombre real */}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Materia:</label>
          <select {...register("materia_id", { required: true })}>
            <option value="">Seleccione una materia</option>
            {materias.map(materia => (
              <option key={materia.id} value={materia.id}>
                {materia.nombre} {/* Cambia 'nombre' por el campo de nombre real */}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">{id ? "Actualizar" : "Crear"}</button>
      </form>
    </div>
  );
}

export default MatriculacionFormPage;
