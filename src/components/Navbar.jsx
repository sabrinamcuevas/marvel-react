import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Characters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/series">Series</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/comics">Comics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/creators">Creators</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar