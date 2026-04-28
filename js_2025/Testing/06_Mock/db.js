async function getUserByEmail(email) {
  // esto en la vida real sería una BD
  return { email: 'test@test.com', password: '123456' };
}

module.exports = { getUserByEmail };