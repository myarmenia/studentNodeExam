import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import ProductItemPage from "./Pages/ProductItemPage/ProductItemPage";
import ProductsFilterPage from "./Pages/ProductsFilterPage/ProductsFilterPage";
import SignInPgae from "./Pages/SignPage/SignInPgae";
import SignUpPage from "./Pages/SignPage/SignUpPage";
import CartPage from "./Pages/CartPage/CartPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import AccountPage from "./Pages/AccountPage/AccountPage";
import ContactPage from "./Pages/ContactPgae/ContactPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductItemPage />} />
        <Route path="/products" element={<ProductsFilterPage />} />

        <Route path="/user/signin" element={<SignInPgae />} />
        <Route path="/user/signup" element={<SignUpPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/checkout" element={<CheckoutPage />} />
        <Route path="/user/account" element={<AccountPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
