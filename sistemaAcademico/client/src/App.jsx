import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AlumnosPage } from "./pages/AlumnosPage";
import { AlumnosFormPage } from "./pages/AlumnosFormPage";
import { MateriasPage } from "./pages/MateriasPage";
import { MateriasFormPage } from "./pages/MateriasFormPage";
import { Navigation } from "./components/Navigation";
import { MatriculacionPage } from "./pages/MatriculacionPage";
import { MatriculacionFormPage } from "./pages/MatriculacionFormPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/alumnos" />} />
          <Route path="/alumnos" element={<AlumnosPage />} />
          <Route path="/alumnos-create" element={<AlumnosFormPage />} />
          <Route path="/alumnos/:id" element={<AlumnosFormPage />} />
          <Route path="/materias" element={<MateriasPage />} />
          <Route path="/materias-create" element={<MateriasFormPage />} />
          <Route path="/materias/:id" element={<MateriasFormPage />} />
          <Route path="/matriculaciones" element={<MatriculacionPage />} />
          <Route
            path="/matriculaciones-create"
            element={<MatriculacionFormPage />}
          />
          <Route
            path="/matriculaciones/:id"
            element={<MatriculacionFormPage />}
          />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
