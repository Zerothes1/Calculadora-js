const txtop1 = document.getElementById("op1")
const txtoperador = document.getElementById("operador")
const txtop2 = document.getElementById("op2")
const btncalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

function calcular() {
    const operador = txtoperador.value
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat(txtop2.value)


    if(operador == "+" || operador == "-" ||operador == "*" ||operador == "/" 
        || !isNaN(op1) == false || !isNaN(op2) == false) 
        {
        let resultado ;
        switch(operador){
            case "+" :
                resultado = op1 + op2
                break;
            case "-" :
                resultado = op1 - op2
                break;
            case "*" :
                resultado = op1 * op2
                break;
            case "/" :
                resultado = op1 / op2
                break;

        }
        pResultado.innerText = "="+ resultado
        
    }else{
      
        
        pResultado.innerText = "no es posible"
    }
}

