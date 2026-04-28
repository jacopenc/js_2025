// función simple
function suma(a, b) {
  return a + b;
}

// función con API
async function getUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');

  if (!res.ok) {
    throw new Error('Error en la API');
  }

  return res.json();
}

// función con timeout
function esperarYejecutar(fn) {
  setTimeout(fn, 1000);
}

module.exports = { suma, getUser, esperarYejecutar };