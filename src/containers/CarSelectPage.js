import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/modelActions';
import DropdownList from '../components/ui/DropdownList';

export class CarSelectPage extends React.Component {
  state = {
    modelId: -1
  }

  getModels = e => {
    this.props.actions.getModels(e.target.value);
  }

  gotoDetail = () => {
    const modelId = this.state.modelId;
    this.props.history.push(`/make/model/${modelId}`)
  }

  render() {
    return (
      <div>
      
      <DropdownList 
        dataSource={this.props.models} 
        size={300}
        name="modelList"
        value="id"
        text="name" 
        onchange={(e) => this.setState({modelId: e.target.value})}      
        />
      <button onClick={this.gotoDetail}>Search</button>
      </div>
    );
  }
}

CarSelectPage.propTypes = {
  actions: PropTypes.object.isRequired,
  makes: PropTypes.array,
  models: PropTypes.array
};

function mapStateToProps(state) {
  return {
    makers: state.makers,
    models: state.model.models
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarSelectPage);
