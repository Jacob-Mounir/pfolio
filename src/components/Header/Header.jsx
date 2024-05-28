import profile from '/profile trans.png'
import './Header.css'


function Header() {
	return (
		<header>
			<img src={profile}></img>
			<nav>
				<li>Home</li>
				<li>About</li>
			</nav>
		</header>
	);
}

export default Header;