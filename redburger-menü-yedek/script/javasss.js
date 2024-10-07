document.getElementById('menuToggle').addEventListener('click', function() {
    const menuBar = document.getElementById('menuBar');
    // Menünün sınıfı ile açılıp kapanmasını kontrol ediyoruz.
    if (menuBar.classList.contains('dropdown')) {
        menuBar.classList.remove('dropdown');
    } else {
        menuBar.classList.add('dropdown');
    }
});
