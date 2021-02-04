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
    console.log(event);
    this.setState({
      title: event.target.value,
      category: event.target.value,
    });
  }

  render() {
    const { title, category} = this.state;
    return (
      <form>
        <h3 htmlFor="title">Title</h3>
        <input onChange={this.handleChange} type="text" id="title" value={title} />
        <select>
          {CATEGORIES.map(category => (
            <option
              onChange={this.handleChange}
              key={category}
              value={category}
            >
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
