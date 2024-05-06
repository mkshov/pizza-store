import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditForm({ oneProduct, getOneProduct, updateProduct }) {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setUrl(oneProduct.url);
      setTitle(oneProduct.title);
      setInfo(oneProduct.info);
      setPrice(oneProduct.price);
    }
  }, [oneProduct]);

  const handleClick = (e) => {
    e.preventDefault();
    let editedProduct = {
      url,
      title,
      info,
      price,
    };
    if (url.trim() && title.trim() && info.trim() && price.trim()) {
      updateProduct(id, editedProduct);
      alert("Продукт добавлен!");
      navigate(`/details/${id}`);
      setUrl("");
      setTitle("");
      setInfo("");
      setPrice("");
    } else {
      alert("Заполните все поля!");
    }
  };

  return (
    <div className="form">
      <form>
        <h1>Форма редактирования</h1>
        <input onChange={(e) => setUrl(e.target.value)} value={url} type="text" placeholder="Вставьте ссылку..." />
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Вставьте название" />
        <input onChange={(e) => setInfo(e.target.value)} value={info} type="text" placeholder="Вставьте описание..." />
        <input onChange={(e) => setPrice(e.target.value)} value={price} type="text" placeholder="Цена..." />
        <button onClick={(e) => handleClick(e)}>Редактировать продукт</button>
      </form>
    </div>
  );
}
