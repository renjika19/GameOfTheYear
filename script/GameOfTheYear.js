var count = 0


function gamePlay() {
  document.playersTurn = "X";
}


function playerMessage() {
  document.getElementById("message").innerHTML = document.playersTurn + "'s Turn";
}

function userInput(sections) {
  if(sections.innerHTML == "") {
    sections.innerHTML = document.playersTurn;
    let winner = getWinner(document.playersTurn); 
    alertPlayer(winner);
    changePlayer();
    playerMessage();
    count++
      if(count === 9) {
        document.getElementById("message").innerHTML = "DRAW";
      }
    } else if(sections.innerText === "X" || sections.innerText === "O"){
      playerMessage()
      document.getElementById("message").innerHTML = "Choose Another Square";
  } 
}

function alertPlayer(winner) {
  if (winner) {
    document.getElementById("message").innerHTML = ("Winner Winner Chicken Dinner");
  }
}

function restart() {
  var td = document.getElementsByTagName("td");
  for(let i = 0; i < td.length; i++) {
    td[i].innerHTML = "";
  }
  //document.getElementsByTagName('td').forEach(this.innerHTML = '');
  //document.getElementsByTagName('td').fill('');
}

// function drawCount() {
//   for(count= 0; count < 9; count++){
//     if(count == 8 || getWinner()){
//        break;
//     } else if(count == 9) {
//       playerMessage()
//       document.getElementById("message").innerHTML = ("STALEMATE");
//     }
//   }
// return false; 
// }

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
  else if(document.getElementById("A2").innerText === playersTurn && document.getElementById("B2").innerText === playersTurn && document.getElementById("C1").innerText === playersTurn)return true;
  else if(document.getElementById("C1").innerText === playersTurn && document.getElementById("C2").innerText === playersTurn && document.getElementById("C3").innerText === playersTurn)return true;
  return false;

}

function myButton() {
  location.reload();
}