/*
## Nivå 2 – DOM + loop
### Uppgift: Lista med namn

**All HTML skapas via JavaScript.**

### Krav
- Skapa en array med minst 5 namn
- Vid klick:
  - loopa igenom arrayen
  - rendera varje namn i DOM
- Listan ska tömmas före ny rendering

### Extra
- Visa index framför namnet

### Diagnostiserar
- Loop-förståelse
- DOM-manipulation
- Blandning av logik och rendering */

const nameList = ["Robin", "Anna", "Fredrik", "Sebastian", "Kim"];
console.log (nameList) // Funkar.
// console.log(nameList[0]) --  Ska stå Robin. funkar.

// Knapp
const button = document.createElement("button"); // <button><button>
button.textContent = "Click Me!"; //<button>Click Me!<button>
document.body.appendChild(button); // Kopplar den knappen till HTML / Body.
button.addEventListener("click", HandleClick);

function HandleClick() {
    div.textContent = ""; // Töm listan först

    for (let i = 0; i < nameList.length; i++) {
        div.textContent += nameList[i] + " ";
    }
}
const div = document.createElement("div");
document.body.appendChild(div);
console.log(div);
// div.textContent = (nameList);
button.addEventListener("click", HandleClick);

// let i = 0 -- Startvärde. 









