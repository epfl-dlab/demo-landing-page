import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { about } from '../../constants';
import './About.css';

const About: React.FC = () => {
    const { topic, affiliation, description, social } = about;

    return (
        <div className="about center">
            {topic && <h1>{<span className="about__name"> {topic}</span>}</h1>}

            {affiliation && <h2 className="about__role">{affiliation}</h2>}

            <p className="about__desc">{description && description}</p>

            <div className="about__contact center">
                {social && (
                    <>
                        {social.github && (
                            <a
                                href={social.github}
                                aria-label="github"
                                className="link link--icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon />
                            </a>
                        )}

                        {social.homepage && (
                            <a
                                href={social.homepage}
                                aria-label="homepage"
                                className="link link--icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ComputerIcon />
                            </a>
                        )}

                        {social.mail && (
                            <a
                                href={`mailto:${social.mail}`}
                                aria-label="mail"
                                className="link link--icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AlternateEmailIcon />
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default About;
