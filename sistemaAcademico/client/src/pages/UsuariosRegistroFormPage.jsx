import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Registrar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
