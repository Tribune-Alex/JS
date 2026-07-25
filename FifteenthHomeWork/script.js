function randomColors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

let chance = 3;
let points = 30;
let correct = 0;

function startGame() {
    const gamecontainer = document.querySelector(".game");
    const target = document.getElementById("target");
    const answer = document.querySelector(".answer");
    const level = document.getElementById("level");
    const life = document.getElementById("lifes");
    const score = document.getElementById("score");
    const correctans = document.getElementById("correctans");
    const easy = document.getElementById("easy");
    const medium = document.getElementById("medium");
    const hard = document.getElementById("hard");
    const displaybuttons=document.getElementById("buttons");


    gamecontainer.innerHTML = "";
    answer.classList.remove("show");
  
    answer.style.backgroundImage = "";
    target.textContent = "";
    level.innerHTML = "";

    
    displaybuttons.style.display="flex";
    easy.style.backgroundColor="blueviolet";
    medium.style.backgroundColor="blueviolet";
    medium.style.color="white";
    hard.style.backgroundColor="blueviolet";
    level.style.backgroundColor="white";

    life.innerHTML = `<p>${chance}</p>`;
    score.innerHTML = `<p>${points}</p>`;
    correctans.innerHTML = `<p>${correct}</p>`;

    easy.onclick = function () {

        easy.style.backgroundColor = "green";
        level.innerHTML = "";
        level.innerHTML += `<p>Easy</p>`;
        level.style.backgroundColor = "white";
        level.style.color = "black";
        level.style.backgroundColor = "green";
        level.style.color = "white";
        medium.style.backgroundColor = "blueviolet"
        medium.style.color = "white";
        hard.style.backgroundColor="blueviolet";

        gamecontainer.innerHTML = "";
        answer.classList.remove("show");
        answer.style.backgroundImage = "";

        const colors = [randomColors(), randomColors(), randomColors()];

        const currentIndex = Math.floor(Math.random() * colors.length);
        const correctColor = colors[currentIndex];

        target.textContent = correctColor;

        colors.forEach((color) => {

            const box = document.createElement("div");
            box.className = "box";
            box.style.backgroundColor = color;

            box.onclick = function () {

                if (color === correctColor) {

                    answer.style.backgroundImage = "url('./img/right.jpg')";
                    answer.classList.add("show");

                    points += 5;
                    correct++;

                    score.innerHTML = `<p>${points}</p>`;
                    correctans.innerHTML = `<p>${correct}</p>`;
                    if (correct === 5) {
                        correct = 0;
                        chance = 3;
                        points = 30;

                        life.innerHTML = `<p>${chance}</p>`;
                        score.innerHTML = `<p>${points}</p>`;
                        correctans.innerHTML = `<p>${correct}</p>`;
                        alert("You have answered right now you go to hard level");
                        setTimeout(() => {
                            hard.click();
                        }, 1000);

                        return;
                    }

                    setTimeout(() => {
                        easy.click();
                    }, 1000);

                } else {

                    chance--;
                    points -= 10;
                    correct = 0;

                    life.innerHTML = `<p>${chance}</p>`;
                    score.innerHTML = `<p>${points}</p>`;
                    correctans.innerHTML = `<p>${correct}</p>`;

                    if (chance === 0) {

                        answer.style.backgroundImage = "url('./img/gameover.png')";
                        answer.classList.add("show");

                        setTimeout(() => {

                            chance = 3;
                            points = 30;
                            correct = 0;



                            startGame();
                            easy.click();

                        }, 5000);

                        return;
                    }

                    answer.style.backgroundImage = "url('./img/oops.gif')";
                    answer.classList.add("show");

                    setTimeout(() => {
                        easy.click();
                    }, 1000);
                }

            };

            gamecontainer.appendChild(box);
        });
    };

    medium.onclick = function () {
        easy.style.backgroundColor = "blueviolet";
        medium.style.backgroundColor = "yellow";
        medium.style.color = "green";
        level.innerHTML = "";
        level.innerHTML += `<p>Medium</p>`;
        level.style.backgroundColor = "yellow";
        level.style.color = "green";
        hard.style.backgroundColor="blueviolet";

        gamecontainer.innerHTML = "";
        answer.classList.remove("show");
        answer.style.backgroundImage = "";

        const colors = [randomColors(), randomColors(), randomColors(), randomColors(), randomColors(), randomColors()];

        const currentIndex = Math.floor(Math.random() * colors.length);
        const correctColor = colors[currentIndex];

        target.textContent = correctColor;

        colors.forEach((color) => {

            const box = document.createElement("div");
            box.className = "box";
            box.style.backgroundColor = color;

            box.onclick = function () {

                if (color === correctColor) {

                    answer.style.backgroundImage = "url('./img/right.jpg')";
                    answer.classList.add("show");

                    points += 5;
                    correct++;
                     if (correct === 5) {
                        correct = 0;
                        chance = 3;
                        points = 30;

                        life.innerHTML = `<p>${chance}</p>`;
                        score.innerHTML = `<p>${points}</p>`;
                        correctans.innerHTML = `<p>${correct}</p>`;
                        alert("You have answered right now you go to hard level");
                        setTimeout(() => {
                            hard.click();
                        }, 1000);

                        return;
                    }

                    score.innerHTML = `<p>${points}</p>`;
                    correctans.innerHTML = `<p>${correct}</p>`;

                    setTimeout(() => {
                        medium.click();
                    }, 1000);

                } else {

                    chance--;
                    points -= 10;
                    correct = 0;

                    life.innerHTML = `<p>${chance}</p>`;
                    score.innerHTML = `<p>${points}</p>`;
                    correctans.innerHTML = `<p>${correct}</p>`;

                    if (chance === 0) {

                        answer.style.backgroundImage = "url('./img/gameover.png')";
                        answer.classList.add("show");

                        setTimeout(() => {

                            chance = 3;
                            points = 30;
                            correct = 0;



                            startGame();
                            medium.click();

                        }, 5000);

                        return;
                    }

                    answer.style.backgroundImage = "url('./img/oops.gif')";
                    answer.classList.add("show");

                    setTimeout(() => {
                        medium.click();
                    }, 1000);
                }

            };

            gamecontainer.appendChild(box);
        });



    };

    hard.onclick = function () {
        easy.style.backgroundColor = "blueviolet";
        medium.style.backgroundColor = "blueviolet"
        medium.style.color = "white";
        hard.style.backgroundColor = "red";
        level.innerHTML = "";
        level.innerHTML += `<p>Hard</p>`;
        level.style.backgroundColor = "white";
        level.style.color = "black";
        level.style.backgroundColor = "red";
        level.style.color = "white";


        gamecontainer.innerHTML = "";
        answer.classList.remove("show");
        answer.style.backgroundImage = "";

        const colors = [randomColors(), randomColors(), randomColors(), randomColors(), randomColors(), randomColors(), randomColors(), randomColors(), randomColors()];

        const currentIndex = Math.floor(Math.random() * colors.length);
        const correctColor = colors[currentIndex];

        target.textContent = correctColor;

        colors.forEach((color) => {

            const box = document.createElement("div");
            box.className = "box";
            box.style.backgroundColor = color;

            box.onclick = function () {

                if (color === correctColor) {

                    answer.style.backgroundImage = "url('./img/right.jpg')";
                    answer.classList.add("show");

                    points += 5;
                    correct++;
                    

                    score.innerHTML = `<p>${points}</p>`;
                    correctans.innerHTML = `<p>${correct}</p>`;

                    setTimeout(() => {
                        hard.click();
                    }, 1000);

                } else {

                    chance--;
                    points -= 10;
                    correct = 0;

                    life.innerHTML = `<p>${chance}</p>`;
                    score.innerHTML = `<p>${points}</p>`;
                    correctans.innerHTML = `<p>${correct}</p>`;

                    if (chance === 0) {

                        answer.style.backgroundImage = "url('./img/gameover.png')";
                        answer.classList.add("show");

                        setTimeout(() => {

                            chance = 3;
                            points = 30;
                            correct = 0;



                            startGame();
                            hard.click();

                        }, 5000);

                        return;
                    }

                    answer.style.backgroundImage = "url('./img/oops.gif')";
                    answer.classList.add("show");

                    setTimeout(() => {
                        hard.click();
                    }, 1000);
                }

            };

            gamecontainer.appendChild(box);
        });

    }
}
document.getElementById("start").addEventListener("click",startGame);
