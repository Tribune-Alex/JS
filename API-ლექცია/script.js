let section = document.getElementById("section");
let nav = document.querySelector("nav");
const range = document.getElementById("range");
const lab = document.getElementById("lab");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const rest = document.getElementById("rest");
const appl = document.getElementById("appl");
const cart = document.getElementById("card");


opt1.addEventListener("change", function () {
    if (opt1.checked) {
        opt1.checked = true
    } else (
        opt1.checked = false
    )
});

opt2.addEventListener("change", function () {
    if (opt2.checked) {
        opt2.checked = true
    } else (
        opt2.checked = false
    )
});



range.addEventListener("input", function () {
    lab.textContent = `Spiciness: ${range.value}`;
});

rest.addEventListener("click", function () {
    range.value = -1;
    lab.textContent = "Spiciness: Not Chosen";
    opt1.checked = false;
    opt2.checked = false;
    getAll();
});

appl.addEventListener("click", function () {
    fetch("https://restaurant.stepprojects.ge/api/Products/GetFiltered")
        .then((response) => response.json())
        .then((mydata) => {
            section.innerHTML = "";
            const spice = Number(range.value)
            for (let i = 0; i < mydata.length; i++) {
                let resspice;
                if (spice < 0) {
                    resspice = mydata[i].spiciness <= 4;
                } else {
                    resspice = mydata[i].spiciness === spice;
                }

                let nutss = true;
                if (opt1.checked) {
                    nutss = mydata[i].nuts === false;
                }
                let veg = true;
                if (opt2.checked) {
                    veg = mydata[i].vegeterian === true;
                }

                if (resspice && nutss && veg) {
                    section.innerHTML += cartPrint(mydata[i])
                }

            }
        })
});

function getAll() {
    fetch("https://restaurant.stepprojects.ge/api/Products/GetAll")
        .then((response) => response.json())
        .then((data) => {
            section.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                section.innerHTML += cartPrint(data[i])
            }
        })
};

getAll();

function cartPrint(product) {

    return `
<div class="card" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <h5 class="card-title">${product.id}</h5>
    <p class="card-text">spiciness:${product.spiciness}</p>
        <p class="card-text">nuts: ${product.nuts ? "✋" : "📌"}</p>
    <p class="card-text">vegeterian:${product.vegeterian ? "✋" : "📌"}</p>

    <button type="button" class="btn btn-primary" onlick="adiing(${product.id})">ADD to Cart</button>
  </div>
</div>
`
};



function getCategoris() {
    fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
        .then((response) => response.json())
        .then((categories) => {
            for (let i = 0; i < categories.length; i++) {
                nav.innerHTML += `<button id="butall" onclick="filter(${categories[i].id})">${categories[i].name}</button>`
            }
        })
}

getCategoris();

function filter(id) {
    fetch(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
        .then((response) => response.json())
        .then((search) => {
            section.innerHTML = "";
            console.log(search);
            for (let i = 0; i < search.products.length; i++) {
                section.innerHTML += cartPrint(search.products[i])
            }
        })
};

function getBasket() {
    fetch("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
        .then((response) => response.json())
        .then((gotdata) => {
            cart.style.display="flex";
            for (let i = 0; i < gotdata.length; i++) {
                cart.innerHTML += cardmaker(gotdata[i]);
            }
        })
};

function cardmaker(items) {
    return `  <div class="cart-item">
    <img src="${items.image}" alt="product">

    <div class="item-info">
      <div class="item-name">${items.name}</div>
      <div class="item-price">${items.price}</div>
    </div>
`
};
