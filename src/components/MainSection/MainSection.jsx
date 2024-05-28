import profileImg from  '/profile trans.png'
import linkedin from '/LinkedIn_icon.png'
import github from '/github.png'
import './MainSection.css'


function MainSection() {

	return (
		<>
			<section>
				<div className='vCard'>
					<div className="profile">
						<div className='blur'></div>
						<img src={profileImg}></img>

					</div>

					<div className="info">

						<h3>Junior Frontend Developer</h3>
						<h1>Welcome to Column & Row, This is my portfolio</h1>
						<h3>by Jacob Mounir</h3>

						<div className="icons">
							<a href="https://www.linkedin.com/in/jacob-mounir/"><img src={linkedin}></img></a>
							<a href="https://github.com/Jacob-Mounir/"><img src={github}></img></a>
						</div>

					</div>

					<div className="blur">
					</div>

				</div>


			</section>


		</>
	)
}

export default MainSection;