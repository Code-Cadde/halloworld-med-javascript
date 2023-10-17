let loopArray = ["Sova", "Käka", "Tjöta"];


document.addEventListener("DOMContentLoaded", function() {
    const h1namn = document.getElementById("namn");
    h1namn.innerHTML = "Alexander Cadier";
});

for (let i = 0; i < loopArray.length; i++) {
    console.log(loopArray);
}

console.log("Hej hej ");