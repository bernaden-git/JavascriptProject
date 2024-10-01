// Check if odd or even numbers
export function EvenOdd(num) {

    let rem = num % 2

    if (rem == 0) {
        return 'Even'
    }
    else {
        return 'Odd'
    }

}

//Check is Prime number - cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11)

export function PrimeNumber(num) {

    if (num < 2) //ex. num = 6; num = 5
        return false

    const sqr = Math.sqrt(num) // ex. sqr = squareroot of 6 which is 2.449; sqr = 2.23

    if (sqr % parseInt(sqr) === 0) //2.23 % 2 === 0; 23 === 0?
        return false

    else {
        for (let i = 2; i <= parseInt(sqr); i++) { 
            if (num % i === 0) // 5 % 2? = 1
                return false
        }

        return num > 1
    }

}