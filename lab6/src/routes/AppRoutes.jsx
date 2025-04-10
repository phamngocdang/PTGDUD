import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Integrations from "../pages/Integrations";
import Messages from "../pages/Messsages";
import Projects from "../pages/Projects";
import Teams from "../pages/Teams";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
      </Route>
    </Routes>
  );
}
