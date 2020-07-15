// Esse array é utilizado dentro das funções. Cada placa neste array representa
// uma entrada do respectivo veículo no estacionamento. Não é necessário alterar
// esse array.
var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142','RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333','AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525'
 ]
 
 function calcularNumeroDeEntradas(placa){
   var totPlaca = []
   var qtd = 0
   for(var i = 0; i < placas.length; i++){
     if(placa == placas[i]){
       qtd =  totPlaca.push(placas[i])
        //qtd = qtd + 1                          
     }         
   }
   return qtd   
 }
 
 function calcularValorDevido(placa){
   var entradas = calcularNumeroDeEntradas(placa)
   var valorPagar = 0
   var alem = (entradas - 20) * 5
 
   console.log("Entradas " + entradas)
 
   if(entradas <= 20){
     valorPagar = entradas * 20
     console.log("VALOR A PAGAR R$"+ valorPagar)
   }else if(entradas > 20){
       valorPagar = 200 +  alem
       console.log("VALOR A PAGAR R$"+ valorPagar)
   }
    
 }
 var placa = 'AKX-3333'
 calcularValorDevido(placa)
 
 