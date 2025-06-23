// Функции для работы с вкладками
document.getElementById('openTabsBtn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('tabs-container').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

document.getElementById('closeTabs').addEventListener('click', function() {
    closeTabs();
});

function closeTabs() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('tabs-container').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Обработчики для переключения вкладок
const tabLinks = document.querySelectorAll('.tab-link');
tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Удаляем активный класс у всех ссылок
        tabLinks.forEach(l => l.classList.remove('active'));
        
        // Добавляем активный класс текущей ссылке
        this.classList.add('active');
        
        // Скрываем все вкладки
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Показываем выбранную вкладку
        const tabId = this.dataset.tab;
        document.getElementById(tabId).classList.add('active');
    });
});

// Открытие вкладки при клике на карточку
document.querySelectorAll('.specialty-card').forEach(card => {
    card.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        
        // Открываем контейнер вкладок
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('tabs-container').style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Скрываем все вкладки
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Показываем выбранную вкладку
        document.getElementById(tabId).classList.add('active');
        
        // Активируем соответствующую ссылку
        tabLinks.forEach(link => {
            link.classList.remove('active');
            if(link.dataset.tab === tabId) {
                link.classList.add('active');
            }
        });
    });
});

// Закрытие при клике на оверлей
document.getElementById('overlay').addEventListener('click', function() {
    closeTabs();
});