import "../header/header.css";

function Header() {
  return (
    <><nav className="navbar navbar-expand-lg navbar-expand-sm fixed-top  m-2 p-2">
    <div className="container-fluid ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-light bg-warning rounded-pill p-2" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link active text-light" aria-current="page" href="#">Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Skill</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav></>
  )
}

export default Header