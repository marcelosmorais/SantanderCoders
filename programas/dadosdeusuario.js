var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]

function maiorAlto(usuario){
  for(var i = 0; i < usuario.length;i++){
    if(usuario[1] >= 18 && usuario[2] >= 170){
        console.log(`O Usuario ${usuario[0]} com ${usuario[1]} anos de Idade e Altura ${usuario[2]} pode fazer o exercico`)
            return true
    }else{
        console.log(`O Usuario ${usuario[0]} com ${usuario[1]} anos de Idade e Altura ${usuario[2]} não pode fazer o exercico`)
            return false
    }
    //console.log(`O Usuario ${usuario[0]} com  Idade ${usuario[1]} e Altura ${usuario[2]} pode fazer o exercico`)    
  }
}

maiorAlto(usuario1)