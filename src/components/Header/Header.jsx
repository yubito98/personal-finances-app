

function Header(){

    return(
        <header>
            <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container">
                <a  className="navbar-brand" href="#"><span style={{color: "green", fontSize:"30px"}}>$ </span>Personal Finances</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Flujo de caja</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Estado de resultados</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Situacion Financiera</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    )


}



export default Header;