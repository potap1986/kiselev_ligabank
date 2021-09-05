const ActionType = {
	LOAD_RATES: 'rates/load',
	ADD_HISTORY: 'history/add',
	CLEAN_HISTORY: 'history/clean',
	CHANGE_DATE: 'date/change',
}

const API = {
	URL: 'http://api.exchangeratesapi.io/v1/',
	KEY: '86cdf7bf33507b6c31dc90154742c7bb',
}

const Currency = {
	RUB: 'RUB',
	USD: 'USD',
	EUR: 'EUR',
	GBP: 'GBP',
	CNY: 'CNY'
}

export {ActionType, API, Currency};