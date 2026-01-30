const vendas = [
    // Cada objeto representa uma venda e tem três propriedades e 
    // seus respectivos valores:

    { produto: "Notebook", categoria: "Eletrônicos", valor: 3000 },
    { produto: "Mouse", categoria: "Periféricos", valor: 50 },
    { produto: "Teclado", categoria: "Periféricos", valor: 150 },
    { produto: "Monitor", categoria: "Eletrônicos", valor: 800 },
    { produto: "Webcam", categoria: "Periféricos", valor: 100 }
    
    // Casos de teste para validação:
    // { produto: "Notebook", categoria: null, valor: 3000 }
    // { produto: "Webcam", categoria: "Periféricos", valor: "abc" ou valor: -100 }
];

const totalPorCategoria = {};

// O for...of é um tipo de loop em JavaScript usado para iterar (percorrer) sobre elementos
// de um array ou outros iteráveis (como strings ou mapas). Ele é mais simples e direto do que
// o for tradicional, pois não requer índices manuais.
// Sintaxe básica: for (const elemento of array) { ... }
// elemento é uma variável temporária que representa cada item do array em cada iteração.

// No código, const venda of vendas significa: "Para cada objeto 
// venda no array vendas, execute o bloco de código dentro das chaves {}
// O loop começa no primeiro elemento do array (vendas[0], que é o
//  objeto { produto: "Notebook", categoria: "Eletrônicos", valor: 3000 }

for(const venda of vendas){
    // Validações dentro do loop
    if (!venda || typeof venda !== 'object') {
        console.warn('Item inválido no array vendas: não é um objeto', venda);
        continue; // Pula para a próxima iteração
    }
    if (!venda.categoria || typeof venda.categoria !== 'string') {
        console.warn('Categoria inválida para venda:', venda);
        continue; // Pula se categoria não for uma string válida
    }
    if (typeof venda.valor !== 'number' || venda.valor < 0) {
        console.warn('Valor inválido para venda:', venda);
        continue; // Pula se valor não for um número positivo
    }
    
    if(totalPorCategoria[venda.categoria]){
        totalPorCategoria[venda.categoria] += venda.valor;
        // totalPorCategoria[venda.categoria] = totalPorCategoria[venda.categoria] + venda.valor;
    }else{
        totalPorCategoria[venda.categoria] = venda.valor;
    }
}

console.log(totalPorCategoria);

// Primeira iteração (venda = { produto: "Notebook", categoria: "Eletrônicos", valor: 3000 })
    // venda.categoria é "Eletrônicos".
    // "Eletrônicos" não existe em totalPorCategoria, então
    // totalPorCategoria["Eletrônicos"] = 3000.
    // Estado atual: { "Eletrônicos": 3000 }.

// totalPorCategoria é declarada como um objeto vazio ({}) no início.
//  Ela será usada como um "mapa" (ou dicionário) para armazenar totais
//  agrupados por categoria.
// Dentro do loop, o código acessa propriedades do objeto venda atual
// venda.categoria: Obtém a categoria do produto (ex.: "Eletrônicos").
// venda.valor: Obtém o valor da venda (ex.: 3000).
// Verificação com if: O código verifica se a chave venda.categoria já
//  existe no objeto totalPorCategoria

