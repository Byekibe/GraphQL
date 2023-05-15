import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const Header = () => {
    return (
        <nav className="navbar bg-light mb-4 p-0">
                <Link to="/" className="navbar-brand">
                    <div className="container">
                        <div className="d-flex">
                            <img src={logo} alt="logo" className="mr-2" />
                            <div>Project Management</div>
                        </div>
                    </div>
                </Link>
        </nav>
    )
};

export default Header;