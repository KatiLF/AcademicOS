import 'bootstrap/dist/css/bootstrap.min.css'
export default function navegador() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
          <a className="navbar-brand" href="#!"><img src="/Logouta.png" alt="logo UTA" id="logoUTA" height={40} width={30}></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="Lobby">Inicio</a></li>
                  <li className="nav-item"><a className="nav-link" href="Recursos">Recursos</a></li>
                  <li className="nav-item"><a className="nav-link" href="acerca">Acerca de mi</a></li>
                  <li className="nav-item"><a className="nav-link" href="/">Cerrar Sesión</a></li>
              </ul>
          </div>
      </div>
      </nav>
    )
  }