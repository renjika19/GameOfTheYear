var count = 0
var winnerCount = {x:0, o:0}


function gamePlay() {
  document.playersTurn = "X";
  document.getElementById("startOver").addEventListener("click", restart);
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

function users(sections) {
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
  } else if(sections.innerHTML === "X" || sections.innerHTML === "O"){
    playerMessage()
    document.getElementById("message").innerHTML = "Choose Another Square";
  } 
}

function alertPlayer(winner) {
  if (winner) {
    document.getElementById("winnerMessage").innerHTML = ("Winner Winner Chicken Dinner");
    playerWinCount(document.playersTurn)
  }
}

function restart() {
  var td = document.getElementsByTagName("td");
  for(let i = 0; i < td.length; i++) {
    td[i].innerHTML = "";
    document.getElementById("message").innerHTML = document.playersTurn + "'s To Start Game"
    document.getElementById("winnerMessage").innerHTML = "";
    count = 0;
    gamePlay();
  }
}


function changePlayer() {
  document.playersTurn = (document.playersTurn=="X")?"O":"X";
}

function getWinner(playersTurn) {
  if(document.getElementById("A1").innerHTML === playersTurn && document.getElementById("B2").innerHTML === playersTurn && document.getElementById("C3").innerHTML === playersTurn)return true;
  else if(document.getElementById("A1").innerHTML === playersTurn && document.getElementById("A2").innerHTML === playersTurn && document.getElementById("A3").innerHTML === playersTurn)return true;
  else if(document.getElementById("A1").innerHTML === playersTurn && document.getElementById("B1").innerHTML === playersTurn && document.getElementById("C1").innerHTML === playersTurn)return true;
  else if(document.getElementById("A2").innerHTML === playersTurn && document.getElementById("B2").innerHTML === playersTurn && document.getElementById("C2").innerHTML === playersTurn)return true;
  else if(document.getElementById("A3").innerHTML === playersTurn && document.getElementById("B3").innerHTML === playersTurn && document.getElementById("C3").innerHTML === playersTurn)return true;
  else if(document.getElementById("B1").innerHTML === playersTurn && document.getElementById("B2").innerHTML === playersTurn && document.getElementById("B3").innerHTML === playersTurn)return true;
  else if(document.getElementById("A2").innerHTML === playersTurn && document.getElementById("B2").innerHTML === playersTurn && document.getElementById("C2").innerHTML === playersTurn)return true;
  else if(document.getElementById("C1").innerHTML === playersTurn && document.getElementById("C2").innerHTML === playersTurn && document.getElementById("C3").innerHTML === playersTurn)return true;
  return false;

}

