import { contact } from '../../constants';
import './Contact.css';

const Contact: React.FC = () => {
    if (!contact.homepage) return null;

    return (
        <section className="section contact center" id="contact">
            <h2 className="section__title">Contact</h2>
            <a
                href={contact.homepage}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="btn btn--outline">Visit our homepage</button>
            </a>
        </section>
    );
};

export default Contact;
