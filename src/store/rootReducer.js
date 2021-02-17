import {combineReducers} from 'redux';
import {converter} from './converter.js';
import {history} from './history.js';

export const NameSpace = {
	CONVERTER: `CONVERTER`,
	HISTORY: `HISTORY`,
};

export default combineReducers(
	{
		[NameSpace.CONVERTER]: converter,
		[NameSpace.HISTORY]: history,
	}
);
