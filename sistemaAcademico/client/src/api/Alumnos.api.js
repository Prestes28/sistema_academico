import axios from 'axios'

export const getAllAlumnos = () =>{
   return axios.get('http://localhost:8000/alumnos/api/v1/alumno/')
}

export const getAlumno = (id) =>{
   return axios.get("http://localhost:8000/alumnos/api/v1/alumno/"+ id + "/")
}

export const createAlumno = (alumno) =>{
   return axios.post('http://localhost:8000/alumnos/api/v1/alumno/', alumno)
}

export const deleteAlumno = (id) =>{
   return axios.delete("http://localhost:8000/alumnos/api/v1/alumno/"+ id + "/")
}

export const updateAlumno = (id, alumno) =>{
   return axios.put("http://localhost:8000/alumnos/api/v1/alumno/"+ id + "/", alumno)
}