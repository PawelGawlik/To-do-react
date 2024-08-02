import './App.css';
import React from 'react';
import Form from './Form';
import Todo from './Todo';

class App extends React.Component {
  date = {
    year: new Date().getFullYear(),
    month: function () {
      const month = new Date().getMonth() + 1;
      if (month < 10) {
        return `0${month}`;
      } else {
        return month;
      }
    },
    day: function () {
      const day = new Date().getDate();
      if (day < 10) {
        return `0${day}`;
      } else {
        return day;
      }
    }
  }

  id = 0

  state = {
    todo: "dodaj zadanie",
    important: false,
    date: `${this.date.year}-${this.date.month()}-${this.date.day()}`,
    todoArr: [],
    doneArr: []
  }

  handleInputChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({
        important: !this.state.important
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  AddTask = (e) => {
    e.preventDefault();
    this.id++;
    this.state.todoArr.push({
      id: this.id,
      task: this.state.todo,
      important: this.state.important,
      date: this.state.date
    })
    this.setState({
      todo: "dodaj zadanie",
      important: false,
      date: `${this.date.year}-${this.date.month()}-${this.date.day()}`,
      todoArr: this.state.todoArr
    })
  }

  handleXButton = (id) => {
    const filArr = this.state.todoArr.filter((el) => {
      return !(el.id === id);
    })
    this.setState({
      todoArr: filArr
    })
  }

  handleDoneButton = (id) => {
    this.handleXButton(id);
    const el = this.state.todoArr.find((el) => {
      return el.id === id;
    })
    el.done = `${this.date.year}-${this.date.month()}-${this.date.day()}`
    this.state.doneArr.push(el);
    this.setState({
      doneArr: this.state.doneArr
    })
  }

  render() {
    return (
      <>
        <Form todo={this.state.todo} important={this.state.important} date={this.state.date} change={this.handleInputChange} newTask={this.AddTask} />
        <hr />
        {this.state.todoArr.length ? <Todo tasks={this.state.todoArr} delete={this.handleXButton} done={this.handleDoneButton} dones={this.state.doneArr} todo={true} /> : null}
        <hr />
        {this.state.doneArr.length ? <Todo tasks={this.state.todoArr} dones={this.state.doneArr} todo={false} /> : null}
      </>
    )
  }
}
export default App;
