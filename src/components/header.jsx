import React from 'react';

const Header = () => {
	return (
		<header className="site-header">
			<section className="header-menu center">
				<a href="#" className="site-logo">
					<h2 className="site-logo__title site-logo__title--header">ЛИГА Банк</h2>
				</a>
				<nav className="navigation">
					<ul className="navigation__list navigation__list--header">
						<li className="navigation__list-item navigation__list-item--header">
							<a className="navigation__item-link  navigation__item-link--header" href="#">Услуги</a>
						</li>
						<li className="navigation__list-item navigation__list-item--header">
							<a className="navigation__item-link  navigation__item-link--header" href="#">Рассчитать кредит</a>
						</li>
						<li className="navigation__list-item navigation__list-item--header">
							<a className="navigation__item-link  navigation__item-link--header" href="#">Конвертер валют</a>
						</li>
						<li className="navigation__list-item navigation__list-item--header">
							<a className="navigation__item-link  navigation__item-link--header" href="#">Контакты</a>
						</li>
						<li className="navigation__list-item navigation__list-item--header">
							<a className="navigation__item-link  navigation__item-link--header" href="#">Задать вопрос</a>
						</li>
					</ul>
				</nav>
				<a className="header-menu__login" href="#">Войти в Интернет-банк</a>
			</section>
		</header>
	);
};

export default Header;
