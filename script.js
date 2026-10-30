const header = document.querySelector('.site-header');
const sectionLinks = [...document.querySelectorAll('nav a[data-section]')];
let scheduled = false;

function updateNavigation() {
  header.classList.toggle('scrolled', window.scrollY > 12);
  let current = '';
  for (const link of sectionLinks) {
    const section = document.getElementById(link.dataset.section);
    if (section.getBoundingClientRect().top <= 150) current = link.dataset.section;
  }
  if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    current = sectionLinks.at(-1).dataset.section;
  }
  sectionLinks.forEach(link => {
    if (link.dataset.section === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
updateNavigation();

const copyButton = document.getElementById('copy-citation');
const copyStatus = document.getElementById('copy-status');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  const citation = document.getElementById('citation-text');
  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    copyStatus.textContent = 'Citation copied.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = 'Text selected. Press Ctrl+C or ⌘C to copy.';
  }
});
