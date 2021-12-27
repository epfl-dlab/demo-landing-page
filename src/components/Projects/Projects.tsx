import uniqid from 'uniqid';
import { projects } from '../../projects';
import { Project } from '../../projects';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';

const Projects: React.FC = () => {
    if (!projects.length) return null;

    return (
        <section id="projects" className="section projects">
            <h2 className="section__title">Projects</h2>

            <div className="projects__grid">
                {projects.map((p: Project) => {
                    return (
                        <ProjectContainer
                            key={uniqid()}
                            name={p.name}
                            authors={p.authors}
                            description={p.description}
                            sourceCode={p.sourceCode}
                            paperLink={p.paperLink}
                            demoPage={p.demoPage}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
