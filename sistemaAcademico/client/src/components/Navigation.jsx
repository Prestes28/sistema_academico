import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Asegúrate de tener un contexto de autenticación

export function Navigation() {
    const { logout } = useAuth(); // Obtén la función de logout del contexto
    const navigate = useNavigate(); // Hook para redirigir

    const handleLogout = () => {
        logout(); // Llama a la función de logout
        navigate('/login'); // Redirige al usuario a la página de inicio de sesión
    };

    return (
        <div>
            <div className="flex justify-center py-3">
                <Link to="/tabla"><h1 className="font-bold text-3xl mx-3">Tabla</h1></Link>
                <Link to="/alumnos"><h1 className="font-bold text-3xl mx-3">Alumnos</h1></Link>
                <Link to="/materias"><h1 className="font-bold text-3xl mx-3">Materias</h1></Link>
                <Link to="/matriculaciones"><h1 className="font-bold text-3xl mx-3">Matriculaciones</h1></Link>
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
                    {/* Botón de Logout */}
                    <button
                        className="bg-red-500 px-3 py-2 rounded-lg m-3 hover:bg-red-700 text-white"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </div>
    );
}
