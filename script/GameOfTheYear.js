const test = document;

function gamePlay() {
  document.playersTurn = "X";
}


function nextMove(sections) {
  sections.innerText = document.playersTurn;
  let winner = getWinner(document.playersTurn); 
  changePlayer();
  alertPlayer(winner);
}

function alertPlayer(winner) {
  if (winner) {
    ("Winner Winner Chicken Dinner")
  }
}

function changePlayer() {
  if (document.playersTurn == "X"){
    document.playersTurn = "O";
  }  else {
      document.playersTurn = "X";
  }
  document.getElementById("message").innerHTML = document.playersTurn + "'s Turn";
}

function getWinner(playersTurn) {
  if(test.getElementById("A1").innerText === playersTurn && test.getElementById("B2").innerText === playersTurn && test.getElementById("C3").innerText === playersTurn)return true;
  else if(test.getElementById("A1").innerText === playersTurn && test.getElementById("A2").innerText === playersTurn && test.getElementById("A3").innerText === playersTurn)return true;
  else if(test.getElementById("A1").innerText === playersTurn && test.getElementById("B1").innerText === playersTurn && test.getElementById("C1").innerText === playersTurn)return true;
  else if(test.getElementById("A2").innerText === playersTurn && test.getElementById("B2").innerText === playersTurn && test.getElementById("C2").innerText === playersTurn)return true;
  else if(test.getElementById("A3").innerText === playersTurn && test.getElementById("B3").innerText === playersTurn && test.getElementById("C3").innerText === playersTurn)return true;
  else if(test.getElementById("B1").innerText === playersTurn && test.getElementById("B2").innerText === playersTurn && test.getElementById("B3").innerText === playersTurn)return true;
  else if(test.getElementById("A2").innerText === playersTurn && test.getElementById("B2").innerText === playersTurn && test.getElementById("C1").innerText === playersTurn)return true;
  else if(test.getElementById("C1").innerText === playersTurn && test.getElementById("C2").innerText === playersTurn && test.getElementById("C3").innerText === playersTurn)return true;
  return false;
  
}