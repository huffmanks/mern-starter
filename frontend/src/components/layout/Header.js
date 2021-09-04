import { Link } from 'react-router-dom'

const Header = () => {
 
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg p-3 navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://www.wofford.edu/Wofford.edu/Images/development/logo.svg" alt="" width="60" height="auto" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/reports">Reports</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
  }
  
export default Header