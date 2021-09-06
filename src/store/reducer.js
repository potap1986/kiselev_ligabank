import {ActionType} from "../const";
import dateFormat from 'dateformat';

const initialState = {
    history: [],
		rates: {
			RUB: 0,
			USD: 0,
			EUR: 0,
			GBP: 0,
			CNY: 0,
		},
		date: dateFormat(new Date(), "yyyy-mm-dd"),
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.ADD_HISTORY:
			return {
				...state,
				history: [action.payload, ...state.history].slice(0, 10)
			};
		case ActionType.CLEAN_HISTORY:
			return {
				...state,
				history: action.payload
			};
		case ActionType.LOAD_RATES:
			return {
				...state,
				rates: action.payload
			};
		case ActionType.CHANGE_DATE:
		    return {
				...state,
				date: action.payload
			};
		default:
			return state;
	}
}

export default reducer;