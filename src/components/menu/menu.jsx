import React from "react";

export default function Menu() {
    const homepageURL = process.env.PUBLIC_URL || "/"
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a href={homepageURL} className={"navbar-brand"}>Mi Proyecto</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href={homepageURL} className="nav-link">Home </a>
                    </li>
                    <li className="nav-item">
                        <a href={homepageURL + "nosotros"} className="nav-link">Nosotros </a>
                    </li>
                    <li className="nav-item">
                        <a href={homepageURL + "servicios"} className="nav-link">Servicios </a>
                    </li>

                    <li className="nav-item">
                        <a href={homepageURL + "contacto"} className="nav-link">Contacto </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}