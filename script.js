const API_KEY = "f43bc26577a5235f5bc1f8ba8f17f742";
const box = document.querySelector("main");

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  .then(r => r.json())
  .then(d => {
    d.results.forEach(m => {
      box.innerHTML += `
        <div class="card">
          <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" alt="${m.title}">
          <h4>${m.title}</h4>
          <p>${m.release_date}</p>
        </div>`;
    });
  })
  .catch(err => console.error("Error fetching movies:", err));