import BooksDetail from '../containers/BooksDetail';

const BooksList = () => (
  <div>
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>

        <BooksDetail />

      </tbody>
    </table>
  </div>
);

export default BooksList;
