// Check if odd or even numbers
export function EvenOdd (num) {

    let rem = num % 2
       
    if (rem==0){
        return 'Even'
    }
    else {
        return 'Odd'
    }
  
}

//Check is Prime number

export function PrimeNumber(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;    
}