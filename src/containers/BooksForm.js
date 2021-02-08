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
      id: Number((Math.random() * 10000).toFixed(0)),
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
      <form className="font-montserrat">
        <h3 className="form-title text-bold text-uppercase" htmlFor="title">Add New Book</h3>
        <div className="d-flex j-c-space-between">
          <input className="thin-grey-border" placeholder="Book Title" onChange={this.handleChange} type="text" id="title" value={title} />
          <select className="thin-grey-border" onChange={this.handleChange} value={category}>
            <option>Category</option>
            {CATEGORIES.map(category => (
              <option key={category}>
                {category}
              </option>
            ))}
          </select>
          <button className="add-book-btn font-roboto text-bold text-uppercase bg-blue text-white" type="button" onClick={this.handleSubmit}>Add Book</button>
        </div>
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
