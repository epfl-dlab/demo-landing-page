import './Footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import { footer } from '../../constants';

const Footer: React.FC = () => (
    <>
        <footer className="footer">
            <a
                href={footer.projectLink}
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubIcon />
            </a>
        </footer>
    </>
);

export default Footer;
