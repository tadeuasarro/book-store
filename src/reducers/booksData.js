const roundID = () => (Math.random() * 100).toFixed(0);
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
      {
        id: roundID(),
        title: 'The Amazing Spider Man',
        category: 'Comic',
      },
    ]
  );
}

export default booksData;
