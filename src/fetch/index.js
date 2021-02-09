const uri = 'http://localhost:5000/books';

const apiFetch = () => {
  async function result() {
    const response = await fetch(
      `${uri}.json`,
      {
        mode: 'cors',
        method: 'GET',
      },
    );

    const resp = await response.json();
    console.log(resp);
  }
  result();
};

export default apiFetch;
