import moment from 'moment';

import {CURRENCY_TYPES} from '../util/const';
import {changeExchangeRatesAction} from './actions';

export const fetchChosenExchangeRates = (date, updateValues = () => {}) => (dispatch, _getState, api) => (
  api.get(`${moment(date).format(`YYYY-MM-DD`)}?base=USD&symbols=${CURRENCY_TYPES.join(`,`)}`)
  .then(({data}) => {
    dispatch(changeExchangeRatesAction(data.rates))
  })
  .then(() => {
    updateValues();
  })
);
