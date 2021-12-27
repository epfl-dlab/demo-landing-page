import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { contact } from '../../constants';
import { projects } from '../../projects';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [showNavList, setShowNavList] = useState(false);
    const toggleNavList = () => setShowNavList(!showNavList);

    return (
        <nav className="center nav">
            <ul
                style={{ display: showNavList ? 'flex' : undefined }}
                className="nav__list"
            >
                {projects.length ? (
                    <li className="nav__list-item">
                        <a
                            href="#projects"
                            onClick={toggleNavList}
                            className="link link--nav"
                        >
                            Projects
                        </a>
                    </li>
                ) : null}

                {contact.homepage ? (
                    <li className="nav__list-item">
                        <a
                            href="#contact"
                            onClick={toggleNavList}
                            className="link link--nav"
                        >
                            Contact
                        </a>
                    </li>
                ) : null}
            </ul>

            <button
                type="button"
                onClick={toggleNavList}
                className="btn btn--icon nav__hamburger"
                aria-label="toggle navigation"
            >
                {showNavList ? <CloseIcon /> : <MenuIcon />}
            </button>
        </nav>
    );
};

export default Navbar;
