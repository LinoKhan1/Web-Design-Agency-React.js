import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo-black.webp";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo of Linokhan" /></Link>
                    <button className="navbar-toggler" type="button" onClick={toggleNav} aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent" data-testid="navbar-supported-content">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/" onClick={toggleNav}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about-us" onClick={toggleNav}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/create" onClick={toggleNav}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact-us" onClick={toggleNav}>Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to="/get-proposal">
                                <button className="btn-primary"><FontAwesomeIcon className="rocket" icon={faRocket} />Get a proposal</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
             {/* <nav className="flex justify-between items-center mb-6">

                <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
                    Create New Blog Post
                </NavLink>
            </nav>*/}
        </>

          
    );
}