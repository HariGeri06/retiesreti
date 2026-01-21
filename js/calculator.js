function calculate() {
    const hoursInput = document.getElementById('hours');
    const resultBox = document.getElementById('result-box');
    const resultText = document.getElementById('result');
    const hourlyRate = 25000; // Itt állíthatod az óradíjat

    let hours = parseFloat(hoursInput.value);

    // Ellenőrzés: ha nincs adat vagy negatív
    if (isNaN(hours) || hours <= 0) {
        // Hiba jelzése (opcionális, most csak elrejtjük az eredményt)
        resultBox.classList.remove('result-visible');
        resultBox.classList.add('result-hidden');
        return;
    }

    // Számítás
    let total = hours * hourlyRate;

    // Szám formázása (pl. 50 000 Ft)
    let formattedTotal = new Intl.NumberFormat('hu-HU', { 
        style: 'currency', 
        currency: 'HUF',
        maximumFractionDigits: 0 
    }).format(total);

    // Eredmény kiírása
    resultText.innerText = formattedTotal;
    
    // Doboz megjelenítése animációval
    resultBox.classList.remove('result-hidden');
    resultBox.classList.add('result-visible');
}