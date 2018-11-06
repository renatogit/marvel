import React from 'react'

const Header = (props) => (
	<header className="header">
		<div className="header__top">
			<img className="header__logo" src="assets/images/MarvelLogo.png" />
			<h1 className="header__title"> React | Marvel </h1>
		</div>
		<nav className="header__menu">
			<ul>
				<li>AAA</li>
				<li>BBB</li>
				<li>CCC</li>
				<li>About</li>
			</ul>
		</nav>

	</header>
)

export default Header;
