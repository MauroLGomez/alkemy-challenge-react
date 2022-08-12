import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

function Login() {

   const Navigate = useNavigate();

   const submitHandler = e => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      console.log(regexEmail.test(email));
   
      if (email === "" || password === "") {
         swAlert(
            <h2>Los campos no pueden estar vacíos</h2>
         );
      
      }

      if (email !== "" && !regexEmail.test(email)) {
         swAlert(
            <h2>Debes escribir un correo valido</h2>
         );
      
      }

      if (password !== "react") {
         swAlert(
            <h2>Contraseña Incorrecta</h2>
         );
      }
     
      axios
      .post("http://challenge-react.alkemy.org",  {email , password})
      .then(res => {
         swAlert(
            <h2>Credenciales Validas!</h2>
         );
         const tokenRecibido = res.data.token;
         localStorage.setItem("token", tokenRecibido);
         Navigate("/listado");
      })
   }

   return(
      <>
      <h2>Formulario De Login</h2>
      <form onSubmit={submitHandler}>
         <label>
            <span>Correo Electrónico:</span> <br/>
            <input type="text" name="email"/>
         </label>
         <br/>
         <label>
            <span>Contraseña:</span> <br/>
            <input type="password" name="password"/>
            <br/>
         </label>
         <button type="submit">Ingresar</button>
      </form>
      </>
   )     
}


export default Login;