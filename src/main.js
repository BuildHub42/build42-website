const content = window.SITE_CONTENT;

function renderServices() {
  const target = document.querySelector('[data-render="services"]');
  target.innerHTML = content.services.map((service) => `
    <article class="info-card">
      <div class="card-icon" aria-hidden="true"></div>
      <h3>${service.title}</h3>
      <p class="card-subtitle">${service.subtitle}</p>
      <p>${service.text}</p>
    </article>
  `).join("");
}

function renderTracks() {
  const target = document.querySelector('[data-render="tracks"]');
  target.innerHTML = content.tracks.map((track) => `
    <article class="track-card">
      <p class="track-label">${track.label}</p>
      <h3>${track.title}</h3>
      <p class="card-subtitle">${track.audience}</p>
      <p>${track.text}</p>
      <div class="track-items">
        ${track.items.map(([title, text]) => `
          <div>
            <strong>${title}</strong>
            <span>${text}</span>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderAbout() {
  const target = document.querySelector('[data-render="about"]');
  target.innerHTML = content.about.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

renderServices();
renderTracks();
renderAbout();
