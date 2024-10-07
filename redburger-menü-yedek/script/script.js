// Menü açma/kapama işlevi
document.getElementById('menuToggle').addEventListener('click', function () {
    const menuBar = document.getElementById('menuBar');
    
    // Menünün sınıfı ile açılıp kapanmasını kontrol ediyoruz.
    menuBar.classList.toggle('dropdown');
});

// Menüdeki tüm bağlantıları seçiyoruz ve tıklama olayını ekliyoruz.
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        const menuBar = document.getElementById('menuBar');
        if (menuBar.classList.contains('dropdown')) {
            menuBar.classList.remove('dropdown');
        }
    });
});


// Modal ve backdrop öğelerini oluşturma
const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

const backdrop = document.createElement('div');
backdrop.className = 'modal-backdrop';
document.body.appendChild(backdrop);

// Kartlardaki fotoğrafların üzerine tıklama olayını ekleme
document.querySelectorAll('.card-img').forEach(img => {
    img.addEventListener('click', function () {
        // Kart içeriğindeki ürün adı, açıklama ve fiyat bilgilerini alma
        const productName = img.closest('.card').querySelector('h3').textContent;
        const productDescription = img.closest('.card').querySelector('p').textContent;
        const productPrice = img.closest('.card').querySelector('.fiyat').textContent;

        // Modal içeriğini ayarlama
        const modalContent = `
            <div class="modal-content">
                <img src="${img.src}" alt="${productName}">
                <div class="info">
                    <h3>${productName}</h3>
                    <p>${productDescription}</p>
                    <p class="fiyat">${productPrice}</p>
                </div>
            </div>
        `;

        modal.innerHTML = modalContent;
        modal.classList.add('show');
        backdrop.classList.add('show');
    });
});

// Modal ve backdrop'a tıklayınca kapatma
backdrop.addEventListener('click', () => {
    modal.classList.remove('show');
    backdrop.classList.remove('show');
});

modal.addEventListener('click', () => {
    modal.classList.remove('show');
    backdrop.classList.remove('show');
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slider .slide');
const totalSlides = slides.length;
const slider = document.getElementById('imageSlider');

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Bir sonraki slide'a geç
    const offset = -currentIndex * 100; // Kaydırma oranı (% cinsinden)
    slider.style.transform = `translateX(${offset}%)`;
}

// 3 saniyede bir otomatik geçiş için zamanlayıcı
setInterval(showNextSlide, 3000);

// Sayfa yüklendiğinde ilk slide'ı göstermek için
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        slider.style.transform = 'translateX(0%)';
    }
});
