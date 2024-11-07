import '../styles/Header.css';

function Header() {
  return (
    <div className="Header">
        <div className="container-fluid mx-1">
            <header className="d-flex flex-wrap justify-content-between py-3 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="logo">QuickLearn</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" class="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="#" class="nav-link">Login</a></li>
                    <li className="nav-item"><a href="#" class="nav-link active">SignUp</a></li>
                </ul>
            </header>
        </div>
    </div>
  );
}

export default Header;
