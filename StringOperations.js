let fName = 'Kate'
let lName = 'Wilson'

let fullName = fName.concat(lName)

console.log('Full name is: ' + fName + ' ' + lName)
console.log(fullName)

console.log('Total chars in the Strings are ' + fullName.length)
console.log('Upper case is ' + fullName.toUpperCase())
console.log('Lower case is ' + fullName.toLowerCase())

let Str1 = "Clean World Green World"
console.log(Str1.replace(/World/g,'Philippines'))
console.log(Str1.replace('World','Philippines'))