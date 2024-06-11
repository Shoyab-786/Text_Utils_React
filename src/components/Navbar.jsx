import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const checkValue = () => {
        let selctedValue = document.querySelector('#changeMode').value;
        return selctedValue;
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">{props.contact}</Link>
                            </li>
                        </ul>
                        <select name="" id="changeMode" className='mx-2 rounded' style={{ cursor: "pointer" }} >
                            <option value="rgb(37, 46, 72)">Dark Mode</option>
                            <option value="#d60404">Red Mode</option>
                            <option value="green">Green Mode</option>
                            <option value="lightblue">Blue Mode</option>
                        </select>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={() => { props.toggleMode(checkValue()) }} style={{ cursor: "pointer" }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Enabled' : 'Disabled'}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;