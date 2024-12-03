import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { unparse } from "papaparse";


const ConsolidatedTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/tabla/api/consolidated-data/')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const exportToCSV = () => {
        const formattedData = data.map(row => ({
            "Alumno": row.alumno.nombre,
            "Apellido": row.alumno.apellido,
            "Materia": row.materia.nombre,
            "Cupos": row.materia.cupo,
            "Fecha de Inscripción": new Date(row.fecha_inscripcion).toLocaleDateString()
        }));
    
        const csv = unparse(formattedData);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
    
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "consolidated_data.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    if (loading) {
        return <div>Loading...</div>;
    }

    // Función para manejar el clic en una fila y buscar el matriculacionId
    const handleRowClick = (alumnoId, materiaId) => {
        axios.get(`http://127.0.0.1:8000/inscripciones/inscribir/matriculacion/?alumno=${alumnoId}&materia=${materiaId}`)
            .then((response) => {
                // Imprimir la respuesta para depurar
                console.log("Respuesta completa de la API:", response.data);  // Es un array de objetos
                
                // Buscar el objeto de matriculación que coincide con el alumnoId y materiaId
                const matriculacion = response.data.find(item => item.alumno === alumnoId && item.materia === materiaId);
                
                if (matriculacion) {
                    const matriculacionId = matriculacion.id;  // Accede al id de la matriculación
                    console.log("ID de matriculación:", matriculacionId);  // Verifica que el ID esté correcto
                    navigate(`/matriculaciones/${matriculacionId}`);  // Navega a la página con el ID
                } else {
                    console.error("No se encontró la matriculación para este alumno y materia.");
                }
            })
            .catch((error) => {
                console.error("Error fetching matriculacion:", error);
            });
    };
    

    return (
        <div>
        <Button variant="contained" color="primary" onClick={exportToCSV}>Exportar CSV</Button>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Alumno</TableCell>
                        <TableCell>Apellido</TableCell>
                        <TableCell>Materia</TableCell>
                        <TableCell>Cupo</TableCell>
                        <TableCell>Fecha de Inscripción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={index}
                            onClick={() => handleRowClick(row.alumno.id, row.materia.id)} // Usamos los IDs de alumno y materia
                            style={{ cursor: 'pointer' }} 
                        >
                            <TableCell>{row.alumno.nombre}</TableCell>
                            <TableCell>{row.alumno.apellido}</TableCell>
                            <TableCell>{row.materia.nombre}</TableCell>
                            <TableCell>{row.materia.cupo}</TableCell>
                            <TableCell>{new Date(row.fecha_inscripcion).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

export default ConsolidatedTable;
