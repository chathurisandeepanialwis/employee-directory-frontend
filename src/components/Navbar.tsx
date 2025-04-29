import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">Harischandra Pvt Ltd</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Employee Directory</a>

            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
