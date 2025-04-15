import MainPage from "./pages/MainPage";
import FavouritesPage from "./pages/FavouritesPage";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;
