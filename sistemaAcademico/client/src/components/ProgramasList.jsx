import React, { useState, useEffect } from "react";
import { getProgramas } from "../api/Programas.api";

export function ProgramasList() {
    const [programas, setProgramas] = useState([]);

    useEffect(() => {
        loadProgramas();
    }, []);

    const loadProgramas = async () => {
        try {
            const { data } = await getProgramas();
            setProgramas(data);
        } catch (error) {
            console.error("Error fetching programs:", error);
        }
    };

    return (
        <div>
            <h2>Programas Asociados</h2>
            <ul>
                {programas.map((programa) => (
                    <li key={programa.id}>
                        <a href={programa.url} target="_blank" rel="noopener noreferrer">
                            {programa.nombre}
                        </a> - {programa.estado ? "Activo" : "Inactivo"}
                    </li>
                ))}
            </ul>
        </div>
    );
}
