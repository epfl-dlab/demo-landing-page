import { Project } from '../../projects';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';

import './ProjectContainer.css';

const ProjectContainer: React.FC<Project> = (project: Project) => {
    return (
        <div className="project">
            {/* name of the project */}
            <p className="project__name">{project.name}</p>

            {/* authors of the project */}
            <p className="project__authors">
                <span className="project__detail-highlight">Authors: </span>
                <span className="project__authors-detail">
                    {' '}
                    {project.authors}{' '}
                </span>{' '}
            </p>

            {/* abstract/description of the project */}
            <p className="project__description">
                <span className="project__detail-highlight">Abstract: </span>
                {project.description}
            </p>

            <p className="project__break" />

            {/* additional materials of the project */}
            {project.sourceCode && (
                <a
                    href={project.sourceCode}
                    aria-label="source code"
                    className="link link--icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </a>
            )}

            {project.paperLink && (
                <a
                    href={project.paperLink}
                    aria-label="paper"
                    className="link link--icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleIcon />
                </a>
            )}

            {project.demoPage && (
                <a
                    href={project.demoPage}
                    aria-label="demo"
                    className="link link--icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkIcon />
                </a>
            )}
        </div>
    );
};

export default ProjectContainer;
