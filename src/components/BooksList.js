import BooksDetail from '../containers/BooksDetail';

const BooksList = () => (
  <div>
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <tr>
        <BooksDetail />
      </tr>
    </table>
  </div>
);

export default BooksList;
