//[x]Determinar numero  máximo de colunas e linhas
//[x]Coletar dados de coluna e linhas
//[x]Criar célula
//[x]Somar as células
//[x]Criar campo na tela com o numero de celulas informado(Matriz de célula)
//[x]detectar clique
//[x]detectar de onde veio o Clique
//[]criar matriz com dados aleatórios
//[]Restringir a quantidade de numeros 1(bombas)(Dificuldade)
//[]Calcular minas adjacentes

var linhas = 0
var colunas = 0 
var celula = document.getElementById("canva")
var matriz = [[]]

function inserirLinha(){

    linhas = document.getElementById("linha")
    linhas = linhas.value
   
}

function inserirColuna(){

    colunas = document.getElementById("coluna")
    colunas = colunas.value
}


function criarCelula(lin,col){
    
    celula.innerHTML = celula.innerHTML + "<span id='" + lin.toString().concat(col.toString()) + "' class='celula' onclick='clicked("+lin.toString().concat(col.toString()) +")' > o </span>"

}


function start(){

    for(var i=0;i<linhas;i++){
        for(var y=0; y<colunas;y++){
            criarCelula(i,y)
            matriz[i][y] = 0
        }
        celula.innerHTML = celula.innerHTML + "<br>"
    }
}
function clicked(identidade){
    //document.getElementById("") = visited
    console.log(identidade)
}