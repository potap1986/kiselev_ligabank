import {ActionType} from "../const";

const ActionCreator = {
	loadRates: (rates) => ({
		type: ActionType.LOAD_RATES,
		payload: rates
	}),

	addHistory: (convertation) => ({
		type: ActionType.ADD_HISTORY,
		payload: convertation
	}),

	cleanHistory: () => ({
		type: ActionType.CLEAN_HISTORY,
		payload: []
	}),

	changeDate: (date) => ({
		type: ActionType.CHANGE_DATE,
		payload: date
	}),
};

export default ActionCreator;
