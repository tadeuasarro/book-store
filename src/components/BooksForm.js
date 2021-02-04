import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions/index';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }

  handleSubmit() {
    const { title, category } = this.state;
    const { addBook } = this.props;
    const book = {
      title,
      category,
      id: Math.random(),
    };

    this.setState({
      title: '',
      category: '',
    });

    addBook(book);
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
        <button type="button" onClick={this.handleSubmit}>Add Book</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(addBook(book)),
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
