import { Route, Routes } from "react-router-dom";
import MainLayout from "../../../../../../PTGDUD/BT/bttuan5/src/layouts/MainLayout";
import Dashboard from "../../../../../../PTGDUD/BT/bttuan5/src/pages/Dashboard";
import Analytics from "../../../../../../PTGDUD/BT/bttuan5/src/pages/Analytics";
import Integrations from "../../../../../../PTGDUD/BT/bttuan5/src/pages/Integrations";
import Messages from "../../../../../../PTGDUD/BT/bttuan5/src/pages/Messsages";
import Projects from "../../../../../../PTGDUD/BT/bttuan5/src/pages/Projects";
import Teams from "../../../../../../PTGDUD/BT/bttuan5/src/pages/Teams";


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
