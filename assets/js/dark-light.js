// إضافة زر Light/Dark Mode

// دالة تفعيل الوضع الداكن
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
}

// دالة تفعيل الوضع الفاتح
function enableLightMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
}

// دالة تبديل الوضع
function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

// إنشاء زر التبديل
function createThemeToggle() {
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.innerHTML = '🌙';
    btn.setAttribute('aria-label', 'تبديل الوضع');
    btn.onclick = toggleTheme;
    document.body.appendChild(btn);
    
    // تغيير شكل الزر حسب الوضع
    if (document.body.classList.contains('dark-mode')) {
        btn.innerHTML = '☀️';
    } else {
        btn.innerHTML = '🌙';
    }
}

// تحديث شكل الزر عند تغيير الوضع
function updateThemeIcon() {
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
        if (document.body.classList.contains('dark-mode')) {
            btn.innerHTML = '☀️';
        } else {
            btn.innerHTML = '🌙';
        }
    }
}

// تحميل الوضع المحفوظ
function loadSavedTheme() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
    createThemeToggle();
    updateThemeIcon();
}

// مراقبة تغييرات الوضع
var observer = new MutationObserver(function() {
    updateThemeIcon();
});
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

// تشغيل عند تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSavedTheme);
} else {
    loadSavedTheme();
}
