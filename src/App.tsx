import "./scss/app.scss";

import { Home } from "./pages/Home.js";
import { Header } from "./components/header/Header";
import { NotFound } from "./pages/NotFound.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
