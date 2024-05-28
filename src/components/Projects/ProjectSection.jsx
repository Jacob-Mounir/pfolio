import Card from './Card.jsx'; 
import './Projects.css'
import projects from './Projects.js';

function ProjectSection() {
	return (

		<div className="project-section">
			<div className='dynamic-text'>
				<h1>PROJECTS</h1>
			</div>
			{projects.map((project, index) => (
				<Card key={index} project={project} /> // Render a Card for each project
			))}
		</div>
	);
}

export default ProjectSection;
