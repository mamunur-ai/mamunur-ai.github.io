/**
 * Lightweight Logic for Academic Profile
 * Handles Theme Toggling and Interactive Elements
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Robust Dark Mode Toggle ---
    const themeBtn = document.getElementById('theme-btn');
    const htmlElement = document.documentElement;
    const icon = themeBtn.querySelector('i');

    // Logic: Check LocalStorage -> Check System Preference -> Default to Light
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply initial theme
    if (savedTheme === 'dark' |

| (!savedTheme && systemPrefersDark)) {
        setTheme('dark');
    }

    // Toggle Event Listener
    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark'? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update Icon
        if (theme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // --- 2. BibTeX Toggle Mechanism ---
    // Allows users to expand/collapse citation blocks
    const bibtexButtons = document.querySelectorAll('.bibtex-toggle');

    bibtexButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const bibtexDiv = document.getElementById(targetId);
            
            // Toggle visibility class
            if (bibtexDiv.classList.contains('hidden')) {
                bibtexDiv.classList.remove('hidden');
                btn.textContent = 'Hide BibTeX';
                // Optional: Copy to clipboard logic could go here
            } else {
                bibtexDiv.classList.add('hidden');
                btn.textContent = 'BibTeX';
            }
        });
    });

    // --- 3. Dynamic Footer Year ---
    document.getElementById('year').textContent = new Date().getFullYear();
});
