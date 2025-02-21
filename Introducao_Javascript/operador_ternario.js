// Normalmente, podemos declarar condicionais dessa forma:

let resultado = "";

let preco = 50;

if (preco < 40)
{
    resultado = "Valor barato";
} else {
    resultado = "Valor caro";
}

console.log(resultado);

// No entanto, para algumas funcionalidades, é melhor usar operadores ternários:

resultado = preco < 40 ? "Livro barato" : "Livro caro";

console.log(resultado);
