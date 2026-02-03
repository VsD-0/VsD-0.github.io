document.addEventListener('DOMContentLoaded', function() {
    // Анимация для кнопки покупки билетов
    const buyTicketBtn = document.querySelector('.btn');
    if (buyTicketBtn) {
        buyTicketBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('В реальном сайте здесь будет переход к покупке билетов. Для примера показываем это сообщение.');
        });
    }
    
    // Добавляем эффект при наведении на карточки фильмов
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Выделение активного пункта меню
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // Плавная прокрутка к секциям
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами, которые нужно анимировать
    const elementsToAnimate = document.querySelectorAll('.movie-card, .feature, .section-title');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Динамическое обновление года в футере
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2023', currentYear);
    }
    
    // Добавляем эффект при наведении на строки таблицы расписания
    const scheduleRows = document.querySelectorAll('.schedule-table tbody tr');
    scheduleRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#222';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});
