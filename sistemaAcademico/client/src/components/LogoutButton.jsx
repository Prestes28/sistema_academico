import React from 'react';
import { useAuth } from '../api/logout';

const LogoutButton = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        // Opcional: redirige al usuario
        window.location.href = '/login';
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
