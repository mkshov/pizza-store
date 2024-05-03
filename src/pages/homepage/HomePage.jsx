import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import banner1 from "../../images/image 10.png";
import banner2 from "../../images/image 13.png";
import banner3 from "../../images/image 15.png";
import banner4 from "../../images/image 12.png";
import banner5 from "../../images/image 16.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

export default function HomePage({ pizzas, getPizzas }) {
  const [selectCategory, setSelectCategory] = useState("все");

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="container">
      <Box className="banner-parent">
        <Box className="banner-inner bn-1">
          <img src={banner1} alt="banner 1" />
          <img src={banner2} alt="banner 2" />
        </Box>
        <Box className="banner-inner bn-2">
          <img src={banner3} alt="banner 3" />
          <img src={banner4} alt="banner 4" />
          <img src={banner5} alt="banner 5" />
        </Box>
      </Box>

      <Box className="hp-btns">
        <button
          onClick={() => setSelectCategory("все")}
          style={{ background: selectCategory === "все" ? "#282828" : "#f9f9f9", color: selectCategory === "все" ? "white" : "#2c2c2c" }}
        >
          Все
        </button>
        <Link to="/add-form">
          <button
            onClick={() => setSelectCategory("мясо")}
            style={{ background: selectCategory === "мясо" ? "#282828" : "#f9f9f9", color: selectCategory === "мясо" ? "white" : "#2c2c2c" }}
          >
            Добавить продукт
          </button>
        </Link>
        <button
          onClick={() => setSelectCategory("веган")}
          style={{ background: selectCategory === "веган" ? "#282828" : "#f9f9f9", color: selectCategory === "веган" ? "white" : "#2c2c2c" }}
        >
          Вегетарианские
        </button>
        <button
          onClick={() => setSelectCategory("гриль")}
          style={{ background: selectCategory === "гриль" ? "#282828" : "#f9f9f9", color: selectCategory === "гриль" ? "white" : "#2c2c2c" }}
        >
          Гриль
        </button>
        <button
          onClick={() => setSelectCategory("острые")}
          style={{ background: selectCategory === "острые" ? "#282828" : "#f9f9f9", color: selectCategory === "острые" ? "white" : "#2c2c2c" }}
        >
          Острые
        </button>
      </Box>
      <Box>
        <Typography className="hp-h1">Все пиццы</Typography>
        <Box className="card-parent">
          {pizzas.map((pizza) => (
            <Card key={pizza.id} product={pizza} />
          ))}
        </Box>
      </Box>
    </div>
  );
}
