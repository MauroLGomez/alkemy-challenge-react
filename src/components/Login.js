function Login() {

   const submitHandler = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
   }

   return(
      <>
      <h2>Formulario De Login</h2>
      <form onSubmit={submitHandler}>
         <label>
            <span>Correo Electrónico:</span> <br/>
            <input type="email" name="email"/>
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