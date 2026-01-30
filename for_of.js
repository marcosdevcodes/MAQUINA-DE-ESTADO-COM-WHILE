const produtos = [
    {nome: "Notebook", preco: 250, estoque: 10},
    {nome: "Mouse", preco: 15, estoque: 0},
    {nome: "Teclado", preco: 30, estoque: 20},
    {nome: "Monitor", preco: 200, estoque: 0},
    {nome: "Impressora", preco: 150, estoque: 8}    
];

const produtosEmFalta = [];

// (produto) é uma variável temporária que representa o elemento atual em cada iteração
// produtos é o array que está sendo percorrido
for(const produto of produtos){ //of significa "de dentro de" ou "pertencente a" [produtos]
    if(produto.estoque === 0){
        console.log("Produto em falta:", produto.nome);
        produtosEmFalta.push(produto.nome);
    }
};

console.log("Produtos em Falta no Estoque:", produtosEmFalta);