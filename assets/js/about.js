// زر عرض السياسات
let policyBtn = document.querySelector('.section-policy .btn-light');
if (policyBtn) {
    policyBtn.onclick = function() {
        showMsg('📋 سياسات النشر: فعاليات موثقة - معلومات دقيقة - صور مناسبة');
    };
}

// بطاقات الفريق
let teamCards = document.querySelectorAll('.team-card');
if (teamCards.length > 0) {
    for (let i = 0; i < teamCards.length; i++) {
        let card = teamCards[i];
        card.onclick = function() {
            let name = card.querySelector('h5').innerText;
            showMsg('👤 ' + (name || 'عضو الفريق'));
        };
    }
}