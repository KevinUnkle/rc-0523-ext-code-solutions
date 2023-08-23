async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(
        `Network response was not OK - Error: ${response.status}`
      );
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error(
        `Network response was not OK - Error: ${response.status}`
      );
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchData();
fetchPokemon();
