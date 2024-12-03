import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado para almacenar la información del usuario
    const [loading, setLoading] = useState(true); // Estado para verificar la carga inicial

    // Maneja el inicio de sesión
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token); // Guarda el token en el almacenamiento local
    };

    // Maneja el cierre de sesión
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token'); // Elimina el token del almacenamiento local
    };

    // Comprueba si hay un token válido al cargar la aplicación
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Aquí podrías validar el token con el backend si es necesario
            setUser({ token }); // Asigna el token al estado del usuario
        }
        setLoading(false); // Termina la carga inicial
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto en cualquier componente
export const useAuth = () => {
    return useContext(AuthContext);
};
