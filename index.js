const movies = [
  { title: "Batman", year: 2022, description: "this is movie about bats" },
  { title: "Avatar", year: 2009, description: "this is movie about blue guys" },
  { title: "Inception", year: 2010, description: "this is deep movie" },
];

const diveElement = document.getElementById("list"); 


for (let i = 0; i < movies.length; i++) {
  diveElement.innerHTML += `
    <div class="movie">
      <h2>${movies[i].title} (${movies[i].year})</h2>
      <p>${movies[i].description}</p>
    </div>
  `;
}