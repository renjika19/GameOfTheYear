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
    document.getElementById("message").innerHTML = ("Winner Winner Chicken Dinner")
  }
}

function changePlayer() {
  if (document.playersTurn == "X"){
    document.playersTurn = "O";
  }  else {
      document.playersTurn = "X";
  }
}

function getWinner(playersTurn) {
  if(document.getElementById("A1").innerText === playersTurn && document.getElementById("B2").innerText === playersTurn && document.getElementById("C3").innerText === playersTurn)return true;
  else if(document.getElementById("A1").innerText === playersTurn && document.getElementById("A2").innerText === playersTurn && document.getElementById("A3").innerText === playersTurn)return true;
  else if(document.getElementById("A1").innerText === playersTurn && document.getElementById("B1").innerText === playersTurn && document.getElementById("C1").innerText === playersTurn)return true;
  else if(document.getElementById("A2").innerText === playersTurn && document.getElementById("B2").innerText === playersTurn && document.getElementById("C2").innerText === playersTurn)return true;
  else if(document.getElementById("A3").innerText === playersTurn && document.getElementById("B3").innerText === playersTurn && document.getElementById("C3").innerText === playersTurn)return true;
  else if(document.getElementById("B1").innerText === playersTurn && document.getElementById("B2").innerText === playersTurn && document.getElementById("B3").innerText === playersTurn)return true;
  else if(document.getElementById("A2").innerText === playersTurn && document.getElementById("B2").innerText === playersTurn && document.getElementById("C1").innerText === playersTurn)return true;
  else if(document.getElementById("C1").innerText === playersTurn && document.getElementById("C2").innerText === playersTurn && document.getElementById("C3").innerText === playersTurn)return true;
  return false;

}

function myButton() {
  location.reload();
}