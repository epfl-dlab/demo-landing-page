import { header } from '../../constants';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header: React.FC = () => {
    const { homepage, title } = header;

    return (
        <header className="header center">
            <h3>
                {homepage ? (
                    <a
                        href={homepage}
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h3>
            <Navbar />
        </header>
    );
};

export default Header;
