import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc} from "firebase/firestore";
import { datab } from "../firebase/config";

export default function CheckOut() {
  const { cart, total } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
    const formData= collection (datab, "Pedidos");

    addDoc(formData,pedido)
    .then((doc)=>{
        console.log(doc.id)
    })
  }

  return (
    <div>
      <h3>Finalizar compra</h3>

      <form onSubmit={submitForm}>
        <div className="form-group">
          <label for="enteredEmail">Email</label>
          <input
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
