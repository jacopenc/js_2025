function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }

  function saludar()
{
    sayHi('John'); // Hello, John!
    sayBye('John'); // Bye, John!
}
  
  export {sayHi, sayBye , saludar }; // a list of exported variables