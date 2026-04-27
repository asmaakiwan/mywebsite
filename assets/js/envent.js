// ===================== عرض بيانات الفعالية =====================
function loadEventData() {
    // جلب البيانات من الرابط أو التخزين المؤقت
    let params = new URLSearchParams(window.location.search);
    let eventId = params.get('id');
    
    // تحديث الصفحة بالبيانات
    let titleElem = document.querySelector('#title');
    let dateElem = document.querySelector('#date');
    let locationElem = document.querySelector('#location');
    let descElem = document.querySelector('#desc');
    
    if (titleElem) titleElem.textContent = eventData.title;
    if (dateElem) dateElem.textContent = eventData.date;
    if (locationElem) locationElem.textContent = eventData.location;
    if (descElem) descElem.textContent = eventData.desc;
}

// ===================== إضافة للتقويم =====================
let calendarBtn = document.querySelector('.btn-custom');
if (calendarBtn) {
    calendarBtn.onclick = () => {
        showMsg('📅 تمت إضافة الفعالية إلى التقويم');
    };
}

// ===================== مشاركة =====================
let shareBtns = document.querySelectorAll('.btn-custom');
if (shareBtns[1]) {
    shareBtns[1].onclick = () => {
        navigator.clipboard.writeText(window.location.href);
        showMsg('🔗 تم نسخ الرابط');
    };
}

// ===================== معرض الصور =====================
let eventImages = document.querySelectorAll('.event-img');
eventImages.forEach(img => {
    img.onclick = function() {
        let modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9); z-index: 10000;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
        `;
        let bigImg = document.createElement('img');
        bigImg.src = this.src;
        bigImg.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 10px;';
        modal.appendChild(bigImg);
        modal.onclick = () => modal.remove();
        document.body.appendChild(modal);
    };
});

// ===================== فعاليات ذات صلة =====================
let relatedCards = document.querySelectorAll('.related-card');
relatedCards.forEach(card => {
    card.onclick = () => {
        showMsg('📌 جاري تحميل الفعالية...');
    };
});

// ===================== تشغيل تحميل البيانات =====================
loadEventData();