// دالة عرض رسالة Bootstrap
function showAlert(message, type) {
    var oldAlert = document.querySelector('.custom-alert');
    if (oldAlert) {
        oldAlert.remove();
    }
    
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-' + type + ' alert-dismissible fade show custom-alert';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.style.cssText = 'position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 9999; min-width: 300px; text-align: center;';
    
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('data-bs-dismiss', 'alert');
    closeButton.setAttribute('aria-label', 'Close');
    
    alertDiv.innerHTML = message;
    alertDiv.appendChild(closeButton);
    
    document.body.appendChild(alertDiv);
    
    setTimeout(function() {
        if (alertDiv) {
            alertDiv.classList.remove('show');
            setTimeout(function() {
                if (alertDiv) {
                    alertDiv.remove();
                }
            }, 500);
        }
    }, 3000);
}

// ===================== نموذج الاتصال =====================
var contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.onsubmit = function(e) {
        e.preventDefault();
        
        var nameInput = this.querySelector('input[type="text"]');
        var emailInput = this.querySelector('input[type="email"]');
        var messageInput = this.querySelector('textarea');
        
        var name = '';
        var email = '';
        var message = '';
        
        if (nameInput) name = nameInput.value;
        if (emailInput) email = emailInput.value;
        if (messageInput) message = messageInput.value;
        
        if (name === '') {
            showAlert('✏️ الرجاء إدخال الاسم', 'danger');
            return;
        }
        if (email === '') {
            showAlert('📧 الرجاء إدخال البريد الإلكتروني', 'danger');
            return;
        }
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            showAlert('❌ البريد الإلكتروني غير صحيح', 'danger');
            return;
        }
        if (message === '') {
            showAlert('💬 الرجاء كتابة رسالتك', 'danger');
            return;
        }
        
        showAlert('✅ تم إرسال رسالتك بنجاح! شكراً لك', 'success');
        
        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (messageInput) messageInput.value = '';
    };
}

// ===================== البحث في الاسئلة الشائعة =====================
var searchInput = document.querySelector('#faqSearch');
if (searchInput) {
    searchInput.oninput = function() {
        var searchWord = this.value.toLowerCase();
        var allFaqs = document.querySelectorAll('.faq-item');
        var count = 0;
        
        for (var i = 0; i < allFaqs.length; i++) {
            var item = allFaqs[i];
            var button = item.querySelector('.accordion-button');
            var body = item.querySelector('.accordion-collapse');
            var text = item.innerText.toLowerCase();
            
            if (searchWord === '' || text.indexOf(searchWord) !== -1) {
                item.style.display = '';
                count++;
            } else {
                item.style.display = 'none';
            }
        }
        
        // إعادة فتح أول عنصر إذا كان البحث فارغ (اختياري)
        if (searchWord === '') {
            for (var j = 0; j < allFaqs.length; j++) {
                var firstItem = allFaqs[j];
                var firstCollapse = firstItem.querySelector('.accordion-collapse');
                if (firstCollapse) {
                    firstCollapse.classList.remove('show');
                }
                var firstButton = firstItem.querySelector('.accordion-button');
                if (firstButton) {
                    firstButton.classList.add('collapsed');
                }
            }
        }
        
        if (searchWord !== '' && count === 0) {
            showAlert('🔍 لا توجد نتائج لـ "' + searchWord + '"', 'warning');
        }
    };
}

// ===================== أزرار CTA =====================
var supportBtn = document.querySelector('.cta .btn-primary');
if (supportBtn) {
    supportBtn.onclick = function() {
        var contactCard = document.querySelector('.col-md-6 .card');
        if (contactCard) {
            contactCard.scrollIntoView({ behavior: 'smooth' });
            showAlert('📝 املأ النموذج وسنرد عليك قريباً', 'info');
        }
    };
}

var callBtn = document.querySelector('.cta .btn-outline-primary');
if (callBtn) {
    callBtn.onclick = function() {
        showAlert('📞 يمكنك الاتصال بنا على الرقم: +963 686 889 342', 'info');
    };
}

// ===================== الروابط السريعة =====================
var quickLinks = document.querySelectorAll('.list-unstyled a');
for (var i = 0; i < quickLinks.length; i++) {
    var link = quickLinks[i];
    link.onclick = function(e) {
        var text = this.innerText;
        
        if (text.indexOf('الرئيسية') !== -1) {
            window.location.href = 'index.html';
        } else if (text.indexOf('فريقنا') !== -1) {
            window.location.href = 'about.html';
        } else if (text.indexOf('الشائعة') !== -1) {
            e.preventDefault();
            var faqSection = document.querySelector('.faq-section');
            if (faqSection) {
                faqSection.scrollIntoView({ behavior: 'smooth' });
                showAlert('📖 قسم الأسئلة الشائعة', 'info');
            }
        } else if (text.indexOf('الخدمة') !== -1) {
            e.preventDefault();
            showAlert('📜 شروط الخدمة: يمكنك الإلغاء قبل 48 ساعة لاسترداد كامل المبلغ', 'warning');
        }
    };
}