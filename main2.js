

class FooService{
    constructor(n){                 // Parametri n é 3 passado la em baixo dentro new FooService(3)
        this.n = n;
        this.state = "RUNNING";     // Estado inicial de state é RUNNING
    }

    // Método run é chamado la embaixo com foo.run() e inicia o loop while
    run(){       
        // Enquanto o estado não for DONE, continue chamando o método correspondente ao estado atual                      
        while(this.state !== "DONE"){
            console.log("Current State:", this.state);
            this[this.state]();     // Chama o método correspondente ao estado atual
            // Exemplo: se state for "RUNNING", chama this.RUNNING() que é o método RUNNING() abaixo
        }
    }

    RUNNING(){
        if(this.n === 0){       // Se n for 0, mude o estado para END e chame o método END na próxima iteração
            this.state = "END";
        }else{
            // Se n não for 0, continue executando o código dentro do estado RUNNING
            console.log("Function Call with n =", this.n);
            this.n--;        // Decrementa n em 1 a cada chamada n - 1
            // O estado permanece como RUNNING, então na próxima iteração do loop while, RUNNING() será chamado novamente
        }
    }

    // Método END é chamado quando o estado é alterado para END ou seja quando n chega a [0]
    END(){
        console.log("Finished execution.");
        this.state = "DONE";    // Altera o estado para DONE para sair do loop while na próxima iteração
        // Na próxima iteração do loop while em run(), como o estado agora é DONE, o loop termina
    }
}

const foo = new FooService(3);
foo.run();