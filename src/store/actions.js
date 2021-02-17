export const ActionType = {
  CHANGE_EXCHANGE_RATES: `CHANGE_EXCHANGE_RATES`,
  CHANGE_DATE: `CHANGE_DATE`,
  CLEAR_HISTORY: `CLEAR_HISTORY`,
  SAVE_CONVERTATION: `SAVE_CONVERTATION`,
};

export const changeExchangeRatesAction = (exchangeRates) => ({
  type: ActionType.CHANGE_EXCHANGE_RATES,
  payload: exchangeRates,
})

export const changeDateAction = (chosenDate) => ({
  type: ActionType.CHANGE_DATE,
  payload: chosenDate,
});

export const clearHistoryAction = () => ({
  type: ActionType.CLEAR_HISTORY,
  payload: [],
});

export const saveConvertationAction = (convertation) => ({
  type: ActionType.SAVE_CONVERTATION,
  payload: convertation,
});
