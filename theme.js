(() => {
  const STORAGE_KEY = 'theme';
  const SAVE_KEY = 'theme-save';
  const buttons = document.querySelectorAll('.theme-btn');
  const checkbox = document.getElementById('theme-save');

  const saved = localStorage.getItem(SAVE_KEY) === '1';
  checkbox.checked = saved;

  function setTheme(name) {
    document.documentElement.setAttribute('data-theme', name);
    buttons.forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.theme === name);
    });
    if (checkbox.checked) {
      localStorage.setItem(STORAGE_KEY, name);
    }
  }

  // Restore saved theme
  if (saved) {
    const theme = localStorage.getItem(STORAGE_KEY);
    if (theme) setTheme(theme);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.theme));
  });

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      localStorage.setItem(SAVE_KEY, '1');
      const current = document.documentElement.getAttribute('data-theme') || 'parchment';
      localStorage.setItem(STORAGE_KEY, current);
    } else {
      localStorage.removeItem(SAVE_KEY);
      localStorage.removeItem(STORAGE_KEY);
    }
  });
})();
