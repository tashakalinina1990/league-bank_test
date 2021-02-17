import {extend} from '../util/utils';
import {ActionType} from './actions';
import moment from 'moment';

const initialState = {
  chosenDate: moment().format(`YYYY-MM-DD`),
  exchangeRates: {},
};

const converter = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_EXCHANGE_RATES:
      return extend(state, {
        exchangeRates: action.payload,
      });
    case ActionType.CHANGE_DATE:
      return extend(state, {
        chosenDate: action.payload,
      });
    };
  return state;
}

export {converter};
