
function calculadoraIndem (){
let menu = confirm("Calculadora de Indemnizaciones v0.1\n \nDesea calcular su indemnización ahora?")

while(menu){
let fechaIngreso = Number(prompt("Ingrese el año en el que entró a trabajar a la empresa"))
let fechaDespido = Number(prompt("Ingrese el año en el que fue desvinculado de la empresa"))
let SueldoBruto = Number(prompt("Ingrese su sueldo bruto mas grande ganado durante el último año"))
let preAviso = prompt("Recibió el Pre-aviso? Responda Si o No")
let dineroPreAviso = 0
if(preAviso.toUpperCase()=="NO"){
    dineroPreAviso = (SueldoBruto/30) * 15
}


const calcularAniosTrabajados = (fechaDespido, fechaIngreso) => { 
    let resultado = fechaDespido - fechaIngreso
    return resultado
} 

let dineroApagar = (SueldoBruto * calcularAniosTrabajados(fechaDespido, fechaIngreso)) + dineroPreAviso
menu = confirm(`El monto a cobrar es $${dineroApagar}\n \nDesea calcular su indemnizacion otra vez?`)
}
alert("Gracias por utilizar Calculadora de Indemnizaciones v0.1\nQue tenga un buen día.")
}


calculadoraIndem()