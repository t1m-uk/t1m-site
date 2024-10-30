// Apply the stored theme preference immediately
const storedTheme = localStorage.getItem('dark');
if (storedTheme === '1') {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.removeAttribute('data-theme');
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');

    // Function to set button text and aria-label based on theme
    function updateToggleButton(isDarkMode) {
        if (isDarkMode) {
            themeToggleButton.innerHTML = '🌙 &rarr; 🌞'; // Moon→Sun
            themeToggleButton.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeToggleButton.innerHTML = '🌞 &rarr; 🌙'; // Sun→Moon
            themeToggleButton.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    // Determine the current theme and update the toggle button
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    updateToggleButton(isDarkMode);

    // Theme toggle click event
    themeToggleButton.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            // Switch to light mode: remove dark theme and delete LocalStorage entry
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('dark'); // Delete dark mode preference
            updateToggleButton(false); // Update to light mode
        } else {
            // Switch to dark mode: set dark theme and store preference in LocalStorage
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('dark', '1'); // Store dark mode preference
            updateToggleButton(true); // Update to dark mode
        }
    });
});
