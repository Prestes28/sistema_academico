import axios from 'axios'
import API from "./axios"

export const getAllMatriculaciones = () =>{
   return API.get('/inscripciones/inscribir/matriculacion/')
}

export const getMatriculacion = (id) =>{
   return API.get("/inscripciones/inscribir/matriculacion/"+ id + "/")
}

export const createMatriculacion = (matriculacion) =>{
   return API.post("/inscripciones/inscribir/matriculacion/", matriculacion)
}

export const deleteMatriculacion = (id) =>{
   return API.delete("/inscripciones/inscribir/matriculacion/"+ id + "/")
}

export const updateMatriculacion = (id, matriculacion) =>{
   return API.put("http://localhost:8000/inscripciones/inscribir/matriculacion/"+ id + "/", matriculacion)
}