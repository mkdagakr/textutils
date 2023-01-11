import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(prop) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
            <div className="container-fluid ">
                <a className="navbar-brand" href="">{prop.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button> */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={prop.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${prop.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                        </div>
                    </form>

                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string
};

NavBar.defaultProps = {
    title: 'Set_Title'
};

