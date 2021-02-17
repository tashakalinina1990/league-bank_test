import moment from 'moment';
import {extend} from '../util/utils';
import {ActionType} from './actions';
import {historyMock} from '../mock/mock';
import {HISTORY_MAX_LENGTH} from '../util/const';


const initialState = {
  convertationHistory: historyMock,
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_CONVERTATION:
      return extend(state, {
        convertationHistory: [action.payload, ...state.convertationHistory].slice(0, HISTORY_MAX_LENGTH),
      });
    case ActionType.CLEAR_HISTORY:
      return extend(state, {
        convertationHistory: action.payload,
      });
    };
  return state;
}

export {history};
