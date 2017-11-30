import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/modelActions';
import CarDetail from '../components/CarDetail';

export class CarDetailPage extends React.Component {

  async componentDidMount() {
    const modelId = this.props.match.params.id;
    this.props.getModel(modelId)
  }

  render() {
    return (
      <CarDetail
        car={this.props.car}       
      />
    );
  }
}

CarDetailPage.propTypes = {
  actions: PropTypes.object.isRequired,
  car: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    car: state.model.currentCarDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getModel: modelId => dispatch(actions.getModelById(modelId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetailPage);
