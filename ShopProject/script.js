const apikey = "413d0fd3-56b2-4f27-94d5-b2337cff7794";
const categoriesMenu = document.getElementById("categoriesMenu");
const contentcategory = document.getElementById("contentcategory");
const getall = document.getElementById("getall");

fetch("https://shopapi.stepacademy.ge/api/categories", {
    headers: {
        'x-api-key': apikey
    }
})
    .then(res => res.json())
    .then(result => {

        const categories = result.data;

        categoriesMenu.innerHTML = "";

        categories.forEach(category => {
            categoriesMenu.innerHTML += `
                <li>
                    <a class="dropdown-item" href="#" onclick="filter(${category.id})">
                        ${category.name} <span class="counts"> ${category.productCount}</span>
                    </a>
                </li>
            `;
            contentcategory.innerHTML += `<div class="cat">
            <div class="cat-item"><img class="img" src="${category.imageUrl}" alt="product">
            <div class="specs">
                <p class="name">${category.name}</p>
                <p class="count">${category.productCount} products</p>
            </div>
             <span class="arrow">
                <span class="arrow-line"></span>
                <span class="arrow-head">›</span>
             </span>
            
            </div>
            </div>`
        });

    })
    .catch(err => console.error(err));


function getAll() {
    fetch("https://shopapi.stepacademy.ge/api/products", {
        headers: {
            'x-api-key': apikey
        }
    })
        .then((response) => response.json())
        .then((mydata) => {
            getall.innerHTML = "";
            const items = mydata.data.items.slice(0, 4);
            for (let i = 0; i < items.length; i++) {
                getall.innerHTML += productPrint(items[i])
            }
        })
};

getAll();

function productPrint(prd) {
    return `<div class="card" id="carddesign" style="width: 18rem;">
  <img class="size" src="${prd.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
  <p class="card-text"><span class="catname"> ${prd.category.name}</span> <span class="doted"> ' </span> <span class="brandname"> ${prd.brand}</span></p>
    <h5 class="card-title">${prd.name}</h5>
    
    <p class="card-text">${prd.model}</p>
    <p class="card-text">${prd.price}</p>
    <button type="button" class="btn btn-primary" id="get" onclick="getHotelId(${prd.id})">Detail</button>
  </div>
</div>`
};


