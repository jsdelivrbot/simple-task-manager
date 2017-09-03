import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionCreators from '../../redux/actions';
import TasksView from './TasksView';

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TasksView);
