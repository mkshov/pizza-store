import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/header/Header";
import AddForm from "./pages/addForm/AddForm";
import axios from "axios";
import Details from "./pages/details/Details";

export default function App() {
  const API = "http://localhost:8000/pizzas";
  const [pizzas, setPizzas] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

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

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage pizzas={pizzas} getPizzas={getPizzas} />} />
        <Route path="/add-form" element={<AddForm createPizza={createPizza} />} />
        <Route
          path="/details/:id"
          element={<Details oneProduct={oneProduct} getOneProduct={getOneProduct} deletePizza={deletePizza} getPizzas={getPizzas} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
