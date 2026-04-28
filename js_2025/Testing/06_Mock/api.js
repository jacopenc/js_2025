async function getUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');

  if (!res.ok) {
    throw new Error('Error en la API');
  }

  return res.json();
}

module.exports = { getUser };