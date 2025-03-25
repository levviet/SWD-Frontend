import { Link, NavLink } from "react-router-dom"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg main_menu main_menu_2">
            <div className="container">
                <Link to="/" className="navbar-brand" 
                ><img src="assets/images/Logo_2.png" alt="logo" className="img-fluid w-100"
                    /></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars bar_icon"></i>
                    <i className="far fa-times close_icon"></i>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                       <li className="nav-item">
                            <NavLink to="/" className="nav-link" >Home</NavLink>
                        </li>
                       <li className="nav-item">
                            <NavLink to="/doctors" className="nav-link">Doctors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/appointment" className="nav-link" >Appointment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/medicines" className="nav-link" >Medicines</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" >About Us</NavLink>
                        </li>
                    </ul>
                    <ul className="menu_btn menu_btn_2 d-flex flex-wrap align-items-center">
                        <li><Link to="/login" className="menu_sign_in">Sign in</Link></li>
                        <li><Link to="/appointment" className="common_btn">Let’s talk</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header