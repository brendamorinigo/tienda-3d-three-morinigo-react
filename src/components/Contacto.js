import React from "react";

function Contacto() {
return(
    <div className="form">
    <div className="mb-3">
        <div className="container-input">
        <label for="correo-input">Ingrese su correo</label>
        <input id="correo-input" type="email"></input>
        </div>
        <div className="container-input">
        <label for="nombre-input">Ingrese su nombre</label>
        <input id="nombre-input"></input>
        </div>
        <div>
            <h5>Dejanos tu comentario</h5>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
    </div>
)
}

export default Contacto;