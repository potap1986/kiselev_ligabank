import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import './converter.scss';
import {Currency} from '../../const';
import dateFormat from 'dateformat';
import {connect} from 'react-redux';
import ActionCreator from '../../store/actions';
import { ApiActionCreator } from '../../store/api-actions';

const Converter = (props) => {  
  const dateTo = dateFormat(new Date(), "yyyy-mm-dd");
  const dateFrom = dateFormat(new Date() - 7 * 24 * 3600 * 1000, "yyyy-mm-dd");

  const [data, setData] = useState({
    startValue: '',
    startCurrency: Currency.RUB,
    endValue: '',
    endCurrency: Currency.USD,
    date: props.date,
    rates: props.rates,
  });

  useEffect(() => {
    setData(prevData => ({
      ...prevData,
      rates: props.rates,
      endValue: prevData.startValue === '' ? '' : Math.round(prevData.startValue / props.rates[prevData.startCurrency] * props.rates[prevData.endCurrency] * 100) / 100
    }))
  }, [props.rates]);

  const handleDateChange = (evt) => {
    props.onDateChange(evt.target.value);
    setData({
      ...data,
      date: evt.target.value,
      rates: props.rates,
    });
  }

  const handleStartInputChange = (evt) => {
    setData({
      ...data,
      startValue: evt.target.value,
      endValue: Math.round(evt.target.value / data.rates[data.startCurrency] * data.rates[data.endCurrency] * 100) / 100
    })
  }
  
  const handleEndInputChange = (evt) => {
    setData({
      ...data,
      endValue: evt.target.value,
      startValue: Math.round(evt.target.value / data.rates[data.endCurrency] * data.rates[data.startCurrency] * 100) / 100
    })
  }

  const handleStartCurrencyChange = (evt) => {
    setData({
      ...data,
      startCurrency: evt.target.value,
      endValue: Math.round(data.startValue / data.rates[evt.target.value] * data.rates[data.endCurrency] * 100) / 100
    })
  }

  const handleEndCurrencyChange = (evt) => {
    setData({
      ...data,
      endCurrency: evt.target.value,
      endValue: Math.round(data.startValue / data.rates[data.startCurrency] * data.rates[evt.target.value] * 100) / 100
    })
  }

  const handleHistoryAddButtonClick = (evt) => {
    evt.preventDefault();

    if (data.startValue > 0 && data.endValue > 0) {
      const operation = {
        date: dateFormat(new Date(data.date), "dd.mm.yyyy"),
        start: `${data.startValue} ${data.startCurrency}`,
        end: `${data.endValue} ${data.endCurrency}`,
      };
  
      props.onHistoryAddButtonClick(operation);
    }
  }

  return (
    <section className="converter container">
      <h2 className="converter__title">Конвертер валют</h2>
      <form action="#">
        <div className="converter__form-group">
          <div className="converter__input-wrapper">
            <label htmlFor="converter-start">У меня есть</label>
            <input type="number" id="converter-start" name="converter-start" placeholder="Введите сумму" value={data.startValue}
              onChange={handleStartInputChange}
            />
          </div>
          <select defaultValue={data.startCurrency}
            onChange={handleStartCurrencyChange}
          >
            <option value={Currency.RUB}>{Currency.RUB}</option>
            <option value={Currency.USD}>{Currency.USD}</option>
            <option value={Currency.EUR}>{Currency.EUR}</option>
            <option value={Currency.GBP}>{Currency.GBP}</option>
            <option value={Currency.CNY}>{Currency.CNY}</option>
          </select>
        </div>
        <div className="converter__form-group">
          <div className="converter__input-wrapper">
            <label htmlFor="converter-end">Хочу приобрести</label>
            <input type="number" id="converter-end" name="converter-end" placeholder="Введите сумму" value={data.endValue}
              onChange={handleEndInputChange}
            />
          </div>
          <select defaultValue={data.endCurrency}
            onChange={handleEndCurrencyChange}
          >
            <option value={Currency.RUB}>{Currency.RUB}</option>
            <option value={Currency.USD}>{Currency.USD}</option>
            <option value={Currency.EUR}>{Currency.EUR}</option>
            <option value={Currency.GBP}>{Currency.GBP}</option>
            <option value={Currency.CNY}>{Currency.CNY}</option>
          </select>
        </div>
				<div className="converter__calendar">
					<input 
						onChange={handleDateChange}
						type="date"
						name="calendar"
						min={dateFrom}
						max={dateTo}
						value={data.date} 
            required
					/>

				</div>
        <button type="submit" className="converter__submit"
          onClick={handleHistoryAddButtonClick}
        >Сохранить результат</button>          
      </form>
    </section>
  );
};

Converter.propTypes = {
	date: PropTypes.string.isRequired,
	rates: PropTypes.shape({
		RUB: PropTypes.number.isRequired,
		USD: PropTypes.number.isRequired,
		EUR: PropTypes.number.isRequired,
		GBP: PropTypes.number.isRequired,
		CNY: PropTypes.number.isRequired,
	}).isRequired,
	onDateChange: PropTypes.func.isRequired,
	onHistoryAddButtonClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		date: state.date, 
    rates: state.rates,
	}
};

const mapDispatchToProps = (dispatch) => ({
  onDateChange: (date) => {
    dispatch(ActionCreator.changeDate(date));
    dispatch(ApiActionCreator.fetchRates(date))
  },
  onHistoryAddButtonClick: (operation) => {
    dispatch(ActionCreator.addHistory(operation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
