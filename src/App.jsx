import { useState } from "react";
import {Content} from "./components/hero/content";
import { Header } from "./components/navBar/header";

export default function App() {
  const [cantProduct,setCantProduct]=useState(0)
  const [products,setProducts]=useState([]);
  console.log(products);
  console.log(cantProduct);
  return (
    <>
      <Header products={products} setProducts={setProducts} setCantProduct={setCantProduct} cantProduct={cantProduct} />
      <Content  cantProduct={cantProduct} setCantProduct={setCantProduct} products={products} setProducts={setProducts}/>
    </>
  );
}
