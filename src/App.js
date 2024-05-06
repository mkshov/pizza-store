import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/header/Header";
import AddForm from "./pages/addForm/AddForm";
import axios from "axios";
import Details from "./pages/details/Details";
import EditForm from "./pages/editForm/EditForm";
import Cart from "./pages/cart/Cart";

export default function App() {
  const API = "http://localhost:8000/pizzas";
  const [pizzas, setPizzas] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);
  const [cart, setCart] = useState([]);

  // ! create
  function createPizza(pizza) {
    axios.post(API, pizza);
    getPizzas();
  }

  // ! read
  async function getPizzas() {
    let result = await axios.get(API);
    setPizzas(result.data);
  }

  // ! delete
  async function deletePizza(id) {
    await axios.delete(`${API}/${id}`);
    getPizzas();
  }

  // ! details and update
  async function getOneProduct(id) {
    let result = await axios.get(`${API}/${id}`);
    setOneProduct(result.data);
  }

  // ! update
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }

  // ! to Local Storage
  function toLocalStorage(sentProduct) {
    let from = JSON.parse(localStorage.getItem("cart")) || [];
    let isInCart = from.some((item) => item.id == sentProduct.id);

    if (isInCart) {
      alert(`В корзине уже есть ${sentProduct.title}. Увеличить кол-во можно в корзине.`);
      return;
    }

    let to = [...from, sentProduct];
    localStorage.setItem("cart", JSON.stringify(to));
  }

  function getCart() {
    let from = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(from);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage pizzas={pizzas} getPizzas={getPizzas} />} />
        <Route path="/add-form" element={<AddForm createPizza={createPizza} />} />
        <Route
          path="/details/:id"
          element={
            <Details
              toLocalStorage={toLocalStorage}
              oneProduct={oneProduct}
              getOneProduct={getOneProduct}
              deletePizza={deletePizza}
              getPizzas={getPizzas}
            />
          }
        />
        <Route path="/edit-form/:id" element={<EditForm oneProduct={oneProduct} getOneProduct={getOneProduct} updateProduct={updateProduct} />} />
        <Route path="cart" element={<Cart getCart={getCart} cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}
