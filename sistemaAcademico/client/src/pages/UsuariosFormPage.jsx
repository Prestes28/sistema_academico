import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token-auth/', {
                username,
                password,
            });
            const { token } = response.data;
            localStorage.setItem('token', token);
            setError('');
            navigate('/tabla');
            window.location.reload();
            toast.success("Inicio de sesión exitoso")
        } catch (err) {
            setError('Credenciales inválidas');
        }
    };

    return (
        <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-black font-semibold mb-2"
          >
            Usuario
          </label>
          <input
            type="text"
            id="username"
            placeholder="Ingrese su usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-black font-semibold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Iniciar Sesión
        </button>
        {error && (
          <p className="mt-4 text-center text-red-500 font-medium">{error}</p>
        )}
       
       <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
                ¿No tienes una cuenta?{" "}
                <Link to="/registro" className="text-indigo-500 hover:text-indigo-700 font-semibold">
                    Regístrate aquí
                </Link>
            </p>
        </div>

    {error && <p className="mt-4 text-center text-red-500 font-medium">{error}</p>}
      </form>
      
    );
};

export default Login;
