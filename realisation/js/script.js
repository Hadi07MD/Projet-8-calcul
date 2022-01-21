


var a,b,aString,bString,resulta,operation;




function oncklikNumbre(number){
    if(a == undefined){
        if(aString == undefined) aString = '';
        aString += number;
    } 
    else {
        if(bString == undefined) bString = '';
        bString += number;
    } 

    afficher()
}




function afficher(number) {
    var afficher = document.getElementById("afficher")
    afficher.value = ""

    if (a != undefined && b != undefined && operation != undefined )
    { afficher.value = number }
    
 else {
if (aString != undefined ) { afficher.value += aString}
if (operation != undefined ) { afficher.value += operation}
if (bString != undefined ) { afficher.value += bString}

}
}

function Operation(operationParm) {
a= parseFloat(aString)
    if ( operation== undefined)
    {operation= operationParm}
 
 
    afficher()   

}

function egaLe() {
    a= parseFloat(aString);
    b= parseFloat(bString);

resulta = caLcul(a,b,operation)

afficher(resulta)
}


function caLcul(a,b, operation) {
 
 var resulta = undefined
 
switch (operation) {
    case "+":
        resulta = a+b
        break;
    case "-":
        resulta = a-b

        break;

        case "*":
        resulta = a*b
        break;

        case "/":
        resulta = a/b

        break;

    default:
        break;

        
}
return resulta
}


function Suprime() {

    a= undefined
    aString= undefined
    bString= undefined
    b= undefined
    operation= undefined


 
var afficher = document.getElementById("afficher")
afficher.value=""

    
}

// function onclickSuprime() {

//     var afficher = document.getElementById("afficher")
// afficher.value = ""
//     if (aString != undefined) {   aString = undefined}
//     // if (operation != undefined) {   afficher.value =operation}
//     // if (bString != undefined) {   afficher.value =bString}

// }
