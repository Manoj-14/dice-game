const refresh = document.getElementById("refresh");
refresh.addEventListener("click", play);
// for player 1
function play(e){
    const randamNum1 = Math.floor(Math.random() * 6) + 1;
    const diceImgName1 = `dice-${randamNum1}.png`;
    const diceImage1 = `dice-imgs/${diceImgName1}`;
    const image1 = document.querySelector('.img-1');
    image1.setAttribute("src", diceImage1);

    // for player 2
    const randamNum2 = Math.floor(Math.random() * 6) + 1;
    const diceImgName2 = `dice-${randamNum2}.png`;
    const diceImage2 = `dice-imgs/${diceImgName2}`;
    const image2 = document.querySelector('.img-2');
    image2.setAttribute("src", diceImage2);

    // choosing winner and loser

    if (randamNum1 > randamNum2) {
        document.querySelector("#result").innerHTML = "❤ Player 1 won!! ❤";
    } else if (randamNum2 > randamNum1) {
        document.querySelector("#result").innerHTML = "❤ Player 2 won!! ❤ ";
    } else {
        document.querySelector("#result").innerHTML = "Draw";
    }
    e.preventDefault();
}