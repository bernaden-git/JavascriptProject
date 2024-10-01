/*let num = 13
let index = 1

//13 * 1
//13 * 2
//13 * 3
//...
//13 * 10

while (index<=10){
    console.log(num*index)
    index++

}

//Print all the odd numbers between 1 to 50

let odd = 1
let i1 = 0

while (odd<50){
    console.log(odd)
    odd = odd + 2
} 


//find the total of all the digits in the given number
//let num1 = 342145
//result = 3+4+2+1+4+5 = 

//let num1 = 342145
//let total = 0

//while(num1>0){
 //   let rem = num1 % 10 //3
  //  num1 = parseInt(num1/10) //0
   // total = total + rem //19
//}

//console.log('Total is ' + total)*/

//find reverse number using
//num1 = 34145

/*let num2 = 34145
reverse = 0

while(num2>0){
   let rem1 = num2 % 10 //5
   num2 = parseInt(num2/10)
   reverse = (reverse * 10) + rem1
}

console.log('Reversed: ' + reverse) */

for(let i=1; i<=20; i++){
    console.log(i)
}

console.log('End of For Loop')

//=== For Each Loop ===

let names = ['Diane','Isabel','Berna']
console.log(names)

//1st approach for each loop

for(let n in names){
    console.log(names[n])
}

console.log('End of for each loop')

//2nd approach for each loop
names.forEach((name) => {
    console.log(name)
})

console.log('End of for each loop')

