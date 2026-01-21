document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Megakadályozza az oldal újratöltését

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const gdprInput = document.getElementById('gdpr');
    const messageBox = document.getElementById('form-message');

    // Reset styles
    messageBox.style.color = 'inherit';
    messageBox.innerText = '';
    nameInput.style.borderColor = '#cbd5e1';
    gdprInput.parentElement.style.color = 'inherit';

    let hasError = false;

    // 1. Név ellenőrzése
    if (nameInput.value.trim() === '') {
        nameInput.style.borderColor = '#ef4444'; // Piros keret
        hasError = true;
    }

    // 2. GDPR ellenőrzése
    if (!gdprInput.checked) {
        gdprInput.parentElement.style.color = '#ef4444'; // Piros szöveg
        hasError = true;
    }

    // Hiba kezelése
    if (hasError) {
        messageBox.style.color = '#ef4444';
        messageBox.innerText = 'Kérjük, töltse ki a kötelező mezőket!';
        return;
    }

    // Sikeres küldés szimulációja
    // Itt hívnád meg a backendet igazából
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerText;
    
    submitBtn.innerText = 'Küldés folyamatban...';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Sikeres állapot
        messageBox.style.color = '#059669'; // Zöld szín
        messageBox.innerText = 'Köszönjük! Üzenetét sikeresen elküldtük. Hamarosan jelentkezünk.';
        document.getElementById('contactForm').reset();
        
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        
        // Kalkulátor eredmény elrejtése ha volt
        document.getElementById('result-box').classList.remove('result-visible');
    }, 1500);
});