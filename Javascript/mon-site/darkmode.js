const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
if (darkModeEnabled) {
    body.classList.add('dark-mode');
    darkModeButton.textContent = 'Mode Clair';
}


darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

 
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Mode Clair';
        localStorage.setItem('darkMode', 'true');
    } else {
        darkModeButton.textContent = 'Mode Sombre';
        localStorage.setItem('darkMode', 'false');
    }
});
