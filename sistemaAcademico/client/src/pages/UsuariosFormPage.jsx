import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
            alert('Inicio de sesión exitoso');
        } catch (err) {
            setError('Credenciales inválidas');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Iniciar sesión</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;
