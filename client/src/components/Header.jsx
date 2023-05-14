import logo from './assets/logo.png';

const Header = () => {
    return (
        <nav className="navbar bg-light mb-4 p-0">
                <a href="" className="navbar-brand">
                    <div className="container">
                        <div className="d-flex">
                            <img src={logo} alt="logo" className="mr-2" />
                            <div>Project Management</div>
                        </div>
                    </div>
                </a>
        </nav>
    )
};

export default Header;