// Até ES5

function ola()
{
    return "Aprendendo Java Script";
}

console.log(ola());

// Com ES6

const ola2 = () => {
    return "Aprendendo arrow functions";
}

console.log(ola2());

const somar = (num1, num2) => {
    return num1 + num2;
}

console.log(somar(5,8))