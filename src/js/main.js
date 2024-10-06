import data from "./data.json";
// console.log(data);
// Dom Targeting
const cardsRow = document.querySelector("#cards-row");
const inputEl = document.querySelector("input");
// add para data
// const paragraph = document.createElement("p");
// paragraph.textContent ="our class";
// cardsRow.appendChild(paragraph);
for (let pokemonobj of data ) {
    const div = document.createElement("div");
   div.classList.add("col");
   div.innerHTML= `<div class="card">
                <img src="${pokemonobj.image}">
                <div class="card-body">
                  <h5 class="card-title">${pokemonobj.name}</h5>
                  <p class="card-text">${pokemonobj.description}</p>
                </div>
              </div>`;
              cardsRow.appendChild(div);
}

console.log(cardsRow);
for (let pokemonobj of data) {
    console.log(pokemonobj.name);
}


// console.log(inputEl)
// inputEl.focus();
// document.addEventListener("keypress",function (){
// console.log("hello");
// });
// document.addEventListener("keypress",function (event){
//     console.log(eventvent.key);
// });
// Focus input
document.addEventListener("keypress",function (event){
        if(event.key=== "/") {
            // don't input
            event.preventDefault();
            inputEl.focus();
        };
     });