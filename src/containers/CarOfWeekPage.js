import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/modelActions';
import CarDetail from '../components/CarDetail';
import Review from '../components/Review';

export class CarOfWeekPage extends React.Component {

  async componentDidMount() {
    this.props.getCarOfWeek()
  }

  render() {
    return (
      <div>
      <CarDetail
        car={this.props.currentCarDetail}       
      />
      <Review review={this.props.carOfWeek.review} />
      </div>
    );
  }
}

CarOfWeekPage.propTypes = {
  currentCarDetail: PropTypes.object.isRequired,  
  carOfWeek: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    currentCarDetail: state.model.currentCarDetail,
    carOfWeek: state.model.carOfWeek
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCarOfWeek: () => dispatch(actions.getCarOfWeek())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarOfWeekPage);
