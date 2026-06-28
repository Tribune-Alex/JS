const sec = document.getElementById("sec");
const hotels = document.getElementById("hotels");

function getAll() {
    fetch("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll")
        .then((response) => response.json())
        .then((data) => {
            hotels.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                hotels.innerHTML += cartPrint(data[i])
            }
        })
};



function cartPrint(hotls) {
    return `<div class="card" style="width: 18rem;">
  <img src="${hotls.featuredImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${hotls.name}</h5>
    <p class="card-text">${hotls.address}</p>
    <p class="card-text">${hotls.city}</p>
    <p class="card-text">${hotls.id}</p>
    <button type="button" class="btn btn-primary" id="get" onclick="getHotelId(${hotls.id})">Detail</button>
  </div>
</div>`
};

function getHotelId(id) {
    fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
        .then((response) => response.json())
        .then((hoteldata) => {

            hotels.innerHTML = "";

            for (let i = 0; i < hoteldata.rooms.length; i++) {
                hotels.innerHTML += roomPrint(hoteldata.rooms[i],hoteldata.id);
            };

        })


};

function roomPrint(room,hotelId) {
    return `
    <div class="card" style="width:18rem;" data-hotel=${hotelId} data-id=${room.id} data-price=${room.pricePerNight} data-image=${room.images[0].source} data-name=${room.name} data-capacity=${room.maximumGuests}>
        <img src="${room.images[0].source}" class="card-img-top">
        <div class="card-body">
            <h5>${room.name}</h5>
            <p>Price: ${room.pricePerNight}$</p>
            <p>Max Persons: ${room.maximumGuests}</p>
            <p>${room.available ? "Available" : "Booked"}</p>
            <input type="number" class="form-control quantity-input" value="1" min="1">
            <button onclick="saveTo()"  class="save">Book</button>
        </div>
    </div>
    `

};



function saveTo(){
    const buttons = document.querySelectorAll(".save");
    buttons.forEach((justdo)=>{
        justdo.addEventListener("click", async(e)=>{
            const card = e.target.closest(".card");
            const roomId=parseInt(card.dataset.id);
            const hotelId=parseInt(card.dataset.hotel);
            const roomname=card.dataset.name;
            const pricepernight=Number(card.dataset.price);
            const image=card.dataset.image;
            const maxpersons=card.dataset.capacity;
            const quantityInput = card.querySelector(".quantity-input");
            const quantity = parseInt(quantityInput.value);
            
            const filetosave={
                roomId,
                hotelId,
                image,
                roomname,
                maxpersons,
                price:quantity*pricepernight
            }
            localStorage.setItem("selectedobject", JSON.stringify(filetosave));
            window.location.href="booking.html";

        })
    })
};





function getBooked() {
    fetch(`https://hotelbooking.stepprojects.ge/api/Booking`)
        .then((response) => response.json())
        .then((bookeddata) => {
            hotels.innerHTML = "";
            for (let i = 0; i < bookeddata.length; i++) {
                hotels.innerHTML += bookedrooms(bookeddata[i]);
            }
        })
};

function bookedrooms(not) {
    return `
    <div class="card" style="width:18rem;">
        <div class="card-body">
            <h5>${not.checkInDate}</h5>
            <h5>${not.checkOutDate}</h5>
            <p>Price: ${not.totalPrice}$</p>
            <p>Confirmed: ${not.isConfirmed}</p>
            <p>Customer name: ${not.customerName}</p>
            <p>Customer id: ${not.customerId}</p>
            <p>Customer number: ${not.customerPhone}</p>
            
        </div>
    </div>
    `
};
