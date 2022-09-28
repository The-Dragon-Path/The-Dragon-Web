export const LoginPage = () => {
  return (
    <div className="container d-flex justify-content-center">
        <div className="mt-5 rounded p-4 bg-light login">
            <div className="w-100 d-flex justify-content-center">
                <img className="w-75 my-3" src="https://raw.githubusercontent.com/JakeTeach/The-drago-path-logo/main/dragonpathlogo.png" alt="The Dragon Path Logo"></img>
            </div>
            <form action="" className="d-flex flex-column justify-content-center">
              <input type="email" autocomplete="email" placeholder="tu.email@ejemplo.me" className="form-control rounded border lh-lg mb-2"/>
              <input type="password" autocomplete="current-password" placeholder="Contraseña" className="form-control rounded border lh-lg mb-2"/>
            </form>       
            <div className="flex-row form-check form-switch">
                <input name="user[remember_me]" type="hidden" value="0" autocomplete="off"></input>
                <input className="form-check-input" type="checkbox" value="1" name="user[remember_me]" id="user_remember_me"></input>
                <label className="form-check-label text-muted" for="user_Recordar">Recordar</label>
            </div>
            <div className="d-flex justify-content-center my-3">
                <input className="btn btn-info lh-sm" type="submit" value="INICIAR"></input>
            </div>
            <small className="w-100 d-flex justify-content-center form-text">
                <a className="text-decoration-none text-dark " href="#">¿No tienes una cuenta?</a>
            </small>
            <small className="w-100 d-flex justify-content-center form-text">
                <a className="text-decoration-none text-dark" href="#">¿Olvidaste tu contraseña?</a>
            </small>
            <br></br>
        </div>
    </div> 
  )
}
