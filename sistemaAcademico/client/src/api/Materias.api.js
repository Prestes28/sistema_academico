import axios from 'axios'
export const getAllMaterias = () =>{
   return axios.get('http://localhost:8000/materias/api/v1/materia/')
}

export const getMateria = (id) =>{
   return axios.get("http://localhost:8000/materias/api/v1/materia/"+ id + "/")
}

export const createMateria = (materia) =>{
   return axios.post('http://localhost:8000/materias/api/v1/materia/', materia)
}

export const deleteMateria = (id) =>{
   return axios.delete("http://localhost:8000/materias/api/v1/materia/"+ id + "/")
}

export const updateMateria = (id, materia) =>{
   return axios.put("http://localhost:8000/materias/api/v1/materia/"+ id + "/", materia)
}