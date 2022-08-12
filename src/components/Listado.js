import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Listado () {
   const Navigate = useNavigate();  

   useEffect(() => {
      const token = localStorage.getItem("token");
      if (token === null) {
         Navigate("/");
      }
   }, []);
   

   
   return(
      <h2>Soy el componente listado</h2>);
}

export default Listado;