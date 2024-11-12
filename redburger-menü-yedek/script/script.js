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
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.slider-dots');

// Dot göstergelerini oluştur
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Slide'ı güncelle
function updateSlide() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
    
    // Dot'ları güncelle
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Belirli bir slide'a git
function goToSlide(index) {
    currentIndex = index;
    updateSlide();
}

// Sonraki slide'a git
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

// Önceki slide'a git
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

// Event listener'ları ekle
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Otomatik geçiş için zamanlayıcı
let slideInterval = setInterval(nextSlide, 5000);

// Mouse slider üzerine geldiğinde otomatik geçişi durdur
slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Mouse slider'dan ayrıldığında otomatik geçişi tekrar başlat
slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Sayfa yüklendiğinde dot'ları oluştur
document.addEventListener('DOMContentLoaded', () => {
    createDots();
    updateSlide();
});

//loader
document.addEventListener('DOMContentLoaded', function() {
    // Tüm resimlerin yüklenmesini bekleyelim
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    function imageLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            // Tüm resimler yüklendikten sonra loader'ı kaldır
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if (loader) {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.style.display = 'none';
                        document.body.classList.add('loaded');
                    }, 500);
                }
            }, 1000);
        }
    }

    // Her resim için yüklenme kontrolü
    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded); // Hata durumunda da devam et
        }
    });

    // Maksimum bekleme süresi (5 saniye)
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader && !document.body.classList.contains('loaded')) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.add('loaded');
            }, 500);
        }
    }, 5000);
});

//deneme kod
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Varsayılan tıklama davranışını engelle

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 70; // Üstteki sabit menü yüksekliği kadar ayarlayın
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});


//restoran adına basınca yukarı kaydırma
document.getElementById('restoranAdi').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Yumuşak kaydırma efekti için
    });
});

//yukkarı ok tuşum
const scrollToTopButton = document.getElementById('scrollToTop');

// Butona tıklayınca sayfanın en üstüne kaydır
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Yumuşak kaydırma efekti için
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// accordion hale getirmek


// Prevent menu from closing when category is clicked
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.stopPropagation();  // Stops menu toggle from closing when clicking a category
    });
});

//son deneme
document.querySelectorAll('.submenu a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Ensure link works by allowing default action (navigation)
        const targetHref = this.getAttribute('href');
        window.location.href = targetHref;
    });
});

