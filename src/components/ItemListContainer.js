import React, { useEffect, useState } from "react";
import Itemlist from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import Presentacion from "./HeaderPresentacion";
import { useParams } from "react-router-dom";
import { datab } from "../firebase/config";

const ItemListContainer = () => {
  const [lista, setlista] = useState([]);
  const [loading, setLoading] = useState(false);

  const { parametro } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionFs = collection(datab, "Productos");
    const filterCategory= parametro ? query(collectionFs, where('categoria', '==', parametro)) : collectionFs;

    getDocs(filterCategory)
    .then(respuesta => {
      const articulos= respuesta.docs.map((item)=> ({id:item.id, ...item.data()}))
      setlista(articulos)
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [parametro]);

  return (
    <div>
      <div className="container-pres">
        <Presentacion />
      </div>
      {loading ? <p>Loading...</p> : ""}
      <Itemlist lista={lista} />
    </div>
  );
};
export default ItemListContainer;
