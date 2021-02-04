import React, { Component } from 'react';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.nodeName === 'INPUT') {
      this.setState({
        ...event,
        title: event.target.value,
      });
    } else if (event.target.nodeName === 'SELECT') {
      this.setState({
        ...event,
        category: event.target.value,
      });
    }
    console.log(this);
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <h3 htmlFor="title">Title</h3>
        <input onChange={this.handleChange} type="text" id="title" value={title} />
        <select onChange={this.handleChange} value={category}>
          {CATEGORIES.map(category => (
            <option key={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="button">Add Book</button>
      </form>
    );
  }
}

export default BooksForm;
