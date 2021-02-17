import React from "react";
import {connect} from 'react-redux';

import Header from '../components/header';
import Converter from '../components/converter';
import History from '../components/history';
import Footer from '../components/footer';

const App = (props) => {
	return (
		<React.Fragment>
			<Header />
			<main>
				<section className="credit">
					<div className="credit__background"></div>
					<div className="credit__container">
						<div className="credit__block">
							<h2 className="credit__title">Лига Банк</h2>
							<p className="credit__text">Кредиты на любой случай</p>
							<a className="credit__button" href="#">Рассчитать кредит</a>
						</div>
					</div>
				</section>
				<section className="converter center">
					<Converter />
					<History />
				</section>
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;
