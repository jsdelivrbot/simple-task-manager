import React, { Component } from 'react';
import radium, { Style } from 'radium';

import TaskItem from './TaskItem';

const styles = {
  classBased: {
    '.task-input': {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'none',
      fontSize: '16px',
      fontFamily: 'Montserrat',
    },
    '.task-input::placeholder': {
      color: '#cdd3e0'
    },
    '.taskitem-container': {
      height: '60px',
      padding: '0px 30px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottom: 'solid 2px #f8f9fc',
      backgroundColor: 'white',
    },
    mediaQueries: {}
  },
  container: {
    height: '100%',
    background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
  },
  navBar: {
    width: '100%',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
    backgroundColor: '#24292e',
    color: '#c8c9cb',
  },
  contentContainer: {
    width: '100%',
    maxWidth: '950px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  taskInputContainer: {
    height: '60px',
    padding: '0px 30px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fc',
  },
  addTaskButton: {
    backgroundColor: 'rgb(117, 120, 251)',
    color: 'white',
    height: '31px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    borderRadius: '3px',
    fontFamily: 'Montserrat',
    letterSpacing: 0.6,
    cursor: 'pointer',
    marginRight: '8px'
  },
};

class TasksView extends Component {
  onAddTaskPressed = () => {
    const text = this.taskInput.value;
    if (!text) {
      return;
    }
    this.taskInput.value = '';
    this.props.createTask(text);
  }

  renderTaskItem = task => (
    <TaskItem
      key={task.id}
      task={task}
      deleteTask={this.props.deleteTask}
      updateTask={this.props.updateTask}
    />
  )

  render() {
    const tasks = this.props.tasks;
    return (
      <div className="tasks-container" style={styles.container}>
        <div style={styles.navBar}>
          MY TASKS
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.taskInputContainer}>
            <input ref={component => !!component && (this.taskInput = component)} className="task-input" placeholder="Add new task" type="text" />
            <div onClick={this.onAddTaskPressed} role="button" tabIndex="0" style={styles.addTaskButton}>ADD</div>
          </div>
          {tasks.map(this.renderTaskItem)}
        </div>
        <Style rules={styles.classBased} scopeSelector=".tasks-container" />
      </div>
    );
  }
}

export default radium(TasksView);
