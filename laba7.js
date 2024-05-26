function checkEvenOdd(value) {
    if (typeof value === 'number') {
        return value % 2 === 0 ? 'Even' : 'Odd';
    }
    return '';
}

function sumFirstFivePrimes() {
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const primes = [];
    let number = 2;

    while (primes.length < 5) {
        if (isPrime(number)) {
            primes.push(number);
        }
        number++;
    }

    return primes.reduce((sum, prime) => sum + prime, 0);
}

function sumSeries(n) {
    let sum = 0;
    let currentNumber = 0;

    for (let i = 0; i < n; i++) {
        currentNumber = currentNumber * 10 + 1;
        sum += currentNumber;
    }

    return sum;
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd('text'));

console.log(sumFirstFivePrimes());

console.log(sumSeries(5));
