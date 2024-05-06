import React, { useEffect } from "react";

import { Box, Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import pizza from "../../images/image 7.png";

export default function Cart({ getCart, cart }) {
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <Box className="cart">
        <Box className="cart__header">
          <Typography>
            <ShoppingCartOutlinedIcon fontSize="20px" />
            Корзина
          </Typography>

          <Button variant="contained">
            <DeleteOutlinedIcon />
            Очистить корзину
          </Button>
        </Box>
        <Box className="cart-body">
          {cart.map((product) => (
            <Box className="cart-product">
              <Box className="cart-product__info">
                <img src={pizza} alt="pizza" />
                <Box>
                  <Typography>Сырный цыпленок</Typography>
                  <Typography>Lorem ipsum dolor sit amet.</Typography>
                </Box>
              </Box>
              <Box className="cart-product__quant">
                <button>-</button>
                <p>2</p>
                <button>+</button>
              </Box>

              <Typography>3000 сом</Typography>

              <Button>
                <DeleteOutlinedIcon />
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}
