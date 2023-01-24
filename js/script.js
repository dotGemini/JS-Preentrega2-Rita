let running = true;
let Memoria = {
    operation: [],
    result: 0
};

function Calculadora (a, b, op) {

    Memoria.operation.push(op)
    if (b !== null) {
        Memoria.operation.push(b)
    }

    switch (op){

        case '+':
            Memoria.result = a+b;
            break
        
        case '-':
            Memoria.result = a-b;
            break

        case '/':
            Memoria.result = a/b;
            break

        case '*':
            Memoria.result = a*b;
            break

        case '=':
            running = false;
            return Memoria.result; 
    }
}

function Program(){

    let a = CheckValue(prompt ("Ingrese un numero"));
    Memoria.result = a;
    Memoria.operation.push(a)

    while (running) {
        let op = prompt ("Ingrese un operador valido: + - / *");
        if (op === "=") {
            alert ("resultado: " + Calculadora(Memoria.result, null, op))
            Memoria.operation.map((coso) => console.log(coso))
            console.log(Memoria);
            break
        }
        let b = CheckValue(prompt ("Ingrese otro numero"));
        Calculadora(Memoria.result, b, op)
    }
}

function CheckValue(a) {
    if (isNaN(a)) {
        if(a === "=")
            running = false;
        else{
            alert("Solo son validos valores numericos para operar")
        }
        return false;
    }
    return Number(a);
}

Program();


