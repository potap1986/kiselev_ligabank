import ActionCreator from "./actions";
import {API} from "../const";

const ApiActionCreator = {
  fetchRates: (date) => (dispatch, _getState, api) => (
    api.get(`${date}?access_key=${API.KEY}&symbols=RUB,USD,EUR,GBP,CNY`)
      .then(({data}) => dispatch(ActionCreator.loadRates(data.rates))
      )
  ),
}

export {ApiActionCreator};