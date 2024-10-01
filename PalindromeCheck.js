// need to match if the word is palidrome

//First option
let str1 = 'racecar'
let j = str1.length - 1
let result = true

for (let i=0; i < str1.length; i++){
    if (str1.charAt(i) != str1.charAt(j)) {
        result = false
        break
        
    }
    j--
}
    console.log(result)

//2nd option
    let rev = ''
    for(let i = str1.length - 1; i >= 0 ; i--){
        rev = rev + str1.charAt(i)
        }
    
    console.log(rev)

    if (str1===rev){
        console.log('It is Palindrome')
    }
    else {
        console.log('Not Palindrome')
    }

        /*
for(let n in str1){
    console.log(str1[n])
}

if (str1===rev){
    console.log('It is Palindrome')
}
    else {
        console.log('Not Palindrome')
    }

*/





/*
if(num1===num2){
    console.log('Matched!')
}
    else {
    console.log('NOT Matched!') 
    } */