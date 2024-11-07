import axios from 'axios'
export const getAllMatriculaciones = () =>{
   return axios.get('http://127.0.0.1:8000/inscripciones/inscribir/matriculacion/')
}