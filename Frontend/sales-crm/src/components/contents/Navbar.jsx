import React from 'react'

function Navbar() {
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DashBoard</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
             {/* Other Navbar */}
            </ul>
          </div>
          <li className="nav-item">
            <a className="nav-link" href="#" >LOGIN</a>
          </li>
        </div>
      </nav>
    </div>
  )
}

export default Navbar