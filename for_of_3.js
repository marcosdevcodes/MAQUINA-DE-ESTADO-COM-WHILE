const carrinho = [
    { item: "Camisa", quantidade: 3, precoUnitario: 50 },
    { item: "Calça", quantidade: 2, precoUnitario: 100 },
    { item: "Tênis", quantidade: 1, precoUnitario: 200 },
    { item: "Boné", quantidade: 5, precoUnitario: 30 }
];

let subTotal = 0;
let descontoTotal = 0;
const itensProcessados = [];

//Não há desconto se a quantidade for menor que 3
for (const item of carrinho) {

    //Exemplo: Para "Camisa" (quantidade: 3, precoUnitario: 50), valorItem = 3 * 50 = 150.
    const valorItem = item.quantidade * item.precoUnitario;
    let desconto = 0;

    // Desconto progresivo por quantidade
    if (item.quantidade >= 5) {

        // Exemplo: Para "Boné" (quantidade: 5, valorItem: 150), desconto = 150 * 0.15 = 22.5.
        desconto = valorItem * 0.15; // 15% de desconto

    } else if (item.quantidade >= 3) {

        desconto = valorItem * 0.10; // 10% de desconto

    }

    //Senão (quantidade < 3): Nenhum desconto → desconto = 0
    //Exemplo: Para "Tênis" (quantidade: 1), desconto = 0
    //O desconto é aplicado apenas ao item atual, não afeta outros itens.

    //Exemplo: Para "Camisa", valorFinal = 150 - 15 = 135
    const valorFinal = valorItem - desconto;

    subTotal += valorItem;//Soma o valor original de todos os itens.
    descontoTotal += desconto;//Soma os descontos de todos os itens

    itensProcessados.push({
        item: item.item,
        quantidade: item.quantidade,
        valorOriginal: valorItem,
        desconto: desconto,
        valorFinal: valorFinal
    });
}

const total = subTotal - descontoTotal;//calcula o valor total a pagar.

console.log("Itens:", itensProcessados);
console.log(`Subtotal: R$ ${subTotal}`);
console.log(`Desconto: R$ ${descontoTotal}`);
console.log(`Total: R$ ${total}`);

//  Como os Itens São Armazenados em itensProcessados
// itensProcessados começa como um array vazio ([]).
// Dentro do loop, para cada item processado, um novo objeto é criado e adicionado ao array usando push().
// O objeto adicionado contém um resumo completo do item após o processamento:
// item: Nome do produto (copiado de item.item).
// quantidade: Quantidade (copiada de item.quantidade).
// valorOriginal: O valor calculado antes do desconto (valorItem).
// desconto: O valor do desconto aplicado (pode ser 0).
// valorFinal: O valor após desconto.