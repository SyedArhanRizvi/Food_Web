let burger = document.querySelector("#burger1");
let pizza = document.querySelector("#pizza1");
let ice = document.querySelector("#ice-crea");
let cold = document.querySelector("#cold1");
let chines = document.querySelector("#chin");

// Order List
let hide1 = document.querySelector(".hide1");
let hide2 = document.querySelector(".hide2");
let hide3 = document.querySelector(".hide3");
let hide4 = document.querySelector(".hide4");
let hide5 = document.querySelector(".hide5");


// Changing Logic :

burger.addEventListener("click", () => {
    hide1.style.display = "flex";
    burger.style.border = "1px solid black";
    pizza.style.border = "none";
    cold.style.border = "none";
    ice.style.border = "none";
    chines.style.border = "none";
    hide2.style.display = "none";
    hide3.style.display = "none";
    hide4.style.display = "none";
    hide5.style.display = "none";
});

pizza.addEventListener("click", () => {
    hide1.style.display = "none";
    hide2.style.display = "flex";
    burger.style.border = "none";

    pizza.style.border = "1px solid black";
    cold.style.border = "none";
    ice.style.border = "none";
    chines.style.border = "none";
    hide3.style.display = "none";
    hide4.style.display = "none";
    hide5.style.display = "none";
});

ice.addEventListener("click", () => {
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "flex";
    burger.style.border = "none";
    pizza.style.border = "none";
    cold.style.border = "none";
    chines.style.border = "none";
    ice.style.border = "1px solid black";
    hide4.style.display = "none";
    hide5.style.display = "none";
});

cold.addEventListener("click", () => {
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "none";
    hide4.style.display = "flex";
    burger.style.border = "none";
    pizza.style.border = "none";
    ice.style.border = "none";
    chines.style.border = "none";
    cold.style.border = "1px solid black";
    hide5.style.display = "none";
});

chines.addEventListener("click", () => {
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "none";
    hide4.style.display = "none";
    hide5.style.display = "flex";
    burger.style.border = "none";
    pizza.style.border = "none";
    cold.style.border = "none";
    ice.style.border = "none";
    chines.style.border = "1px solid black";
});



// let orderForBurger = (b)=>{
//     if(b === "brgr1") {}
// }



// Background Changer :


let orderNow = document.querySelectorAll(".ordernow");
orderNow.forEach((btn) => {
    let a = btn.getAttribute('id');
    btn.addEventListener("click", () => {
        let rendomCode = Math.floor(Math.random() * 13545646);
        console.log(rendomCode);

        let bookingId = "#" + rendomCode;
        if (a === "brgr1" || a === "brgr2" || a === "brgr3") {
            if(a === "brgr1") {
                let div = document.createElement("div");
                div.innerHTML = `
                <img src='./imgs/b2.png' class="bb1">
                <p>${bookingId}</p>
                `
                console.log(div);

            } else if(a === "brgr2") {
                let div = document.createElement("div");
                div.innerHTML = `
                <img src="./imgs/2.jpg" class="bb1">
                <p>${bookingId}</p>
                `
                console.log(div);
            } else {
                let div = document.createElement("div");
                div.innerHTML = `
                <img src="./imgs/2.jpg" class="bb1">
                <p>${bookingId}</p>
                `
                console.log(div);
            }
        } else if (a === "pizza1" || a === "pizza2" || a === "pizza3") {
            if(a === "pizza1") {

            } else if(a === "pizza2") {

            } else {

            }
        } else if (a === "ice1" || a === "ice2" || a === "ice3") {
            if(a === "ice1") {

            } else if(a === "ice2") {

            } else {

            }
        } else if (a === "cold1" || a === "cold2" || a === "cold3") {
            if(a === "cold1") {

            } else if(a === "cold2") {

            } else {

            }
        } else if (a === "china1" || a === "china2" || a === "china3") {
            if(a === "china1") {

            } else if(a === "china2") {

            } else {

            }
        }
    })


});
