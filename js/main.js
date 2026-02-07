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
    `© ${new Date().getFullYear()} ${p.displayName} (${p.academicName}). All rights reserved.`;

  // Education
  const eduList = document.getElementById('education-list');
  p.education.forEach(edu => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${edu.institution}</strong><br>
      ${edu.degree} | ${edu.dates}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}<br>
      <em>${edu.location}</em>`;
    eduList.appendChild(li);
  });

  // Skills
  const renderTags = (parent, items) => {
    const container = document.createElement('div');
    container.className = 'skill-tags';
    items.forEach(item => {
      const span = document.createElement('span');
      span.className = 'skill-tag';
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
    div.innerHTML = `<strong>${label}:</strong>`;
    renderTags(div, items);
    skillsContainer.appendChild(div);
  }

  // Projects — with precise academic citation
  const projList = document.getElementById('projects-list');
  p.projects.forEach(proj => {
    const article = document.createElement('div');
    article.className = 'project';

    const h3 = document.createElement('h3');
    h3.textContent = proj.name;
    const meta = document.createElement('div');
    meta.className = 'project-meta';
    meta.textContent = proj.date;
    const desc = document.createElement('p');
    desc.textContent = proj.description;

    const techDiv = document.createElement('div');
    techDiv.className = 'tech-stack';
    proj.tech.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'tech-tag';
      tag.textContent = t;
      techDiv.appendChild(tag);
    });

    const outcome = document.createElement('p');
    let outcomeText = proj.outcomes;
    if (proj.isPublished) {
      outcomeText += ` Published as ${p.academicName} et al., ${proj.conference} ${proj.year}.`;
    }
    outcome.textContent = outcomeText;

    let linksContainer = null;
    if (proj.links.paper || proj.links.github || proj.links.demo) {
      linksContainer = document.createElement('div');
      linksContainer.className = 'project-links';
      if (proj.links.paper) {
        const a1 = document.createElement('a');
        a1.href = proj.links.paper;
        a1.target = '_blank';
        a1.textContent = '📄 Paper';
        linksContainer.appendChild(a1);
      }
      if (proj.links.github) {
        const a2 = document.createElement('a');
        a2.href = proj.links.github;
        a2.target = '_blank';
        a2.textContent = '💻 Code';
        linksContainer.appendChild(a2);
      }
      if (proj.links.demo) {
        const a3 = document.createElement('a');
        a3.href = proj.links.demo;
        a3.target = '_blank';
        a3.textContent = '🖥️ Demo';
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
      li.textContent = item;
      ul.appendChild(li);
    });
  };
  renderList('awards-list', p.awards);
  renderList('certs-list', p.certificates);
  renderList('volunteer-list', p.volunteering);

  // Social
  const socialMap = [
    { key: 'github', label: 'GitHub' },
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'google_scholar', label: 'Google Scholar' },
    { key: 'resume', label: 'Resume' }
  ];
  const socialContainer = document.getElementById('social-links');
  socialMap.forEach(({ key, label }) => {
    if (p.social[key]) {
      const a = document.createElement('a');
      a.href = p.social[key];
      a.target = '_blank';
      a.className = 'social-btn';
      a.innerHTML = `<span>🔗</span> ${label}`;
      socialContainer.appendChild(a);
    }
  });
});