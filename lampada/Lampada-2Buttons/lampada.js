const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampReset (){ //lampada quebrada
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn (){
    if ( !lampReset() ) {
        lamp.src = './img/ligada.png';
    }
}

function lampOff(){
    if ( !lampReset() ) {   
        lamp.src = './img/desligada.png';
    }
}

function lampBroken(){ //clicar na imagem a lampada irá quebrar
    lamp.src = './img/quebrada.png'
}

turnOn.addEventListener ('click', lampOn); //acende
turnOff.addEventListener ('click', lampOff); //apaga
lamp.addEventListener('dblclick', lampBroken);