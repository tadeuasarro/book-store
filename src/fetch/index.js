const uri = 'http://localhost:5000/books';

const booksIndex = () => {
  async function result() {
    const response = await fetch(
      `${uri}.json`,
      {
        mode: 'cors',
        method: 'GET',
      },
    );

    const resp = await response.json();
    return resp;
  }
  return result();
};

export default booksIndex;
