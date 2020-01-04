var balance = 0;
var Scallywags = 0;
var pirates = 0;
var firstmates = 0;
var captains = 0;
var dps = 0;
var manualClick = 1;

function update() {
    document.getElementById('doubloons').value = balance;
    document.getElementById('dps').value = dps;

    document.title = balance + " Doubloons";
    document.getElementById('ammountScallywags').innerHTML = "You own " + Scallywags + " Scallywags";
    document.getElementById('costScallywags').innerHTML = (5*(Scallywags*Scallywags+1)) + " Doubloons";
    document.getElementById('ammountPirates').innerHTML = "You own " + pirates + " Pirates";
    document.getElementById('costPirates').innerHTML = (250*(pirates*pirates+1)) + " Doubloons";
    document.getElementById('ammountFMates').innerHTML = "You own " + firstmates + " First Mates";
    document.getElementById('costFMates').innerHTML = (1000*(firstmates*firstmates+1)) + " Doubloons";
    document.getElementById('ammountCaptains').innerHTML = "You own " + captains + " First Mates";
    document.getElementById('costCaptains').innerHTML = (50000*(captains*captains+1)) + " Doubloons";
}

function timer(){
    balance = balance + Scallywags + (pirates*5) + (firstmates*25) + (captains*125);
    dps = Scallywags + (pirates*5) + (firstmates*25) + (captains*125);
    manualClick = 1+Math.round(dps*0.1);
    update();
}
setInterval(timer, 1000);

function add() {
    balance = balance + manualClick;
    update();
}

function save() {
    localStorage.setItem("balance", balance);
    localStorage.setItem("Scallywags", Scallywags);
    localStorage.setItem("pirates", pirates);
    localStorage.setItem("firstmates", firstmates);
    localStorage.setItem("captains", captains);
}

function load() {
    balance = localStorage.getItem("balance");
    balance = parseInt(balance);
    Scallywags = localStorage.getItem("Scallywags");
    Scallywags = parseInt(Scallywags);
    pirates = localStorage.getItem("pirates");
    pirates = parseInt(pirates);
    firstmates = localStorage.getItem("firstmates");
    firstmates = parseInt(firstmates);
    captains = localStorage.getItem("captains");
    captains = parseInt(captains);
    update();
}

function buyScallywags() {
    if (balance >= (5*(Scallywags*Scallywags+1))) {
        balance = balance - (5*(Scallywags*Scallywags+1));
        Scallywags = Scallywags + 1;
        update();
    }
}
function buyPirate() {
    if(balance >= (250*(pirates*pirates+1))){
        balance = balance - (250*(pirates*pirates+1));
        pirates = pirates + 1;
        update();
    }
}
function buyFMate() {
    if(balance >= (1000*(firstmates*firstmates+1))){
        balance = balance - (1000*(firstmates*firstmates+1));
        firstmates = firstmates + 1;
        update();
    }
}
function buyCaptain() {
    if(balance >= (1000*(captains*captains+1))){
        balance = balance - (1000*(captains*captains+1));
        captains = captains + 1;
        update();
    }
}