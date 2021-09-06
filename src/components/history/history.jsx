import React from 'react';
import PropTypes from "prop-types";
import './history.scss';
import { connect } from 'react-redux';
import ActionCreator from '../../store/actions';

const History = (props) => {
	return (
		<section className="history container">
			<div className="history__wrapper">
				<h2 className="history__title">История конвертации</h2>
				<ul className="history__list">
					{
						props.history.map((item, index) => (
							<li key={`${Math.random() * 10}-${index}`} className="history__item">
								<span className="history__date">{item.date}</span>
								<span className="history__start">{item.start}</span>
								<span className="history__end">{item.end}</span>
							</li>
						))
					}
				</ul>
				<button className="history__clean"
					onClick={props.onHistoryResetButtonClick}
				>Очистить историю</button>
			</div>
		</section>
	);
};

History.propTypes = {
	history: PropTypes.arrayOf(PropTypes.shape({
		date: PropTypes.string.isRequired,
		start: PropTypes.string.isRequired,
		end: PropTypes.string.isRequired,
	})).isRequired,
	onHistoryResetButtonClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		history: state.history
	}
};

const mapDispatchToProps = (dispatch) => ({
	onHistoryResetButtonClick: () => {
		dispatch(ActionCreator.cleanHistory());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(History);