import axios from 'axios'
import API from "./axios"

export const getAllMaterias = () =>{
   return API.get('/materias/api/v1/materia/')
}

export const getMateria = (id) =>{
   return API.get("/materias/api/v1/materia/"+ id + "/")
}

export const createMateria = (materia) =>{
   return API.post('/materias/api/v1/materia/', materia)
}

export const deleteMateria = (id) =>{
   return API.delete("/materias/api/v1/materia/"+ id + "/")
}

export const updateMateria = (id, materia) =>{
   return API.put("/materias/api/v1/materia/"+ id + "/", materia)
}