// const sayHello = function (){
//   console.log('Hello, World');
// }

// sayHello();

const sayHello = function(name){
  console.log("Hello, " + name);
}

sayHello("Mohammed");
sayHello("Ahmed");
sayHello("Aras");

const sayHelloConsole = function(name){
  console.log("Hello, " + name)
}

sayHelloConsole("Mohammed");

const sayHelloReturn = function(name){
  return "Hello, " + name;
}

const greeting = sayHelloReturn("Mohammed");

console.log(greeting);