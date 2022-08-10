function Login() {

   const submitHandler = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   if (email === "") {
      console.log("Escribe un correo valido") 
         }
   else if (password === "") {
      console.log("Escribe una contraseña")
         } 
   }

   if (email !== "" && regexEmail.test(email)) {
      console.log("escribe un correo valido")
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