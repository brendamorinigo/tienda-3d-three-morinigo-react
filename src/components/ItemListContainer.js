import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { promesa } from "../mocks/FalseApi";
import Presentacion from "./HeaderPresentacion";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [lista, setlista] = useState([]);
  const [loading, setLoading] = useState(false);

  const { parametro } = useParams();

  useEffect(() => {
    setLoading(true);
    promesa
      .then((result) => {
        if (parametro) {
          setlista(
            result.filter((productos) => productos.categoria === parametro)
          );
        } else {
          setlista(result);
        }
      })
      .catch((bad) => console.log("error"))
      .finally(() => setLoading(false));
  }, [parametro]);

  return (
    <div>
      <div className="container-pres">
        <Presentacion />
      </div>
      {loading ? <p>Loading...</p> : ""}
      <ItemList lista={lista} />
    </div>
  );
};
export default ItemListContainer;
