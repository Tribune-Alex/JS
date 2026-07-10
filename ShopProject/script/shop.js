const apikey = "413d0fd3-56b2-4f27-94d5-b2337cff7794";



async function loadCategories() {
    const load = await fetch("https://shopapi.stepacademy.ge/api/categories", {
        headers: {
            'x-api-key': apikey
        }
    })

    const catjson=await load.json();
    showCategories(catjson.data);
}

function showCategories(files){
    const catmenu=document.getElementById("categoriesMenu");
    const check=document.getElementById("check");
    files.innerHTML="";
    files.forEach(file=>{
        catmenu.innerHTML+=`
        <li>
                    <a class="dropdown-item" href="#" onclick="filter(${file.id})">
                        ${file.name} <span class="counts"> ${file.productCount}</span>
                    </a>
                </li>
        `

        check.innerHTML+=`
        <label><input type="radio" class="lab" name="filter" value="red">${file.name} <span class="counts"> ${file.productCount}</span></label>
        `
    })
}


loadCategories();






const pageSize = 8;
let page = 1;
let pageCount = 1;

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
           <p class="card-text">${item.rating}</p>
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
        loadProducts(page - 1);
    }
    pag.appendChild(previus);

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement("button");
        btn.classList.add("pagi");
        btn.innerText = i;

        if (i === page) {
            btn.disabled = true;
        }
        btn.onclick = () => {
            btn.style.backgroundColor = "#1ECC5C";
            btn.style.color = "white";
            soft.innerHTML = "";
            loadProducts(i);
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
        loadProducts(page + 1);
    }

    pag.appendChild(next);
}

loadProducts(1);