const test = document;

function gamePlay() {
  document.playersTurn = "X";
}


function playerMessage() {
  document.getElementById("message").innerHTML = document.playersTurn + "'s Turn";
}

function nextMove(sections) {
  if(sections.innerText == "") {
    sections.innerText = document.playersTurn;
    let winner = getWinner(document.playersTurn); 
    alertPlayer(winner);
    changePlayer();
    } else if(sections.innerText === "X" || sections.innerText === "O"){
      playerMessage()
      document.getElementById("message").innerHTML = "Choose Another Square";
  }
}

function alertPlayer(winner) {
  if (winner) {
    alert("Winner Winner Chicken Dinner")
      location.reload();
  }
}

function changePlayer() {
  if (document.playersTurn == "X"){
    document.playersTurn = "O";
  }  else {
      document.playersTurn = "X";
  } 
  playerMessage();
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