import "../header/header.css";

function Header() {
  return (
    <><nav className="navbar navbar-expand fixed-top mt-2">
    <div className="container-fluid ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="Ini nav-link active text-light bg-light.bg-gradient rounded-pill p-2" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link active text-light" aria-current="page" href="#Projects">Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#Skill">Skill</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#Contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav></>
  )
}

export default Header