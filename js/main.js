/* --- Mobil Menü Kezelése --- */
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

/* --- Sticky Header (Összehúzódás görgetéskor) --- */
window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* Menü bezárása kattintáskor (hogy ne maradjon nyitva mobilon navigálás után) */
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mainNav').classList.remove('active');
    });
});