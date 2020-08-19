//[x]Determinar numero  máximo de colunas e linhas
//[x]Coletar dados de coluna e linhas e level
//[x]Criar célula
//[x]Somar as células
//[x]Criar campo na tela com o numero de celulas informado(Matriz de célula)
//[x]detectar clique
//[x]detectar de onde veio o Clique
//[x]criar matriz com dados aleatórios
//[x]Mudar estado para pisado
//[x]A primeira linha de celulas não se reconhece o id 
//[x]Detectar pisar na bomba
//[x]Set game over
//[x]set Restart
//[x]permitir somente um único Start
//[]Restringir a quantidade de numeros 1(bombas)(Dificuldade)
//[]Calcular minas adjacentes


var linhas = 0
var colunas = 0 
var level = 0
var celula = document.getElementById("container")
var matriz = []
var elemento = null
var numeroPisados 
var numeroLivres
var NumeroBombas = 0

function inserirLinha(){

    linhas = document.getElementById("linha")
    linhas = linhas.value
   
}

function inserirColuna(){

    colunas = document.getElementById("coluna")
    colunas = colunas.value
}

function inserirLevel(){

    level = document.getElementById("level")
    level = level.value * 2
}


function criarCelula(lin,col){
    var id = lin.toString().concat(col.toString())
    celula.innerHTML = celula.innerHTML + `<span id="${id}" class="celula" onclick="clicked('${id}')" > o </span>`

}

function numberGenerator(level){
    var numero = Math.round(Math.random())
    if(numero == 1){

        NumeroBombas++
    }
    if(NumeroBombas > level){
        return 0 
    }
    return numero
}

function start(level){
    document.getElementById("container").innerHTML = ""
    NumeroBombas = 0
    for(var i=0;i<linhas;i++){
        matriz[i] = []
        for(var y=0; y<colunas;y++){
            criarCelula(i,y)
            matriz[i][y] = numberGenerator(level)
        }
        celula.innerHTML = celula.innerHTML + "<br>"
    }
    document.getElementById("start").value = "Restart"
}
function contador(){
        numeroPisados = document.getElementsByClassName("pisado")
        numeroLivres = document.getElementsByClassName("celula")
}
function clicked(identidade){
    if(matriz[identidade[0]][identidade[1]] == 1){
        console.log("game over")
    }else{
          elemento = document.getElementById(identidade.trim())
          elemento.className = "pisado"
          contador()
          if(numeroPisados.length  == (linhas*colunas) - NumeroBombas){
            console.log("End game")
          }
          console.log(identidade)
    }
    
}