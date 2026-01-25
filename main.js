// Parametro (n) é 3 passado para a função foo(3) Logo abaixo
//Início: n=3, state='RUNNING'
let mum = 3;
function foo(n) {
    console.log("Starting function foo with n =", n);
    let state = 'RUNNING';          //Inicia o estado como 'RUNNING' é diferente do valor e tipo de 'DONE'
    while (state !== 'DONE') {      //while? 'RUNNING'!=='DONE' → true → ENTRA no while
        switch (state) {            //switch: é 'RUNNING' caça o case 'RUNNING' como é o primeiro case, ENTRA nele
            case 'RUNNING':         //case 'RUNNING': ENTRA
                if (n === 0) {      //if n===0? 3===0 → false pula para o else porque o primeiro loop n é 3
                    state = 'END';
                } else {            //else: print "Function call", n=2
                    console.log("Function CAll!");
                    n--;        //decrementa n em 1 (n=2)
                }
                break;
            case 'END':
                console.log("End of function foo =", n);
                state = 'DONE';
                break;
        }
    }
}
foo(mum);

// Iteração 1:
//Inicia o estado como 'RUNNING' é diferente do valor e tipo de 'DONE'
//  while? 'RUNNING'!=='DONE' → true → ENTRA
//  switch: 'RUNNING'
//  case 'RUNNING': ENTRA
//  if n===0? 3===0 → false
//  else: print "Function call", n=2

// Iteração 2:
//  while? 'RUNNING'!=='DONE' → true → ENTRA
// switch: 'RUNNING'
//  case 'RUNNING': ENTRA
//  if n===0? 2===0 → false
//  else: print "Function call", n=1

// Iteração 3:
//  while? 'RUNNING'!=='DONE' → true → ENTRA
//  switch: 'RUNNING'
//  case 'RUNNING': ENTRA
//  if n===0? 1===0 → false
//  else: print "Function call", n=0

// Iteração 4:
//  while? 'RUNNING'!=='DONE' → true → ENTRA
//  switch: 'RUNNING'
//  case 'RUNNING': ENTRA
//  if n===0? 0===0 → TRUE!
//  state='END'

// Iteração 5:
//  while? 'END'!=='DONE' → true → ENTRA
//  switch: 'END'
//  case 'RUNNING': PULA
//  case 'END': ENTRA
//  print "End", state='DONE'

// Iteração 6:
//  while? 'DONE'!=='DONE' → false → SAI

// FIM