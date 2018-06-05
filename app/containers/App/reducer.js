import { fromJS } from 'immutable';

import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA,
  LOAD_DATA_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  employees: null,
  companyInfo: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .set('employees', null)
        .set('companyInfo', null);
    case LOAD_DATA_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('employees', fromJS(action.data.employees))
        .set('companyInfo', fromJS(action.data.companyInfo));
    case LOAD_DATA_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('employees', null)
        .set('companyInfo', null);
    default:
      return state;
  }
}

export default appReducer;
