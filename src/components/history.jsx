import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';

import {clearHistoryAction} from '../store/actions';

const History = (props) => {
  const {convertationHistory, clearHistory} = props;

	return (
		<section className="history">
			<h3 className="history__title">История конвертация</h3>
			<ul className="history__list">
				{convertationHistory.map((convertation, i) => (
					<li key={i} className="history__list-item">
						<p className="history__date">{moment(convertation.date).format(`D.MM.YYYY`)}</p>
						<div className="history__values">
							<p className="history__value">{convertation.currencyFrom.value}<span className="history__currency"> {convertation.currencyFrom.rate}</span></p>
							<p className="history__value history__value--after">{convertation.currencyTo.value}<span className="history__currency"> {convertation.currencyTo.rate}</span></p>
						</div>
					</li>
				))}
			</ul>
			<button className="history__clear" onClick={() => clearHistory()}>Очистить историю</button>
		</section>
	)
};

const mapStateToProps = ({HISTORY}) => ({
		convertationHistory: HISTORY.convertationHistory,
});

const mapDispatchToProps = (dispatch) => ({
	clearHistory() {
		dispatch(clearHistoryAction());
	},
});

export {History};
export default connect(mapStateToProps, mapDispatchToProps)(History);
