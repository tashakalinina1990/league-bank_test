import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {fetchChosenExchangeRates} from '../store/api-actions';
import {saveConvertationAction} from '../store/actions';
import {changeDateAction} from '../store/actions';
import {RATES} from '../util/const';
import {extend} from '../util/utils';

export const withConverter = (Component) => {
	class WithConverter extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				currencyFrom: {
					value: ``,
					rate: RATES.RUB,
				},
				currencyTo: {
					value: ``,
					rate: RATES.USD,
				},
				exchangeRates: this.props.rates,
			}

			this._valueConverter = this._valueConverter.bind(this);
			this.valueChangeHandler = this.valueChangeHandler.bind(this);
			this.currencyChangeHandler = this.currencyChangeHandler.bind(this);
			this.submitHandler = this.submitHandler.bind(this);
			this.dateChangeHandler = this.dateChangeHandler.bind(this);
			this.updateValues = this.updateValues.bind(this);
		}

		_valueConverter(name = `currencyFrom`, value = this.state[`currencyFrom`].value) {
			if (value == 0) {
				this.setState({
					currencyFrom: extend(this.state.currencyFrom, {value: ``}),
					currencyTo: extend(this.state.currencyTo, {value: ``}),
				})
				return;
			}
			if (name === `currencyFrom`) {
				const rateIndex = this.state.exchangeRates[this.state[`currencyTo`].rate] / this.state.exchangeRates[this.state[`currencyFrom`].rate];
				this.setState({[`currencyTo`]: extend(this.state[`currencyTo`], {
					value: Math.floor((value * rateIndex) * 10000) / 10000,
				})});
			} else {
				const rateIndex = this.state.exchangeRates[this.state[`currencyFrom`].rate] / this.state.exchangeRates[this.state[`currencyTo`].rate];
				this.setState({[`currencyFrom`]: extend(this.state[`currencyFrom`], {
					value: Math.floor((value * rateIndex) * 10000) / 10000,
				})});
			}
		}

		
		valueChangeHandler(evt) {
			const {name, value} = evt.target;

			this.setState({[name]: extend(this.state[name], {
				value: Math.floor(value * 10000) / 10000,
			})}, () => this._valueConverter(name, value));
		}
		
		
		currencyChangeHandler(evt) {
			const {name, value} = evt.target;

			if (value === this.state.currencyFrom.rate || value === this.state.currencyTo.rate) {
				const temporaryRate = this.state.currencyFrom.rate;
				this.setState({
					currencyFrom: extend(this.state.currencyFrom, {rate: this.state.currencyTo.rate}),
					currencyTo: extend(this.state.currencyTo, {rate: temporaryRate}),
				}, () => this._valueConverter());
			} else {
				this.setState({[name]: extend(this.state[name], {rate: value})}, () => this._valueConverter());
			}
		}

		updateValues() {
			this.setState({exchangeRates: this.props.rates}, () => this._valueConverter());
		}

		dateChangeHandler(chosenDate) {
			this.props.changeDate(moment(chosenDate).format(`YYYY-MM-DD`));
			this.props.fetchExchangeRates(chosenDate, this.updateValues);
		}

		submitHandler(evt) {
			evt.preventDefault();

			this.props.saveConvertation({
				date: this.props.date,
				currencyFrom: this.state.currencyFrom,
				currencyTo: this.state.currencyTo,
			});
		}

		render() {
			return (
				<Component
					{...this.props}
					valueChangeHandler={this.valueChangeHandler}
					currencyChangeHandler={this.currencyChangeHandler}
					submitHandler={this.submitHandler}
					dateChangeHandler={this.dateChangeHandler}
					state={this.state}
				/>
			);
		}
	}

	const mapStateToProps = ({CONVERTER}) => ({
		date: CONVERTER.chosenDate,
		rates: CONVERTER.exchangeRates,
	});

	const mapDispatchToProps = (dispatch) => ({
		saveConvertation(convertation) {
			dispatch(saveConvertationAction(convertation));
		},
		changeDate(chosenDate) {
			dispatch(changeDateAction(chosenDate));
		},
		fetchExchangeRates(date, updateValues) {
			dispatch(fetchChosenExchangeRates(date, updateValues))
		},
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithConverter);
};
