const toggle = document.getElementById('citation-toggle');
const citation = document.getElementById('citation');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  citation.hidden = expanded;
  toggle.textContent = expanded ? 'Citation' : 'Hide citation';
});
