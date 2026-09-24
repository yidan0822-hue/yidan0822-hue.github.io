(function () {
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');
  const icon = button ? button.querySelector('.theme-icon') : null;

  function updateThemeButton() {
    if (!button || !icon) return;
    const dark = root.dataset.theme === 'dark';
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    icon.textContent = dark ? '☾' : '☼';
  }

  if (button) {
    button.addEventListener('click', function () {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('yidan-theme', next);
      updateThemeButton();
    });
    updateThemeButton();
  }
}());
