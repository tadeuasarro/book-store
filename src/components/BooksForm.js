const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <form>
    <h3 htmlFor="title">Title</h3>
    <input type="text" id="title" />
    <select>
      {CATEGORIES.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
    <button type="button">Add Book</button>
  </form>
);

export default BooksForm;
