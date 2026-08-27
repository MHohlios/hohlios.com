// Theme toggle (celadon ↔ sky) and click-to-copy email. No dependencies.
(function () {
  const root = document.documentElement;
  const label = document.getElementById('theme-label');

  function applyTheme(theme) {
    root.dataset.theme = theme;
    label.textContent = theme === 'sky' ? 'celadon-sky' : 'celadon';
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  applyTheme(root.dataset.theme || 'celadon');
  document.getElementById('theme-toggle').addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'sky' ? 'celadon' : 'sky');
  });

  const copy = document.getElementById('copy-email');
  const address = document.querySelector('.email').textContent;
  const idleLabel = copy.textContent;
  copy.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(address); } catch (e) { return; }
    copy.textContent = 'COPIED ✓';
    setTimeout(() => { copy.textContent = idleLabel; }, 1600);
  });
})();
