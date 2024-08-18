const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('change', () => {
    const isDarkMode = themeToggle.checked;
    if (!isDarkMode) {
        document.querySelector('body').classList.add('light');
    }  else {
        document.querySelector('body').classList.remove('light');
    }
});