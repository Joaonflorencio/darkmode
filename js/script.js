document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#toggle-dark-mode');
    toggleSwitch.addEventListener('change', toggleDarkMode, false);

    function toggleDarkMode(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
});