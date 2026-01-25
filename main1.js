// Primeira iteração processadorDeTarefas(3, 1); tarefas = 3, prioridade = 1  state = 'INIT'
// entra no while state !== 'FINISHED' -> true || switch (state) é 'INIT' -> procura o case 'INIT':

function processadorDeTarefas(tarefas, prioridade) {
    let state = 'INIT';
    let contador = 0;
    let acumulador = 0;
    let tentativas = 0;
    let MAX_TENTATIVAS = 2;

    while (state !== 'FINISHED') {  // enquanto o estado for diferente de 'FINALIZANDO' entra no loop WHILE
        switch (state) {            // verifica o valor da variável 'state' e executa o case correspondente por exemplo: switch (state) é 'INIT'
            case 'INIT':            // se state for 'INIT' executa o bloco de código abaixo até o break se não for pula para o próximo case
                console.log("====== INICIANDO PROCESSAMENTO ======");
                if (tarefas > 0 && prioridade >= 1 && prioridade <= 3) {
                    state = 'VALIDATING';
                } else {
                    console.log("Parâmetros inválidos. Finalizando.");
                    state = 'ERROR';
                }
                break;
            case 'VALIDATING':
                console.log(`Validando tarefas: ${tarefas}, Tarefas com prioridade: ${prioridade}`);
                tentativas++;
                if (tentativas > MAX_TENTATIVAS) {
                    console.log("Muitas tentativas de Validação. Finalizando com erro.");
                    state = 'ERROR';
                } else if (prioridade === 3) {
                    console.log("Prioridade alta detectada. Pulando para processamento.");
                    state = 'PROCESSING_FAST';
                } else {
                    state = 'PROCESSING_NORMAL';
                }
                break;
            case 'PROCESSING_NORMAL':
                if (contador < tarefas) {
                    // console.log(`Processando tarefa normal ${contador + 1}/${tarefas}`);
                    console.log(`Processando tarefa normal ${contador + 1} de ${tarefas}`);
                    acumulador += contador * 2;
                    contador++;
                } else {
                    state = 'CALCULATING';
                }
                break;
            case 'PROCESSING_FAST':
                if (contador < tarefas) {
                    console.log(`Processando tarefa rápida ${contador + 1} de ${tarefas}`);
                    acumulador += contador * 5;
                    contador++;
                } else {
                    state = 'CALCULATING';
                }
                break;
            case 'CALCULATING':
                console.log(`Total acumulado: ${acumulador}`);
                if (acumulador > 50) {
                    console.log('Acumulador muito alto, necessário otimizar');
                    state = 'OPTIMIZING';
                } else {
                    state = 'FINALIZING';
                }
                break;
            case 'OPTIMIZING':
                console.log('Otimizando resultados...');
                acumulador = Math.floor(acumulador * 0.8);
                console.log(`Novo acumulador otimizado: ${acumulador}`);
                state = 'FINALIZING';
                break;
            case 'FINALIZING':
                console.log('=== Finalizando Processo ===');
                console.log(`Tarefas processadas: ${contador}`);
                console.log(`Resultado final: ${acumulador}`);
                console.log(`Tentativas de validação: ${tentativas}`);
                state = 'FINISHED';
                break;
            case 'ERROR':
                console.log('!!! ERRO NO SISTEMA !!!');
                console.log('Encerrando com falha');
                state = 'FINISHED';
                break;
            default:
                console.log('Estado desconhecido, abortando');
                state = 'FINISHED';
                break;
        }
    }
    return acumulador;
}

// Teste 1: Processamento normal
console.log('\n--- TESTE 1 ---');
processadorDeTarefas(3, 1);

// Teste 2: Processamento rápido
// console.log('\n--- TESTE 2 ---');
// processadorDeTarefas(4, 3);

// Teste 3: Erro
// console.log('\n--- TESTE 3 ---');
// processadorDeTarefas(0, 5);