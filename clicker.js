var balance = 0;
var Scallywags = 0;
var pirates = 0;
var firstmates = 0;
var captains = 0;
var sloops = 0;
var brigantines = 0;
var galleons = 0;
var spaceships = 0;
var dps = 0;
var manualClick = 1;
var alienTech = 0;

function removeSpaceship() {
    document.getElementById('spaceship').style.display = 'none';
    document.getElementById('winner').style.display = 'none';
}

function update() {
    document.getElementById('doubloons').innerHTML = "Doubloons: " + balance;
    document.getElementById('dps').innerHTML = "DPS: " + dps;

    document.title = balance + " Doubloons";
    document.getElementById('ammountScallywags').innerHTML = "You have " + Scallywags + " Scallywags";
    document.getElementById('costScallywags').innerHTML = (5*(Scallywags+1)) + " Doubloons";
    document.getElementById('ammountPirates').innerHTML = "You have " + pirates + " Pirates";
    document.getElementById('costPirates').innerHTML = (250*(pirates+1)) + " Doubloons";
    document.getElementById('ammountFMates').innerHTML = "You have " + firstmates + " First Mates";
    document.getElementById('costFMates').innerHTML = (1000*(firstmates+1)) + " Doubloons";
    document.getElementById('ammountCaptains').innerHTML = "You have " + captains + " Captains";
    document.getElementById('costCaptains').innerHTML = (50000*(captains+1)) + " Doubloons";
    document.getElementById('ammountSloops').innerHTML = "You own " + sloops + " Sloops";
    document.getElementById('costSloops').innerHTML = (1000000*(sloops+1)) + " Doubloons";
    document.getElementById('ammountBrigantines').innerHTML = "You own " + brigantines + " Brigantines";
    document.getElementById('costBrigantines').innerHTML = (50000000*(brigantines+1)) + " Doubloons";
    document.getElementById('ammountGalleons').innerHTML = "You own " + galleons + " Galleons";
    document.getElementById('costGalleons').innerHTML = (1000000000*(galleons+1)) + " Doubloons";
    document.getElementById('ammountSpaceShip').innerHTML = "You own " + spaceships + " Pirate Space Ships";
    document.getElementById('costSpaceShip').innerHTML = (100000000000*(spaceships+1)) + " Doubloons";
}

function timer(){
    balance = balance + Scallywags + (pirates*5) + (firstmates*25) + (captains*125) + (sloops*1000) + (brigantines*10000) + (galleons*500000) + (spaceships*1000000);
    
    dps = Scallywags + (pirates*5) + (firstmates*25) + (captains*125) + (sloops*1000) + (brigantines*10000) + (galleons*500000) + (spaceships*1000000);
    
    manualClick = 1+Math.round(dps*0.1);
    update();
}
setInterval(timer, 1000);

function add() {
    balance = balance + manualClick;
    update();
}

function buyScallywags() {
    if (balance >= (5*(Scallywags+1))) {
        balance = balance - (5*(Scallywags+1));
        Scallywags = Scallywags + 1;
        update();
    }
}
function buyPirate() {
    if(balance >= (250*(pirates+1))){
        balance = balance - (250*(pirates+1));
        pirates = pirates + 1;
        update();
    }
}
function buyFMate() {
    if(balance >= (1000*(firstmates+1))){
        balance = balance - (1000*(firstmates+1));
        firstmates = firstmates + 1;
        update();
    }
}
function buyCaptain() {
    if(balance >= (50000*(captains+1))){
        balance = balance - (50000*(captains+1));
        captains = captains + 1;
        update();
    }
}
function buySloop() {
    if (balance >= (1000000*(sloops+1))){
        if ((Scallywags >= 50)&&(pirates >= 20)&&(firstmates >= 5)&&(captains >= 1)){
            balance = balance - (1000000*(sloops+1));
            Scallywags = Scallywags - 50;
            pirates = pirates - 20;
            firstmates = firstmates - 5;
            captains = captains - 1;

            sloops = sloops + 1;
        }
    }
    update();
}
function buyBrigantine() {
    if (balance >= (50000000*(brigantines+1))){
        if ((Scallywags >= 100)&&(pirates >= 50)&&(firstmates >= 10)&&(captains >= 2)){
            balance = balance - (50000000*(brigantines+1));
            Scallywags = Scallywags - 100;
            pirates = pirates - 50;
            firstmates = firstmates - 10;
            captains = captains - 2;

            brigantines = brigantines + 1;
        }
    }
    update();
}

function buyGalleon() {
    if (balance >= (1000000000*(galleons+1))){
        if ((Scallywags >= 50)&&(pirates >= 100)&&(firstmates >= 50)&&(captains >= 5)){
            balance = balance - (1000000000*(galleons+1));
            Scallywags = Scallywags - 50;
            pirates = pirates - 100;
            firstmates = firstmates - 50;
            captains = captains - 5;

            galleons = galleons + 1;
        }
    }
    update();
}

function buyAlienTech() {
    if (balance >= 50000000000){
        balance = balance - 50000000000;
        alienTech = 1;
        document.getElementById('spaceship').style.display = 'block';
        document.getElementById('alienTech').style.display = 'none';
    }
    update();
}

function buySpaceShip() {
    if (alienTech = 1){
        if (balance >= (100000000000*(spaceships+1))){
            if ((Scallywags >= 200)&&(pirates >= 200)&&(firstmates >= 100)&&(captains >= 50)){
                balance = balance - (100000000000*(spaceships+1));
                Scallywags = Scallywags - 200;
                pirates = pirates - 200;
                firstmates = firstmates - 100;
                captains = captains - 50;

                spaceships = spaceships + 1;
                
                if (confirm("Congratulations! You made it to space and won the game! \n\nClick 'OK' to win or 'Cancel' to keep playing.")) {
                    document.getElementById('winner').style.display = 'block';
                    window.open("Winner.html");
                } else {
                    document.getElementById('winner').style.display = 'block';
                }
            }
        }
    }
    update();
}