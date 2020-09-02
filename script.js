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
//[]Embaralhar as posições das minas
//[x]Calcular minas adjacentes
//[]Timer



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
function time(){
    var segundos = document.getElementById("sec").innerHTML
    var minutos = document.getElementById("min").innerHTML

    if(segundos < 59){
        segundos++
        document.getElementById("sec").innerHTML = segundos
    }else{
        minutos++
        document.getElementById("min").innerHTML=minutos
        document.getElementById("sec").innerHTML="00"
    }
}

function criarCelula(lin,col){
    var id = lin.toString().concat(col.toString())
    celula.innerHTML = celula.innerHTML + `
   
    <span id="${id}" class="celula" onclick="clicked('${id}')" > &#128550; </span>`

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
    setInterval(time(),1000)//??
    document.getElementById("container").innerHTML = ""
    document.getElementById("container").style.width = `${((colunas-1)*10)}%`                      
    NumeroBombas = 0
    for(var i=0;i<linhas;i++){
        matriz[i] = []
        for(var y=0; y<colunas;y++){
            criarCelula(i,y)
            matriz[i][y] = numberGenerator(level)
        }
        celula.innerHTML = celula.innerHTML + "<br>"
    }
    //function embaralhar(){}
    document.getElementById("start").value = "Restart"
    
}
function subMatriz(posição){
    //Caso clique no meio
    var inicioX = posição[0] - 1
    var inicioY = posição[1] - 1
    var fimX = parseInt(posição[0]) + 1
    var fimY = parseInt(posição[1]) + 1
    var cont = 0

    if(inicioX < 0){
        inicioX = posição[0]
    }
    
    //Caso clique na lateral superior
    if(inicioY < 0){
        inicioY = posição[1]
    }
    
    if( fimX > matriz.length - 1 ){
        fimX = posição[0]
        
    }

    if(fimY > matriz[matriz.length - 1].length - 1){

        fimY = posição[1]
    }
    
    for(var i = inicioX; i<= fimX; i++){
        for(var y = inicioY; y <= fimY; y++){
            if(matriz[i][y] == 1){
                cont++
            }
        }
    }
    
    
    
    
    /*
    */
    console.log(` posição x:${inicioX}`)
    console.log(` posição y:${inicioY}`)
    console.log(` fim x:${fimX}`)
    console.log(` fim y:${fimY}`)
    console.log(` cont:${cont}`)
    return cont
}
function contador(){
        numeroPisados = document.getElementsByClassName("pisado")
        numeroLivres = document.getElementsByClassName("celula")
}
function clicked(identidade){
    if(matriz[identidade[0]][identidade[1]] == 1){
        console.log("game over")
        subMatriz(identidade)
        document.getElementById(identidade).innerHTML = `<i class="fa fa-bomb"></i>`
        elemento = document.getElementById(identidade.trim())
        elemento.className = "explodido"
    }else{
          elemento = document.getElementById(identidade.trim())
          elemento.className = "pisado"
          contador()
          if(numeroPisados.length  == (linhas*colunas) - NumeroBombas){
            console.log("End game")
            clearInterval()
          }
          document.getElementById(identidade).innerHTML = subMatriz(identidade)
          
          console.log(identidade)

    }
    
}