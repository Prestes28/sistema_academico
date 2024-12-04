import axios from 'axios'
import API from "./axios"
export const getAllAlumnos = () =>{
   return API.get('/alumnos/api/v1/alumno/')
}

export const getAlumno = (id) =>{
   return API.get("/alumnos/api/v1/alumno/"+ id + "/")
}

export const createAlumno = (alumno) =>{
   return API.post('/alumnos/api/v1/alumno/', alumno)
}

export const deleteAlumno = (id) =>{
   return API.delete("/alumnos/api/v1/alumno/"+ id + "/")
}

export const updateAlumno = (id, alumno) =>{
   return API.put("/alumnos/api/v1/alumno/"+ id + "/", alumno)
}
