let restart = document.getElementById("restart");
let cont = document.getElementById("container");
let audio = document.getElementById("audio");
let btns = [
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
  document.getElementById("btn4"),
  document.getElementById("btn5"),
  document.getElementById("btn6"),
  document.getElementById("btn7"),
  document.getElementById("btn8"),
  document.getElementById("btn9"),
];
let players = ["X", "O"];
let gameover = false;

function randomplayer() {
  let randome = Math.floor(Math.random() * players.length);
  return players[randome];
}
let player1 = randomplayer();
let crrntplayer = player1;
console.log("the first player will play : " + player1);

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    if (
      btns[a].textContent &&
      btns[a].textContent === btns[b].textContent &&
      btns[a].textContent === btns[c].textContent
    ) {
      btns[a].style.boxShadow =
        "0 0 5px rgb(255, 0, 191), 0 0 10px rgb(255, 0, 149), 0 0 20px rgb(254, 45, 87)";
      btns[b].style.boxShadow =
        "0 0 5px rgb(255, 0, 191), 0 0 10px rgb(255, 0, 149), 0 0 20px rgb(254, 45, 87)";
      btns[c].style.boxShadow =
        "0 0 5px rgb(255, 0, 191), 0 0 10px rgb(255, 0, 149), 0 0 20px rgb(254, 45, 87)";

      return btns[a].textContent;
    }
  }
  return null;
}
function disableBtns() {
  for (let btn of btns) {
    btn.disabled = true;
  }
}
function isBoardFull() {
  for (let btn of btns) {
    if (btn.textContent === "") {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < btns.length; i++) {
  btns[i].style.fontSize = "100px";
  btns[i].style.color = "#65026D";
  btns[i].addEventListener("click", function btnclick() {
    if (btns[i].textContent === "" && !gameover) {
      btns[i].textContent = crrntplayer;
      let winner = checkWinner();
      if (winner) {
        gameover = true;
        disableBtns();
        audio.play();
        alert(winner + " wins! Congratulations!"); 
      } else if (isBoardFull()) {
        gameover = true;
        disableBtns();
        alert("tahed marab7 :(");
      } else {
        crrntplayer = crrntplayer === players[0] ? players[1] : players[0];
      }
    } else if (isBoardFull()) {
      gameover = true;
      disableBtns();
      alert("tahed marab7 :(");
    } else {
      crrntplayer = crrntplayer === players[0] ? players[1] : players[0];
    }
  });
}
restart.addEventListener("click", function restart() {
  gameover = false;
  for (let btn of btns) {
    btn.textContent = "";
    btn.disabled = false;
  }
  crrntplayer = randomplayer();
  console.log("New game! First player: " + crrntplayer);
});
