import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { AlumnosPage } from "./pages/AlumnosPage";
import { AlumnosFormPage } from "./pages/AlumnosFormPage";
import { MateriasPage } from "./pages/MateriasPage";
import { MateriasFormPage } from "./pages/MateriasFormPage";
import { Navigation } from "./components/Navigation";


function App() {
  return(
    <BrowserRouter>
      <Navigation/>

      <Routes>
        <Route path="/" element={<Navigate to="/alumnos" />}/>
        <Route path="/alumnos" element={<AlumnosPage />}/>
        <Route path="/alumnos-create" element={< AlumnosFormPage/>}/>
        <Route path="/materias" element={<MateriasPage/>}/>
        <Route path="/materias-create" element={< MateriasFormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App