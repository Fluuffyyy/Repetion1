const people = [
  { namn: "Robin", ålder: 25 },
  { namn: "Anna", ålder: 30 },
  { namn: "Markus", ålder: 35 },
  { namn: "Lasse", ålder: 40 },
  { namn: "Erik", ålder: 20 }
];

const input = document.getElementById("ageInput");
const button = document.getElementById("filterBtn");
const result = document.getElementById("resultat");

button.addEventListener("click", () => {
  const minAge = Number(input.value);

  const filteredPeople = people.filter(person => person.ålder >= minAge);

  result.innerHTML = "";

  filteredPeople.forEach(person => {
    const li = document.createElement("li");
    li.textContent = `${person.namn} (${person.ålder} år)`;
    result.appendChild(li);
  });
});
