'use strict'

var gNextNum;
var gTimePassed;
var gSecsInterval;

console.log("hello")

function cleanBoard() {
    var tds = document.querySelectorAll('td.clicked');
    for (var i=0; i<tds.length; i++) {
        tds[i].classList.remove('clicked');
    }
}

function updateNextNum() {
    var elSpanNextNum = document.querySelector('#spanNextNum');
    console.log('elSpanNextNum-111', elSpanNextNum);
            
    elSpanNextNum.innerText = gNextNum;
}
function updateTime() {
    var elSpanTimer = document.getElementById('spanTimer');
            
    elSpanTimer.innerText = gTimePassed / 10;
}

function restartGame() {
    if (gSecsInterval) clearInterval(gSecsInterval);
    gNextNum    = 1;
    gTimePassed  = 0;
    gSecsInterval = undefined;
    cleanBoard();
    updateNextNum();
    updateTime();
}

function cellClicked(elNum) {
    var clickedNum = +elNum.innerText;

    if (gNextNum === clickedNum) {
        if (!gSecsInterval) {
            gSecsInterval = setInterval(() => {
                gTimePassed++;
                updateTime();
                
            }, 100)        
        }

        elNum.classList.add('clicked');
        
        if (gNextNum === 9) {
        //    console.log('Victory! took you: ', gSecsPassed, ' seconds');
           alert('Victory! time: ' + gTimePassed/10)
           clearInterval(gSecsInterval);
            
        } else {
            gNextNum++;
            updateNextNum();
        }

    }
    
}

