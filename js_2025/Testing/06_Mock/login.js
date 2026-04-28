let db = [];

function connectDB() {
  db = [];
}

function addUser(user) {
  db.push(user);
}

function login(email, password) {
  const user = db.find(u => u.email === email);

  if (!user) {
    throw new Error('Usuario no existe');
  }

  if (user.password !== password) {
    throw new Error('Password incorrecta');
  }

  return 'Login correcto';
}

function clearDB() {
  db = [];
}

module.exports = { connectDB, addUser, login, clearDB };