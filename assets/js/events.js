let searchForm = document.querySelector('#searchForm');
if (searchForm) {
    searchForm.onsubmit = function(e) {
        e.preventDefault();
        let title = document.querySelector('#searchTitle').value.toLowerCase();
        let loc = document.querySelector('#searchLocation').value.toLowerCase();
        let date = document.querySelector('#searchDate').value;
        let items = document.querySelectorAll('.event-item');
        let count = 0;
        
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let t = item.getAttribute('data-title');
            let l = item.getAttribute('data-location');
            let d = item.getAttribute('data-date');
            if (t) t = t.toLowerCase();
            if (l) l = l.toLowerCase();
            
            let show = true;
            if (title !== '') show = show && (t && t.indexOf(title) !== -1);
            if (loc !== '') show = show && (l && l.indexOf(loc) !== -1);
            if (date !== '') show = show && (d === date);
            
            item.style.display = show ? '' : 'none';
            if (show) count++;
        }
        showMsg('🔍 تم العثور على ' + count + ' فعالية');
    };
}

let alertBox = document.querySelector('.alert-primary');
if (alertBox) {
    alertBox.onclick = function() {
        alertBox.style.display = 'none';
    };
}

let allCards = document.querySelectorAll('.event-card, .team-card');
for (let i = 0; i < allCards.length; i++) {
    allCards[i].onclick = function() {
        showMsg('✨ تفاصيل إضافية قريباً');
    };
}