import React, { Component } from 'react';
import TrashIcon from 'react-icons/lib/md/delete';
import _ from 'lodash';

const styles = {
  deleteButton: {
    marginRight: '8px',
    cursor: 'pointer',
  },
  deleteButtonIcon: {
    fill: 'lightcoral',
  }
};

class TaskItem extends Component {
  onTaskUpdate = () => {
    const id = this.props.task.id;
    const text = this.taskInput.value;
    this.props.updateTask(id, text);
  }

  onDeleteTaskPressed = () => {
    const id = this.props.task.id;
    this.props.deleteTask(id);
  }

  render() {
    const text = this.props.task.text;

    return (
      <div className="taskitem-container">
        <input
          ref={component => !!component && (this.taskInput = component)}
          className="task-input"
          placeholder="Enter task text"
          type="text"
          defaultValue={text}
          onChange={_.debounce(this.onTaskUpdate, 400)}
        />
        <div onClick={this.onDeleteTaskPressed} role="button" tabIndex="0" style={styles.deleteButton}>
          <TrashIcon size={22} style={styles.deleteButtonIcon} />
        </div>
      </div>
    );
  }
}

export default TaskItem;
