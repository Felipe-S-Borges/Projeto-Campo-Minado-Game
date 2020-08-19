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
//[]Restringir a quantidade de numeros 1(bombas)(Dificuldade)
//[]Calcular minas adjacentes

var linhas = 0
var colunas = 0 
var level = 0
var celula = document.getElementById("container")
var matriz = []
var elemento = null

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
    level = level.value
}


function criarCelula(lin,col){
    var id = lin.toString().concat(col.toString())
    celula.innerHTML = celula.innerHTML + `<span id="${id}" class="celula" onclick="clicked('${id}')" > o </span>`

}

function numberGenerator(level){

    return Math.round(Math.random())
}

function start(level){

    for(var i=0;i<linhas;i++){
        matriz[i] = []
        for(var y=0; y<colunas;y++){
            criarCelula(i,y)
            matriz[i][y] = numberGenerator(level)
        }
        celula.innerHTML = celula.innerHTML + "<br>"
    }
}
function clicked(identidade){
    elemento = document.getElementById(identidade.trim())
    elemento.className = "pisado"
    console.log(identidade)
}