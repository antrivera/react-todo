import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "",
                   body: "",
                 };
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    this.props.createTodo(this.state);
  }

  render() {
    return (
      <div>
        <label>Title:
          <input type='text'
                 value={this.state.title}
                 onChange={this.handleTitleChange.bind(this)} />
        </label>

        <label>Body:
          <textarea onChange={this.handleBodyChange.bind(this)}
                    value={this.state.body}>
          </textarea>
        </label>

        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default TodoForm;
