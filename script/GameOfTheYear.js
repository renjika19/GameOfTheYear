var count = 0
var winnerCount = {x:0, o:0}

function gamePlay() {
  document.playersTurn = "X";
}

function playerWinCount(playerThatWon) {
  if(playerThatWon == "X") {
    winnerCount.x++;
    document.getElementById("xWin").innerHTML = playerThatWon +":"+ winnerCount.x 
  }else{
    winnerCount.o++;
    document.getElementById("oWin").innerHTML = playerThatWon +":"+ winnerCount.o
  }
}


function playerMessage() {
  document.getElementById("message").innerHTML = document.playersTurn + "'s Turn";
}

function nextMove(sections) {
  if(sections.innerHTML == "") {
    sections.innerHTML = document.playersTurn;
    let winner = getWinner(document.playersTurn); 
    alertPlayer(winner);
    changePlayer();
    playerMessage();
    count++
    if(count === 9) {
      document.getElementById("message").innerHTML = ("DRAW")
    }
  } else if(sections.innerText === "X" || sections.innerText === "O"){
    playerMessage()
    document.getElementById("message").innerHTML = "Choose Another Square";
  } 
}

function alertPlayer(winner) {
  if (winner) {
    document.getElementById("message").innerHTML = ("Winner Winner Chicken Dinner");
    playerWinCount(document.playersTurn)
  }
}

function restart() {
  var td = document.getElementsByTagName("td");
  for(let i = 0; i < td.length; i++) {
    td[i].innerHTML = "";
    document.getElementById("message").innerHTML = document.playersTurn + "'s To Start Game";
    count = 0;
    gamePlay();
    
  }
}

function changePlayer() {
  document.playersTurn = (document.playersTurn=="X")?"O":"X";
}

function getWinner(playersTurn) {
  if(document.getElementById("A1").innerText === playersTurn && document.getElementById("B2").innerText === playersTurn && document.getElementById("C3").innerText === playersTurn)return true;
  else if(document.getElementById("A1").innerText === playersTurn && document.getElementById("A2").innerText === playersTurn && document.getElementById("A3").innerText === playersTurn)return true;
  else if(document.getElementById("A1").innerText === playersTurn && document.getElementById("B1").innerText === playersTurn && document.getElementById("C1").innerText === playersTurn)return true;
  else if(document.getElementById("A2").innerText === playersTurn && document.getElementById("B2").innerText === playersTurn && document.getElementById("C2").innerText === playersTurn)return true;
  else if(document.getElementById("A3").innerText === playersTurn && document.getElementById("B3").innerText === playersTurn && document.getElementById("C3").innerText === playersTurn)return true;
  else if(document.getElementById("B1").innerText === playersTurn && document.getElementById("B2").innerText === playersTurn && document.getElementById("B3").innerText === playersTurn)return true;
  else if(document.getElementById("A2").innerText === playersTurn && document.getElementById("B2").innerText === playersTurn && document.getElementById("C2").innerText === playersTurn)return true;
  else if(document.getElementById("C1").innerText === playersTurn && document.getElementById("C2").innerText === playersTurn && document.getElementById("C3").innerText === playersTurn)return true;
  return false;

}

