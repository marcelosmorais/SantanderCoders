var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = [] //  < 160
var grupoB = [] // < 170
var grupoC = [] // >= 170

for(var i = 0; i < alunos.length; i++){
  if(alunos[i] < 160){
    grupoA.push(alunos[i])    
  }else if(alunos[i] < 170){
    grupoB.push(alunos[i])
  }else{
    grupoC.push(alunos[i])
  }
}
console.log(grupoA.sort())
console.log(grupoB.sort())
console.log(grupoC.sort())