import { Route, Routes } from "react-router-dom";
import AppHeader from "./components/organisms/app-header/AppHeader";
import HomePage from "./pages/home/Home";

export default function App() {
  return (
    <main id="app-body">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}
