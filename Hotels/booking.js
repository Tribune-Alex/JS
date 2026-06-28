function backToMain() {
    window.location.href = "index.html";
};

const rooms = document.getElementById("rooms");

const saveData = localStorage.getItem("selectedobject");
const obj = JSON.parse(saveData);


const object = {
    id: obj.roomId,
    name: obj.roomname,
    hotelId: obj.hotelId,
    image: obj.image,
    totalPrice: obj.price,
    maxpersons: obj.maxpersons
}

console.log(object)

function upload() {
    rooms.innerHTML += makecard(object);
};

upload();

function makecard(data) {
    return `<div class="card" style="width:50%;" data-id=${data.id} data-price=${data.totalPrice} data-image=${data.image} data-capacity=${data.maxpersons}>
        <img src="${data.image}" class="card-img-top">
        <div class="card-body">
            <h5>${data.name}</h5>
            <p>Price: ${data.totalPrice}$</p>
            <p>Max Persons: ${data.maxpersons}</p>
        </div>
    </div>`
};

const name = document.getElementById("name");
const phone = document.getElementById("phone");
const checkin = document.getElementById("checkIn");
const checkout = document.getElementById("checkOut");




const but = document.getElementById("but");
const generatorId = Math.round(Math.random() * 100);
but.addEventListener("click", async () => {
    const toupload = {
        id: 0,
        roomID: object.id,
        checkInDate: new Date(checkin.value).toISOString(),
        checkOutDate: new Date(checkout.value).toISOString(),
        totalPrice: object.totalPrice,
        isConfirmed: true,
        customerName: name.value,
        customerId: generatorId.toString(),
        customerPhone: phone.value.toString()
    };

    
    const res = await fetch("https://hotelbooking.stepprojects.ge/api/Booking", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            accept: "text/plain"
        },
        body: JSON.stringify(toupload)
    })
    const text = await res.text();
    console.log("SERVER RESPONSE:", text);

    if (!res.ok) {
        throw new Error(text);
    }

});


