document.getElementById('menuToggle').addEventListener('click', function() {
    const menuBar = document.getElementById('menuBar');
    // Menünün sınıfı ile açılıp kapanmasını kontrol ediyoruz.
    if (menuBar.classList.contains('dropdown')) {
        menuBar.classList.remove('dropdown');
    } else {
        menuBar.classList.add('dropdown');
    }
});


//accordion kısmına eklemek için
document.querySelectorAll('.accordion-item > a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        const submenu = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');

        // Toggle submenu görünümy
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
            arrow.classList.remove('rotate');
        } else {
            // Close other open submenus before opening the clicked one
            document.querySelectorAll('.submenu').forEach(sub => {
                sub.style.display = 'none';
            });

            // Reset all arrow icons
            document.querySelectorAll('.arrow').forEach(arrow => {
                arrow.classList.remove('rotate');
            });

            submenu.style.display = 'block';
            arrow.classList.add('rotate');
        }
    });
});