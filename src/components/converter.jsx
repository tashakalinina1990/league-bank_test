import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import {withConverter} from '../hocs/with-converter';

const Converter = (props) => {
	const {valueChangeHandler, currencyChangeHandler, submitHandler, dateChangeHandler, state, date} = props;

	const CustomInputButton = ({value, onClick}) => (
		<button className="converter__calendar" type="button" onClick={onClick}>
			{value}
		</button>
	);

	return (
		<form className="converter__container" action="#" onSubmit={submitHandler}>
			<fieldset className="converter__changers">
				<legend className="converter__title">Конвертер валют</legend>
				<div className="converter__changer">
					<p className="converter__changer-title">У меня есть</p>
					<input className="converter__input" name="currencyFrom" max="10000000" placeholder="0" value={state.currencyFrom.value} type="number" onChange={valueChangeHandler} required></input>
					<label className="converter__select-wrapper">
						<select className="converter__select" name="currencyFrom" onChange={currencyChangeHandler} value={state.currencyFrom.rate}>
							<option className="converter__select-item">RUB</option>
							<option className="converter__select-item">USD</option>
							<option className="converter__select-item">EUR</option>
							<option className="converter__select-item">GBP</option>
							<option className="converter__select-item">CNY</option>
						</select>
						<span className="converter__select-arrow"></span>
					</label>
				</div>
				<div className="converter__arrows"></div>
				<div className="converter__changer">
					<p className="converter__changer-title">Хочу приобрести</p>
					<input className="converter__input" name="currencyTo" max="10000000" placeholder="0" value={state.currencyTo.value}  type="number" onChange={valueChangeHandler} required></input>
					<div className="converter__select-wrapper">
						<select className="converter__select" name="currencyTo" onChange={currencyChangeHandler} value={state.currencyTo.rate}>
							<option className="converter__select-item">RUB</option>
							<option className="converter__select-item">USD</option>
							<option className="converter__select-item">EUR</option>
							<option className="converter__select-item">GBP</option>
							<option className="converter__select-item">CNY</option>
						</select>
						<span className="converter__select-arrow"></span>
					</div>
				</div>
			</fieldset>
			<label className="converter__calendar-wrapper">
			<DatePicker
				selected={new Date(date)}
				minDate={new Date(moment().subtract(7, `day`).format(`YYYY-MM-DD`))}
				maxDate={new Date()}
				onChange={dateChangeHandler}
				customInput={<CustomInputButton />}
				dateFormat={`d.MM.yyyy`}
			/>
			</label>
			<button className="converter__submit" type="submit">Сохранить результат</button>
		</form>
	)
};

export {Converter};
export default withConverter(Converter);