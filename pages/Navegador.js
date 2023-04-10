import 'bootstrap/dist/css/bootstrap.min.css'
export default function navegador() {

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
          <a class="navbar-brand" href="#!"><img src="/logouta.PNG" alt="logo UTA" id="logoUTA" height={40} width={30}></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" href="Lobby">Inicio</a></li>
                  <li class="nav-item"><a class="nav-link" href="Recursos">Recursos</a></li>
                  <li class="nav-item"><a class="nav-link" href="acerca">Acerca de mi</a></li>
                  <li class="nav-item"><a class="nav-link" href="/">Cerrar Sesión</a></li>
              </ul>
          </div>
      </div>
      </nav>
    )
  }