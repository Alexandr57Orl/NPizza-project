import "./scss/app.scss";

import { Home } from "./pages/Home";
import { Header } from "./components/header/Header";
import { NotFound } from "./pages/NotFound";
import { Cart } from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { ContactForm } from "./components/Contact";

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
              <Route path="/contacts" element={<ContactForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
