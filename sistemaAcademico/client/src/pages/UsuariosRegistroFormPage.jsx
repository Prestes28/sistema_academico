import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/registro/', {
                username,
                password,
            });
            setMessage(response.data.message);
        } catch (error) {
            if (error.response && error.response.data.error) {
                setMessage(error.response.data.error);
            } else {
                setMessage('Error al registrar usuario.');
            }
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Registro
        </h2>
        <form onSubmit={handleRegister}>
            <div className="mb-4">
                <label
                    htmlFor="username"
                    className="block text-black  font-semibold mb-2"
                >
                    Usuario
                </label>
                <input
                    type="text"
                    id="username"
                    placeholder="Ingrese su usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="text-gray-700 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    required
                    className="text-gray-700 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
                Registrar
            </button>

            <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login" className="text-indigo-500 hover:text-indigo-700 font-semibold">
                        Inicia sesion aqui.
                    </Link>
                </p>
            </div>

        </form>
        {message && (
            <p className="mt-4 text-center text-green-500 font-medium">{message}</p>
        )}
    </div>
    
    );
};

export default Register;
