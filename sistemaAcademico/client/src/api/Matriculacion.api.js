import axios from 'axios'
export const getAllMatriculaciones = () =>{
   return axios.get('http://127.0.0.1:8000/inscripciones/inscribir/matriculacion/')
}

export const getMatriculacion = (id) =>{
   return axios.get("http://localhost:8000/inscripciones/api/v1/matriculacion/"+ id + "/")
}

export const createMatriculacion = (matriculacion) =>{
   return axios.post("http://localhost:8000/inscripciones/api/v1/matriculacion/", matriculacion)
}

export const deleteMatriculacion = (id) =>{
   return axios.delete("http://localhost:8000/inscripciones/api/v1/matriculacion/"+ id + "/")
}

export const updateMatriculacion = (id, matriculacion) =>{
   return axios.put("http://localhost:8000/inscripciones/api/v1/matriculacion/"+ id + "/", matriculacion)
}