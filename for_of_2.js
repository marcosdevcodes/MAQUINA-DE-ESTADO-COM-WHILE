const usuarios = [
    {nome: "Ana", idade: 28, ativo: true},
    {nome: "Bruno", idade: 35, ativo: false},
    {nome: "Carla", idade: 22, ativo: true},
    {nome: "Daniel", idade: 30, ativo: false},
    {nome: "Eva", idade: 26, ativo: true},
    {nome: "Felipe", idade: 17, ativo: true},
    {nome: "Gabriela", idade: 19, ativo: false}
    
];

const usuariosAtivosAdultos  = [];


for(const usuario of usuarios){
    // Verifica se o usuário é maior de idade e está ativo
    if(usuario.idade >= 18 && usuario.ativo){
        usuariosAtivosAdultos.push({
            nomeCompleto: usuario.nome.toUpperCase(),
            maioridade: true,
            status: "ATIVO"
        })
    }else if(usuario.idade >= 18 && !usuario.ativo){
        usuariosAtivosAdultos.push({
            nomeCompleto: usuario.nome.toUpperCase(),
            maioridade: true,
            status: "INATIVO"
        })
    }   else{
        usuariosAtivosAdultos.push({
            nomeCompleto: usuario.nome.toUpperCase(),
            maioridade: false,
            status: usuario.ativo ? "ATIVO" : "INATIVO"
        })
    }
}

console.log(usuariosAtivosAdultos);