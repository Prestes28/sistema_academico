import React, { useState } from "react";
import { createPrograma } from "../api/Programas.api";

export function ProgramaForm() {
    const [nombre, setNombre] = useState("");
    const [estado, setEstado] = useState(false);
    const [url, setUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPrograma({ nombre, estado, url });
            alert("Programa creado!");
        } catch (error) {
            console.error("Error creating program:", error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Nombre del programa"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="border p-2 rounded w-full"
            />
            <input
                type="url"
                placeholder="URL del programa"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="border p-2 rounded w-full"
            />
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={estado}
                    onChange={(e) => setEstado(e.target.checked)}
                />
                <span>Activo</span>
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Guardar
            </button>
        </form>
    );
}
