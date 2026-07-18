const apikey = "413d0fd3-56b2-4f27-94d5-b2337cff7794";
const contentcategory = document.getElementById("contentcategory");
const getall = document.getElementById("getall");
const navbar = document.getElementById("navforjs");


async function getUser() {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        const categoriesMenu = document.getElementById("categoriesMenu");

        loadCategories(categoriesMenu);
        return;
    }

    try {
        const res = await fetch("https://shopapi.stepacademy.ge/api/users/me", {
            method: "GET",
            headers: {
                "x-api-key": apikey,
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await res.json();
        console.log(data);
        navbar.innerHTML = "";
        navbar.innerHTML += `
        <nav class="navbar navbar-expand-lg navbar-dark bg-white sticky-top">
            <div class="container">

                <a class="navbar-brand fw-bold" href="index.html">
                    <svg _ngcontent-ng-c3188417508="" xmlns="http://www.w3.org/2000/svg" id="logo" width="35"
                        height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <rect _ngcontent-ng-c3188417508="" x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path _ngcontent-ng-c3188417508="" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span class="steptech">STEP TECH</span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav ms-5">

                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">
                                Home
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="/ShopProject/pages/shop.html">
                                Shop
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="/ShopProject/pages/shop.html">
                                Cart
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="/ShopProject/pages/shop.html">
                                Favourites
                            </a>
                        </li>

                        <!-- Categories -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>

                            <ul class="dropdown-menu" id="categoriesMenu" aria-labelledby="categoriesDropdown">

                               

                            </ul>
                        </li>



                    </ul>

                    <form class="d-flex ">
                        <input class="form-control me-2" type="search" id="search" placeholder="Search products..."
                            id="search">

                        <li class="nav-item">
                            <a class="nav-link active" href="/ShopProject/pages/shop.html">
                               <span>Welcome</span> ${data.data.firstName}
                            </a>
                        </li>

                        <button class="btn-outline-dark" type="button" onclick="logOut()">
                            Log Out
                        </button>
                    </form>

                </div>

            </div>
        </nav>
        `

        const categoriesMenu = document.getElementById("categoriesMenu");

        loadCategories(categoriesMenu);

    } catch (err) {
        console.log(err);
    }
};

getUser();





function signIN() {
    window.location.href = "./pages/sighupsignin.html";
}
async function loadCategories(categoriesMenu) {
    fetch("https://shopapi.stepacademy.ge/api/categories", {
        headers: {
            'x-api-key': apikey
        }
    })
        .then(res => res.json())
        .then(result => {

            const categories = result.data;
            const contentcategories = result.data.slice(0, 4);

            categoriesMenu.innerHTML = "";

            categories.forEach(category => {
                categoriesMenu.innerHTML += `
                <li>
                    <a class="dropdown-item" href="#" onclick="filter(${category.id})">
                        ${category.name} <span class="counts"> ${category.productCount}</span>
                    </a>
                </li>
            `;

            });

            contentcategories.forEach(cat => {
                contentcategory.innerHTML += `<div class="cat">
            <div class="cat-item"><img class="img" src="${cat.imageUrl}" alt="product">
            <div class="specs">
                <p class="name">${cat.name}</p>
                <p class="count">${cat.productCount} products</p>
            </div>
             <span class="arrow">
                <span class="arrow-line"></span>
                <span class="arrow-head">›</span>
             </span>
            
            </div>
            </div>`
            })

        })
        .catch(err => console.error(err));
}



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


async function loadproducts() {
    const res = await fetch(`https://shopapi.stepacademy.ge/api/products?Take=4&Page=2`, {
        headers: {
            'x-api-key': apikey
        }
    })
    const json = await res.json();

    showProducts(json.data.items)
}

function showProducts(items) {
    const newitems = document.getElementById("newitems")
    items.innerHTML = ""
    items.forEach(item => {
        newitems.innerHTML += `
       <div class="card" id="carddesign" style="width: 18rem;">
          <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
           <div class="card-body">
           <p class="card-text"><span class="catname"> ${item.category.name}</span> <span class="doted"> ' </span> <span class="brandname"> ${item.brand}</span></p>
           <h5 class="card-title">${item.name}</h5>
           <p class="card-text">${item.model}</p>
           <p class="card-text">${item.rating}</p>
           <p class="card-text">${item.price}</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
        `
    })

}

loadproducts();

function logOut(){
    localStorage.clear();
    window.location.href = "./index.html";
}