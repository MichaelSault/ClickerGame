var cookiecount = 0;
var autoClick = 0;
var miners = 0;
var cps = 0;
var manualClick = 1;

function update() {
    document.getElementById('text').value = cookiecount;
    document.getElementById('cps').value = cps;

    document.title = cookiecount + " Cookies";
    document.getElementById('ammountAutoClick').innerHTML = "You own " + autoClick + " Auto Clickers";
    document.getElementById('costAutoClick').innerHTML = ((autoClick+1)*12) + " Cookies";
    document.getElementById('ammountMiners').innerHTML = "You own " + miners + " Miners";
    document.getElementById('costMiners').innerHTML = ((miners+1)*36) + " Cookies";
}

function timer(){
    cookiecount = cookiecount + autoClick + (miners*5);
    cps = autoClick + (miners*5);
    manualClick = 1+Math.round(cps*0.1);
    update();
}
setInterval(timer, 1000);

function add() {
    cookiecount = cookiecount + manualClick;
    update();
}

function save() {
    localStorage.setItem("cookiecount", cookiecount);
    localStorage.setItem("autoClick", autoClick);
    localStorage.setItem("miners", miners);
}

function load() {
    cookiecount = localStorage.getItem("cookiecount");
    cookiecount = parseInt(cookiecount);
    autoClick = localStorage.getItem("autoClick");
    autoClick = parseInt(autoClick);
    miners = localStorage.getItem("miners");
    miners = parseInt(miners);
    update();
}

function buyAutoClick() {
    if (cookiecount >= ((autoClick+1)*12)) {
        cookiecount = cookiecount - ((autoClick+1)*12);
        autoClick = autoClick + 1;
        update();
    }
}
function buyMiner() {
    if(cookiecount >= (miners+1)*36){
        cookiecount = cookiecount - ((miners+1)*36);
        miners = miners + 1;
        update();
    }
}