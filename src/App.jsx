import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Gift from "./pages/Gift";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import Stores from "./pages/Stores";
import KnowMore from "./pages/KnowMore";
import SignupPage from "./pages/SignupPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="w-[100vw]">
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route path="/store" element={<Stores />} />
          <Route path="/about" element={<KnowMore />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<></>} /> 
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
