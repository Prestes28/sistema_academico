
import API from "./axios"

export const getProgramas = () => { 
    return API.get('programas/');}

export const createPrograma = async (data) =>{
   return  API.post('programas/', data);
} 
export const updatePrograma = (id, data) =>{
  return  API.put(`programas/${id}/`, data);
} 
export const deletePrograma = (id) => {
    return API.delete(`programas/${id}/`);
}