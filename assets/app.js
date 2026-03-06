async function loadSiteContent() {
  const response = await fetch('content/site.json');
  if (!response.ok) {
    throw new Error('Could not load site content.');
  }
  return response.json();
}

function createButton(label, href, className = 'btn secondary') {
  const a = document.createElement('a');
  a.textContent = label;
  a.href = href;
  a.className = className;
  if (href.startsWith('http')) a.target = '_blank';
  if (href.startsWith('http')) a.rel = 'noreferrer';
  return a;
}

function renderSite(data) {
  document.title = `${data.name} | AI Consultant`;
  document.getElementById('brandName').textContent = data.name;
  document.getElementById('heroName').textContent = data.name;
  document.getElementById('heroTagline').textContent = data.tagline;
  document.getElementById('aboutText').textContent = data.about;
  document.getElementById('contactIntro').textContent = data.contactIntro;
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('footerText').innerHTML = `&copy; ${new Date().getFullYear()} ${data.name}`;

  const emailHref = `mailto:${data.contact.email}?subject=AI%20Consulting%20Inquiry`;
  document.getElementById('primaryContact').href = emailHref;

  const servicesGrid = document.getElementById('servicesGrid');
  servicesGrid.innerHTML = '';
  data.services.forEach((service) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
    servicesGrid.appendChild(card);
  });

  const actions = document.getElementById('contactActions');
  actions.innerHTML = '';
  actions.appendChild(createButton('Email Me', emailHref, 'btn primary'));
  if (data.contact.linkedin) actions.appendChild(createButton('LinkedIn', data.contact.linkedin));
  if (data.contact.calendar) actions.appendChild(createButton('Book a Call', data.contact.calendar));

  document.getElementById('emailTextLink').textContent = data.contact.email;
  document.getElementById('emailTextLink').href = emailHref;

  const linkedinTextLink = document.getElementById('linkedinTextLink');
  if (data.contact.linkedin) {
    linkedinTextLink.textContent = data.contact.linkedin;
    linkedinTextLink.href = data.contact.linkedin;
  } else {
    linkedinTextLink.textContent = 'Not provided';
    linkedinTextLink.href = '#';
  }
}

loadSiteContent()
  .then(renderSite)
  .catch((error) => {
    document.getElementById('heroName').textContent = 'Site content failed to load';
    document.getElementById('heroTagline').textContent = error.message;
  });
