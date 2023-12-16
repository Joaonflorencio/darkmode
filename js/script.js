const body = document.body;
const darkModeButton = document.getElementById('toggle-button')
const circle = document.querySelector('.circle')

const toggleDarkMode = () => {
    body.classList.toggle('dark-mode');
    circle.classList.toggle('night');
}

darkModeButton.addEventListener('click', toggleDarkMode);