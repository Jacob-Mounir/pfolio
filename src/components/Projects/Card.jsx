import './Card.css';

function Card({ project }) {
	return (
		<div className="card">
			<div className="photo">

				<img src={project.image} alt={project.title} />
			</div>
			<h2>{project.title}</h2>
			<h4>{project.lang}</h4>

			<div>
				<a href={project.link}>
					<button>Link</button>
				</a>
			</div>
		</div>
	);
}

export default Card;
