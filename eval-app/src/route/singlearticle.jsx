import TitlePage from "../components/UI/TitlePage";
import ProductsGrid from "../components/PostGrid";
import Header from '../components/Header';
import { useState, useEffect } from "react";


export default function Root() {
  const [dataa, setProducts] = useState([])

  useEffect(() => {
    fetch("https://freefakeapi.io/api/")
      .then(res => 
        res.json()
      )
      .then(data => {
        console.log(data, "DATA");
        setProducts(data);
      })
      .catch(err => console.log(err))
  }, []);
    return (
      <>
      <Header/>

      <TitlePage
        title='news'
      />
         <ProductsGrid posts={dataa} /> 
      </>
    );
  }