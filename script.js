const API_KEY = "f43bc26577a5235f5bc1f8ba8f17f742";
const box = document.querySelector("main");
const template = document.querySelector("#template-card");

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(d => {
    d.results.forEach(m => {
      const clone = template.cloneNode(true);
      clone.style.display = "flex";
      clone.querySelector("img").src = `https://image.tmdb.org/t/p/w500${m.poster_path}`;
      clone.querySelector("h4").textContent = m.title;
      clone.querySelector("p").textContent = m.release_date;
      box.appendChild(clone);
    });
  })
  .catch(console.error);
;