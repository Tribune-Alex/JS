const darkmode = document.getElementById("buttondark");
const visits=document.getElementById("visits");
const input=document.getElementById("myInput");
const result=document.getElementById("result");
const article = document.getElementById("article");
const progress = document.getElementById("progress");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

darkmode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

let visitors=0;

function countVisitors() {
    const today = new Date().toDateString();

    let lastVisit = localStorage.getItem("lastVisit");
    let visitors = Number(localStorage.getItem("visitors")) || 0;

    if (lastVisit !== today) {
        visitors++;
        localStorage.setItem("visitors", visitors);
        localStorage.setItem("lastVisit", today);
    }
    visits.innerHTML+=`<p>Visitors on site: ${visitors}</p>`;
    console.log("Visitors:", visitors);
}

countVisitors();

let timer;


let saveTimer;

function debounce() {
    input.addEventListener("input", function () {

        clearInterval(timer);

        let text = input.value;
        let index = 0;

        result.innerHTML = "";

        if (text.length === 0) {
            result.innerHTML = ".......";
            sessionStorage.removeItem("text");
            return;
        }


        
        clearTimeout(saveTimer);

        saveTimer = setTimeout(() => {
            sessionStorage.setItem("text", text);
            console.log("Saved:", text);
        }, 500);


        timer = setInterval(() => {

            result.innerHTML += text[index];
            index++;

            if (index >= text.length) {
                clearInterval(timer);
            }

        }, 500);

    });
}

debounce();


const articleId = 1;
article.addEventListener("scroll", function () {
    let scrollTop = article.scrollTop;
    let scrollHeight = article.scrollHeight - article.clientHeight;
    let percent = Math.round(
        (scrollTop / scrollHeight) * 100
    );
    progress.innerHTML = `Read: ${percent}%`;
    localStorage.setItem(`article_${articleId}`, percent);
});



function updateOnlineTime() {
    let timestamp = Date.now();
    localStorage.setItem("lastTime", timestamp);
    console.log("Updated:", timestamp);
}


setInterval(updateOnlineTime, 5000);

function checkOnline() {
    let lastTime = localStorage.getItem("lastTime");
    if(lastTime){
        let now = Date.now();
        let difference = now - lastTime;
        if(difference > 10000){
            console.log("User offline");
        }
        else{
            console.log("User online");
        }
    }

}

setInterval(checkOnline, 5000);

function addProduct(productId) {
    let lastProduct = sessionStorage.getItem("lastProduct");
    let lastTime = sessionStorage.getItem("lastTime");
    let now = Date.now();
    if (lastProduct == productId && now - lastTime < 1000) {
        console.log("Wait for one second");
        return;
    }
    sessionStorage.setItem("lastProduct", productId);
    sessionStorage.setItem("lastTime", now);
    console.log("You've just added the item:", productId);

};

addProduct(1);
addProduct(1);
addProduct(1);