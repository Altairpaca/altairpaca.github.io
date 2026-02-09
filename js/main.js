document.addEventListener('DOMContentLoaded', () => {
  const p = profile;

  // Hero section
  document.getElementById('display-name').textContent = p.displayName;
  document.getElementById('title').textContent = `${p.academicStatus} | ${p.titleSuffix}`;
  document.getElementById('email-link').href = `mailto:${p.email}`;
  document.getElementById('email-link').textContent = p.email;
  document.getElementById('avatar').src = p.avatar_url;
  document.getElementById('career-goals').textContent = p.career_goals;

  // Footer
  document.getElementById('footer-text').textContent =
    `\u00a9 ${new Date().getFullYear()} ${p.displayName} (${p.academicName}). All rights reserved.`;

  // Education
  const eduList = document.getElementById('education-list');
  p.education.forEach(edu => {
    const li = document.createElement('li');
    li.className = 'glass-card p-4 rounded-lg';
    li.innerHTML = `<strong class="text-white">${edu.institution}</strong><br>
      ${edu.degree} | ${edu.dates}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}<br>
      <em class="text-gray-400">${edu.location}</em>`;
    eduList.appendChild(li);
  });

  // Skills
  const renderTags = (parent, items) => {
    const container = document.createElement('div');
    container.className = 'flex flex-wrap gap-2 mt-2';
    items.forEach(item => {
      const span = document.createElement('span');
      span.className = 'skill-badge px-3 py-1 rounded-full text-sm text-blue-300 border';
      span.textContent = item;
      container.appendChild(span);
    });
    parent.appendChild(container);
  };

  const skillsContainer = document.getElementById('skills-container');
  for (const [category, items] of Object.entries(p.skills)) {
    const div = document.createElement('div');
    const label = category
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
    div.innerHTML = `<strong class="text-blue-300">${label}:</strong>`;
    renderTags(div, items);
    skillsContainer.appendChild(div);
  }

  // Projects — with precise academic citation
  const projList = document.getElementById('projects-list');
  p.projects.forEach(proj => {
    const article = document.createElement('div');
    article.className = 'project-card glass-card p-5 rounded-lg';

    const h3 = document.createElement('h3');
    h3.className = 'text-xl font-semibold text-white mb-2';
    h3.textContent = proj.name;
    const meta = document.createElement('div');
    meta.className = 'text-gray-400 mb-3';
    meta.textContent = proj.date;
    const desc = document.createElement('p');
    desc.className = 'text-gray-200 mb-3';
    desc.textContent = proj.description;

    const techDiv = document.createElement('div');
    techDiv.className = 'tech-stack flex flex-wrap gap-2 mb-3';
    proj.tech.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'tech-font bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs';
      tag.textContent = t;
      techDiv.appendChild(tag);
    });

    const outcome = document.createElement('p');
    let outcomeText = proj.outcomes;
    if (proj.isPublished) {
      outcomeText += ` Published on ${proj.conference} ${proj.year}.`;
    }
    outcome.className = 'text-gray-300';
    outcome.textContent = outcomeText;

    let linksContainer = null;
    if (proj.links.paper || proj.links.github || proj.links.demo) {
      linksContainer = document.createElement('div');
      linksContainer.className = 'project-links mt-4 flex gap-3';
      if (proj.links.paper) {
        const a1 = document.createElement('a');
        a1.href = proj.links.paper;
        a1.target = '_blank';
        a1.className = 'text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1';
        a1.innerHTML = `<i class="fas fa-file-alt"></i> Paper`;
        linksContainer.appendChild(a1);
      }
      if (proj.links.github) {
        const a2 = document.createElement('a');
        a2.href = proj.links.github;
        a2.target = '_blank';
        a2.className = 'text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1';
        a2.innerHTML = `<i class="fab fa-github"></i> Code`;
        linksContainer.appendChild(a2);
      }
      if (proj.links.demo) {
        const a3 = document.createElement('a');
        a3.href = proj.links.demo;
        a3.target = '_blank';
        a3.className = 'text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1';
        a3.innerHTML = `<i class="fas fa-external-link-alt"></i> Demo`;
        linksContainer.appendChild(a3);
      }
    }

    article.appendChild(h3);
    article.appendChild(meta);
    article.appendChild(desc);
    article.appendChild(techDiv);
    article.appendChild(outcome);
    if (linksContainer) article.appendChild(linksContainer);

    projList.appendChild(article);
  });

  // Honors
  const renderList = (id, items) => {
    const ul = document.getElementById(id);
    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2';
      li.innerHTML = `<i class="fas fa-check-circle text-green-400 mt-1"></i> ${item}`;
      ul.appendChild(li);
    });
  };
  renderList('awards-list', p.awards);
  renderList('certs-list', p.certificates);
  renderList('volunteer-list', p.volunteering);

  // Social
  const socialMap = [
    { key: 'github', label: 'GitHub', icon: 'fab fa-github' },
    { key: 'linkedin', label: 'LinkedIn', icon: 'fab fa-linkedin' },
    { key: 'google_scholar', label: 'Google Scholar', icon: 'fas fa-graduation-cap' },
    { key: 'resume', label: 'Resume', icon: 'fas fa-file-pdf' }
  ];
  const socialContainer = document.getElementById('social-links');
  socialMap.forEach(({ key, label, icon }) => {
    if (p.social[key]) {
      const a = document.createElement('a');
      a.href = p.social[key];
      a.target = '_blank';
      a.className = 'social-link px-4 py-2 rounded-lg flex items-center gap-2';
      a.innerHTML = `<i class="${icon}"></i> ${label}`;
      socialContainer.appendChild(a);
    }
  });
});
