import React, { useEffect } from "react";

import { Box, Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Product from "./Product";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Link } from "react-router-dom";

export default function Cart({ getCart, cart, deleteCart }) {
  useEffect(() => {
    getCart();
  }, []);

  const totalPrice = cart.reduce((sum, product) => sum + product.totalPrice, 0);

  return (
    <div>
      <Box className="cart">
        <Box className="cart__header">
          <Typography>
            <ShoppingCartOutlinedIcon fontSize="20px" />
            Корзина
          </Typography>

          <Button onClick={deleteCart} variant="contained">
            <DeleteOutlinedIcon />
            Очистить корзину
          </Button>
        </Box>
        <Box className="cart-body">
          {cart.map((product) => (
            <Product cart={cart} getCart={getCart} key={product.id} product={product} />
          ))}
        </Box>
        <Box className="cart-footer">
          <Box className="cart-footer__inner">
            <Typography>
              Всего пицц: <span>{cart.length} шт.</span>
            </Typography>
            <Link style={{ textDecoration: "none" }} to="/">
              <button className="outlined-btn">
                <KeyboardDoubleArrowLeftIcon className="arrow-left" />
                Вернуться назад
              </button>
            </Link>
          </Box>
          <Box className="cart-footer__inner">
            <Typography>
              Сумма заказа: <span>{totalPrice} сом</span>
            </Typography>
            <button className="contained-btn">Оплатить сейчас</button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
