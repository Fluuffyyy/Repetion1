/* Nivå 1 – Event + funktion (basdiagnos)
### Uppgift: Klickräknare

**Bygg allt från scratch. (Ingen hjälp av AI under repetitionen)**

### Krav
- Skapa en knapp i HTML
- Vid klick:
  - en funktion körs ( FUNKAR )
  - räknaren ökar med 1 ( FUNKAR )
  - värdet visas i DOM ( FUNKAR )

### Regler
- Funktionen ska vara separat
- Ingen kod direkt i event-lyssnaren
- `console.log` är tillåtet

### Diagnostiserar
- Kan de skriva funktioner själva?
- Förstår de event listeners?
- Förstår de när kod körs? */ 

let count = 0;


function HandleClick () {
    count++; 
        document.getElementById("count").textContent = count;
}

document.getElementById("btn").addEventListener("click", HandleClick);  // Glömde skriva "click"
