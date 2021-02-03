const roundID = () => Math.random().toFixed(2) * 100;
function booksData() {
  return (
    [
      {
        id: roundID(),
        title: 'The Lord of the Rings',
        category: 'Fiction',
      },
      {
        id: roundID(),
        title: 'Star Wars',
        category: 'Fiction',
      },
      {
        id: roundID(),
        title: 'The Witcher',
        category: 'Fiction',
      },
    ]
  );
}

export default booksData;
