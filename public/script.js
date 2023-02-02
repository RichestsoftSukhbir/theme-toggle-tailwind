function toggleMode() {
    if(localStorage.theme === 'dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

toggleMode();

document.querySelector('.toggle-theme.dark-mode').addEventListener('click', function() {
    localStorage.theme = 'dark';
    toggleMode();
})
document.querySelector('.toggle-theme.light-mode').addEventListener('click', function() {
    localStorage.theme = 'light';
    toggleMode();
})
document.querySelector('.toggle-theme.os-mode').addEventListener('click', function() {
    localStorage.removeItem('theme')
    toggleMode();
})