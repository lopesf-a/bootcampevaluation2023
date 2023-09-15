import TitlePage from "../components/UI/TitlePage";
import ProductsGrid from "../components/PostGrid";
import Header from '../components/Header';
import Froms from '../components/UI/Form';
// import { useState, useEffect } from "react";


export default function Root() {
 

  
    return (
      <>
      <Header/>

      <TitlePage
        title='contact '
      />
       <Froms/>
      </>
    );
  
}