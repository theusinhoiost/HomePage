import { Link } from "react-router";

export default function MyHeader() {
  return (
    <header className="">
<nav className="navbar navbar-expand-lg bg-dark shadow p-3 mb-5 bg-body-tertiary rounded navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Página do Matheus</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#"><Link to={'/'} className="text-light link-offset-3 link-underline link-underline-opacity-0">Inicio</Link>
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link className="text-light link-offset-3 link-underline link-underline-opacity-0" to={'/portfolio'}>Portfólio</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to={'/contact'} className=" text-light link-offset-3 link-underline link-underline-opacity-0">Contato</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}
