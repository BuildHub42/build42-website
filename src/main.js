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

function setupContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const firstName = data.get('First name') || '';
    const lastName = data.get('Last name') || '';
    const organization = data.get('Organization') || '';
    const message = data.get('Message') || '';
    const senderName = `${firstName} ${lastName}`.trim();

    const body = [
      senderName && `Name: ${senderName}`,
      organization && `Organization / Venture: ${organization}`,
      '',
      message
    ].filter((line) => line !== false).join('\n');

    const mailto = new URL('mailto:hello@build42.com');
    mailto.searchParams.set('subject', 'Build42 inquiry');
    mailto.searchParams.set('body', body);
    window.location.href = mailto.toString();
  });
}

renderServices();
renderTracks();
renderAbout();
setupContactForm();
