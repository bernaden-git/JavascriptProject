// function def using arrow
import { power } from "./FunctionsExample.js"

let add = (num1, num2) => num1 + num2
let sub = (num1, num2) => num1 - num2

let square = (num) => num * num
let welcome = () => 'Welcome to JS'
let greeting = (name) => 'Hello' + name
//let power = (num1, num2) => Math.pow(num1, num2)

//function call
console.log(welcome())
console.log(add(6,5))
console.log(sub(6,5))

console.log(power(3,4))