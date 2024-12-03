import axios from 'axios'
import API from "./axios"

export const getAllMatriculaciones = () =>{
   return API.get('/inscripciones/inscribir/matriculacion/')
}

export const getMatriculacion = (id) =>{
   return API.get("/inscripciones/inscribir/matriculacion/"+ id + "/")
}

export const createMatriculacion = (matriculacion) =>{
   return axios.post("http://localhost:8000/inscripciones/inscribir/matriculacion/", matriculacion)
}

export const deleteMatriculacion = (id) =>{
   return axios.delete("http://localhost:8000/inscripciones/inscribir/matriculacion/"+ id + "/")
}

export const updateMatriculacion = (id, matriculacion) =>{
   return axios.put("http://localhost:8000/inscripciones/inscribir/matriculacion/"+ id + "/", matriculacion)
}