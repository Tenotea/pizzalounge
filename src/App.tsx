import { Route, Routes } from "react-router-dom";
import AppHeader from "./components/organisms/app-header/AppHeader";
import HomePage from "./pages/home-page/HomePage";
import PizzasPage from "./pages/pizzas-page/Pizzas";

export default function App() {
  return (
    <main id="app-body">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizzas" element={<PizzasPage />} />
      </Routes>
    </main>
  );
}
