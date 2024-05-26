// Функція для перевірки, чи є аргумент числом і чи є це число парним або непарним
function checkEvenOdd(value) {
    if (typeof value === 'number') {
        return value % 2 === 0 ? 'Even' : 'Odd';
    }
    return '';
}

// Функція для знаходження простих чисел та повернення суми перших п'яти простих чисел
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

// Функція для обчислення суми ряду з n чисел виду 1 + 11 + 111 + 1111 + ...
function sumSeries(n) {
    let sum = 0;
    let currentNumber = 0;

    for (let i = 0; i < n; i++) {
        currentNumber = currentNumber * 10 + 1;
        sum += currentNumber;
    }

    return sum;
}

// Виклики функцій для тестування

// Приклади використання для функції checkEvenOdd
console.log(checkEvenOdd(4)); // "Even"
console.log(checkEvenOdd(7)); // "Odd"
console.log(checkEvenOdd('text')); // ""

// Приклад використання для функції sumFirstFivePrimes
console.log(sumFirstFivePrimes()); // 28 (2 + 3 + 5 + 7 + 11)

// Приклад використання для функції sumSeries
console.log(sumSeries(5)); // 12345 (1 + 11 + 111 + 1111 + 11111)
