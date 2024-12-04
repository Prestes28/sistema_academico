import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navigation() {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (loading) return <div>Cargando...</div>; // Muestra un mensaje mientras se carga el estado de autenticación

    return (
        <div>
            <div className="flex justify-between py-3 px-4 bg-gray-800 text-white">
                <div className="flex space-x-6">
                    <Link to="/tabla"><h1 className="font-bold text-3xl">Tabla</h1></Link>
                    <Link to="/alumnos"><h1 className="font-bold text-3xl">Alumnos</h1></Link>
                    <Link to="/materias"><h1 className="font-bold text-3xl">Materias</h1></Link>
                    <Link to="/matriculaciones"><h1 className="font-bold text-3xl">Matriculaciones</h1></Link>
                </div>

                <div className="flex items-center space-x-4">
                    {user ? (
                        <div className="flex items-center space-x-2">
                            <h3 className="text-sm">{user.username}</h3>
                            <div className="w-3 h-3 rounded-full bg-green-500" title="Usuario activo"></div>
                        </div>
                    ) : (
                        <span className="text-sm">No autenticado</span>
                    )}
                    {user ? (
                         <button
                         className="bg-red-500 px-3 py-2 rounded-lg m-3 hover:bg-red-700 text-white"
                         onClick={handleLogout}
                     >
                         Cerrar Sesion
                     </button>
                    ):(
                        <button
                        className="bg-green-500 px-3 py-2 rounded-lg m-3 hover:bg-green-700 text-white"
                        onClick={handleLogout}
                    >
                        Iniciar Sesion
                    </button>
                    )}
                   
                </div>
            </div>
            <div>
                <ul className="flex justify-center px-3 m-3">
                    <button className="bg-indigo-500 px-3 py-2 rounded-lg m-3 hover:bg-indigo-700">
                        <Link to="/materias-create">Crear Materia</Link>
                    </button>
                    <button className="bg-indigo-500 px-3 py-2 rounded-lg m-3 hover:bg-indigo-700">
                        <Link to="/alumnos-create">Crear Alumno</Link>
                    </button>
                    <button className="bg-indigo-500 px-3 py-2 rounded-lg m-3 hover:bg-indigo-700">
                        <Link to="/matriculaciones-create">Crear Matriculación</Link>
                    </button>
                </ul>
            </div>
        </div>
    );
}
