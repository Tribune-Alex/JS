const apikey = "413d0fd3-56b2-4f27-94d5-b2337cff7794";
const search = document.getElementById("product-search");
const search2 = document.getElementById("product-search2");
const brandsearch = document.getElementById("site-search");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const Rating4 = document.getElementById("rat4");
const Rating3 = document.getElementById("rat3");
const Rating2 = document.getElementById("rat2");
const Rating1 = document.getElementById("rat1");
const InStock=document.getElementById("instock");
const reset=document.getElementById("resbut");
const sortSelect = document.getElementById("sortttt");

const filter = {
    Search: "",
    Brand: "",
    InStock: "",
    SortBy: "1",
    CategoryId: "",
    MinRating: 0,
    MinPrice: 1,
    MaxPrice: 9999,
    SortDescending: false,
    Take: 6,
    Page: 1
};


let seachtext = "";

brandsearch.addEventListener('input', function () {
    filter.Brand = this.value;
    console.log(filter);
    isFilter = true;
    filterProducts(1);
});

InStock.addEventListener("change",function(){
    filter.InStock=this.checked;
    isFilter=true;
    filterProducts(1);
})


minPrice.addEventListener('input', function () {
    filter.MinPrice = Number(this.value);
    console.log(filter);
    isFilter = true;
    filterProducts(1);
});

maxPrice.addEventListener('input', function () {
    filter.MaxPrice = Number(this.value);
    console.log(filter);
    isFilter = true;
    filterProducts(1);
});

Rating1.addEventListener('click', function () {
    filter.MinRating = Number(this.value);
    console.log(filter);
    isFilter = true;
    filterProducts(1);
});

Rating2.addEventListener('click', function () {
    filter.MinRating = Number(this.value);
    console.log(filter);
    isFilter = true;
    filterProducts(1);
});
Rating3.addEventListener('click', function () {
    filter.MinRating = Number(this.value);
    console.log(filter);
    isFilter = true;
    filterProducts(1);
});
Rating4.addEventListener('click', function () {
    filter.MinRating = Number(this.value);
    console.log(filter);
    isFilter = true;
    filterProducts(1);
});

sortSelect.addEventListener("change", function () {

    switch (this.value) {
        case "price-asc":
            filter.SortBy = "price";
            filter.SortDescending = false;
            break;

        case "price-desc":
            filter.SortBy = "price";
            filter.SortDescending = true;
            break;

        case "name-asc":
            filter.SortBy = "name";
            filter.SortDescending = false;
            break;

        case "name-desc":
            filter.SortBy = "name";
            filter.SortDescending = true;
            break;
    }

    filterProducts(1);
});

search.addEventListener('input', function () {
    seachtext = search.value;

    if (seachtext.trim() === "") {
        isSearch = false;
        loadProducts(1);
    }
    else {
        isSearch = true;
        searchProduct(1);
    }
});



search2.addEventListener('input', function () {
    seachtext = search2.value;

    if (seachtext.trim() === "") {
        isSearch = false;
        loadProducts(1);
    }
    else {
        isSearch = true;
        searchProduct(1);
    }
});

reset.addEventListener("click",function(){
    filter.Search= "",
    filter.Brand= "",
    filter.InStock= "",
    filter.SortBy= "1",
    filter.CategoryId= "",
    filter.MinRating= 0,
    filter.MinPrice= 1,
    filter.MaxPrice= 9999,
    filter.SortDescending= false,
    filter.Take= 6,
    filter.Page= 1
    


    brandsearch.value = "";
    minPrice.value = "";
    maxPrice.value = "";
    search.value = "";
    search2.value = "";
    InStock.checked = false;

    
    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.checked = false;
    });

    isFilter = false;
    isSearch = false;

    loadProducts(1);
});


const pageSize = 8;
let page = 1;
let pageCount = 1;
let isSearch = false;
let isFilter = false;



async function filterProducts(pageNumber = 1) {

    filter.Page = pageNumber;

    const params = new URLSearchParams(filter);
    console.log(params.toString());

    const res = await fetch(
        `https://shopapi.stepacademy.ge/api/products/filter?${params}`,
        {
            headers: {
                "x-api-key": apikey
            }
        }
    );

    const json = await res.json();
    console.log(json);
    page = json.data.currentPage;
    pageCount = json.data.totalPages;

    viewProduct(json.data.items);
    showPagination();
};

function viewProduct(datas) {
    const soft = document.getElementById("soft");
    soft.innerHTML = "";
    datas.forEach(data => {
        soft.innerHTML += `
                      <div class="card" id="carddesign" style="width: 18rem;">
          <img class="size" src="${data.imageUrl}" alt="Card image cap">
           <div class="card-body">
           <p class="card-text"><span class="catname"> ${data.category.name}</span> <span class="doted"> ' </span> <span class="brandname"> ${data.brand}</span></p>
           <h5 class="card-title">${data.name}</h5>
           <p class="card-text">${Math.floor(data.rating)}</p>
           <p class="card-text">${data.price}</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
        `
    })
};


async function searchProduct(pageNumber = 1) {

    const res = await fetch(
        `https://shopapi.stepacademy.ge/api/products/search?query=${seachtext}&Take=${pageSize}&Page=${pageNumber}`,
        {
            headers: {
                'x-api-key': apikey
            }
        }
    );

    const searchjson = await res.json();

    page = searchjson.data.currentPage;
    pageCount = searchjson.data.totalPages;

    searchProducts(searchjson.data.items);
    showPagination();
}

function searchProducts(founds) {
    const soft = document.getElementById("soft");
    soft.innerHTML = "";
    founds.forEach(found => {
        soft.innerHTML += ` 
              <div class="card" id="carddesign" style="width: 18rem;">
          <img class="size" src="${found.imageUrl}" alt="Card image cap">
           <div class="card-body">
           <p class="card-text"><span class="catname"> ${found.category.name}</span> <span class="doted"> ' </span> <span class="brandname"> ${found.brand}</span></p>
           <h5 class="card-title">${found.name}</h5>
           <p class="card-text">${Math.floor(found.rating)}</p>
           <p class="card-text">${found.price}</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
        `
    })
}



async function loadCategories() {
    const load = await fetch("https://shopapi.stepacademy.ge/api/categories", {
        headers: {
            'x-api-key': apikey
        }
    })

    const catjson = await load.json();
    showCategories(catjson.data);
}

function showCategories(files) {
    const catmenu = document.getElementById("categoriesMenu");
    const check = document.getElementById("check");
    files.innerHTML = "";
    files.forEach(file => {
        catmenu.innerHTML += `
        <li>
                    <a class="dropdown-item" href="#" onclick="filter.CategoryId=${file.id};filterProducts(1);">
                        ${file.name} <span class="counts"> ${file.productCount}</span>
                    </a>
                </li>
        `

        check.innerHTML += `
            <div class="lab">
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="${file.id}"
                        "
                    >
                    ${file.name}
                    <span class="counts">${file.productCount}</span>
                </label>
            </div>
        `;
    });
    const radios = document.querySelectorAll('input[name="filter"]');

    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            filter.CategoryId = Number(this.value);
            isFilter = true;
            filterProducts(1);
        });
    });
};


loadCategories();


async function loadProducts(pageNumber) {
    const res = await fetch(`https://shopapi.stepacademy.ge/api/products?Take=${pageSize}&Page=${pageNumber}`, {
        headers: {
            'x-api-key': apikey
        }
    })
    const json = await res.json();
    page = json.data.currentPage;
    pageCount = json.data.totalPages;

    showProduct(json.data.items);
    showPagination();
};

function showProduct(items) {
    const soft = document.getElementById("soft");
    items.innerHTML = "";
    items.forEach(item => {
        soft.innerHTML += `
        <div class="card" id="carddesign" style="width: 18rem;">
          <img class="size" src="${item.imageUrl}" alt="Card image cap">
           <div class="card-body">
           <p class="card-text"><span class="catname"> ${item.category.name}</span> <span class="doted"> ' </span> <span class="brandname"> ${item.brand}</span></p>
           <h5 class="card-title">${item.name}</h5>
           <p class="card-text">${Math.floor(item.rating)}</p>
           <p class="card-text">${item.price}</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
        `
    })
}

function showPagination() {
    const pag = document.getElementById("pag");
    pag.innerHTML = "";
    const previus = document.createElement("button");
    previus.classList.add("pagi");
    previus.innerText = "<";
    previus.disabled = page === 1;
    previus.onclick = () => {
        previus.style.backgroundColor = "#1ECC5C";
        previus.style.color = "white";
        soft.innerHTML = "";
        if (isSearch) {
            searchProduct(page - 1);
        } else if (isFilter) {
            filterProducts(page - 1);
        }
        else {
            loadProducts(page - 1);
        }
    }
    pag.appendChild(previus);

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement("button");
        btn.classList.add("pagi");
        btn.innerText = i;

        if (i === page) {
            btn.disabled = true;
            btn.style.backgroundColor = "#1ECC5C";
            btn.style.color = "white";
        }
        btn.onclick = () => {
            soft.innerHTML = "";

            if (isSearch) {
                searchProduct(i);
            } else if (isFilter) {
                filterProducts(i);
            }
            else {
                loadProducts(i);
            }
        }
        pag.appendChild(btn);
    }
    const next = document.createElement("button");
    next.classList.add("pagi");
    next.innerText = ">";
    next.disabled = page === pageCount;
    next.onclick = () => {
        next.style.backgroundColor = "#1ECC5C";
        next.style.color = "white";
        soft.innerHTML = "";
        if (isSearch) {
            searchProduct(page + 1);
        } else if (isFilter) {
            filterProducts(page + 1);
        }
        else {
            loadProducts(page + 1);
        }
    }

    pag.appendChild(next);
}

loadProducts(1);


