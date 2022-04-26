import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { datab } from "../firebase/config";
import { Link, Navigate } from "react-router-dom";

export default function CheckOut() {
  const { cart, total, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderNumber, setOrderNumber] = useState(null);

  /* FUNCIONES DE VALUE */
  function enteredName(e) {
    setName(e.target.value);
  }
  function enteredPhone(e) {
    setPhone(e.target.value);
  }
  function enteredEmail(e) {
    setEmail(e.target.value);
  }
  /* FUNCION OBTENER DATOS */
  function submitForm(e) {
    e.preventDefault();
    const pedido = {
      items: cart,
      total: total(),
      cliente: {
        nombre: name,
        correo: email,
        telefono: phone,
      },
    };
    const formData = collection(datab, "Pedidos");

    /* MODIFICAR EL STOCK */
    cart.forEach((element) => {
      const artStock = doc(datab, "Productos", element.id);

      getDoc(artStock).then((res) => {
        updateDoc(artStock, { stock: res.data().stock - element.cantidad });
      });
    });

    addDoc(formData, pedido).then((doc) => {
      console.log(doc.id);
      setOrderNumber(doc.id);
      clearCart();
    });
  }
  /* Funcion para generar num. de orden */
  if (orderNumber) {
    return (
      <div className="container-order">
        <h2>Pedido realizado con exito </h2>
        <h3>Su numero de orden es:{orderNumber}</h3>
        <p>En breve te enviaremos novedades de tu pedido. Muchas gracias</p>
        
        <div className="btn-return-cart">
          <Link to="/" className="btn btn-primary">
            Volver a inicio
          </Link>
        </div>
      </div>
    );
  }
  /* Redirigir */
  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="check-out">
      <h2 className="h3-check">Finalizar compra</h2>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label for="enteredEmail">Email</label>
          <input
            required
            value={email}
            type="text"
            className="form-control"
            id="enteredEmail"
            aria-describedby="emailHelp"
            placeholder="Ingrese su Email..."
            onChange={enteredEmail}
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label for="enteredName">Nombre y Apellido</label>
          <input
            required
            value={name}
            type="text"
            className="form-control"
            id="enteredName"
            placeholder="Ingrese su nombre y apellido..."
            onChange={enteredName}
          ></input>
        </div>

        <div className="form-group">
          <label for="enteredPhone">Telefono</label>
          <input
            required
            value={phone}
            type="text"
            className="form-control"
            id="enteredPhone"
            placeholder="Ingrese su numero de telefono..."
            onChange={enteredPhone}
          ></input>
        </div>

        <div className="container-btn">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
