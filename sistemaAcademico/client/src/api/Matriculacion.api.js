import axios from 'axios'
export const getAllMatriculaciones = () =>{
   return axios.get('http://localhost:8000/inscripciones/inscribir/matriculacion/')
}

export const getMatriculacion = (id) =>{
   return axios.get("http://localhost:8000/inscripciones/inscribir/matriculacion/"+ id + "/")
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