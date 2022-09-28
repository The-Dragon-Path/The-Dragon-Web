export const RegisterPage = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="mt-5 rounded p-2 bg-light register">
        <div className="d-flex justify-content-start my-3">
          <h3>Inicio/Registro</h3>
        </div>
        <form action="" className="d-flex flex-column justify-content-center">
          <input type="email" autocomplete="email" placeholder="tu.email@ejemplo.me" className="form-control rounded border lh-lg mb-2" />
          <input type="password" autocomplete="password" placeholder="Contraseña" className="form-control rounded border lh-lg mb-2" />
          <input type="password" autocomplete="confirm-password" placeholder="Confirmación de contraseña" className="form-control rounded border lh-lg mb-2" />
        </form>
        <div className="d-flex justify-content-center my-3">
          <button type="button" class="btn btn-outline-primary">REGISTRAR</button>
        </div>
      </div>
    </div>
  )
}