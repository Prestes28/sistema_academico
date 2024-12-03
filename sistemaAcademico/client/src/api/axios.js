import axios from 'axios';

// Crear una instancia de Axios
const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/', // Reemplaza con la URL base de tu API
});

// Interceptar solicitudes para incluir el token
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
        if (token) {
            config.headers.Authorization = `Token ${token}`; // Agrega el token al encabezado
        }
        return config;
    },
    (error) => {
        return Promise.reject(error); // Manejo de errores en la solicitud
    }
);

export default API;
