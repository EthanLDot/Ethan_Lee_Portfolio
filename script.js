function setTheme(theme){
    const root = document.documentElement;
    console.log(theme==='light');
    if(theme==='light') {
        root.style.setProperty('--background', 'var(--background-color-light)');
        root.style.setProperty('--text-color', 'var(--text-color-light)');
        root.style.setProperty('--header', 'var(--header-background-light)');
        root.style.setProperty('--text-unfocused', 'var(--text-unfocused-light)');
        root.style.setProperty('--text-focused', 'var(--text-focused-light)');
    }
    else
    {
        root.style.setProperty('--background', 'var(--background-color-dark)');
        root.style.setProperty('--text-color', 'var(--text-color-dark)');
        root.style.setProperty('--header', 'var(--header-background-dark)');
        root.style.setProperty('--text-unfocused', 'var(--text-unfocused-dark)');
        root.style.setProperty('--text-focused', 'var(--text-focused-dark)');
    }
}

function toggleTheme() {
    const currTheme = localStorage.getItem('theme') || 'dark';
    let newTheme = '';
    if(currTheme === 'dark'){
        newTheme = 'light';
    }
    else
    {
        newTheme = 'dark';
    }
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        setTheme(savedTheme);
        document.getElementById('themeToggle').checked = savedTheme === 'light';
    }
})