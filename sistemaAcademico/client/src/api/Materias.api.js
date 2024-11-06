import axios from 'axios'
export const getAllMaterias = () =>{
   return axios.get('http://localhost:8000/materias/api/v1/materia/')
}