function showMsg(message, isError) {
    if (isError === undefined) {
        isError = false;
    }
    
    var oldMsg = document.querySelector('.floating-msg');
    if (oldMsg) {
        oldMsg.remove();
    }
    
    var msg = document.createElement('div');
    msg.className = 'floating-msg';
    msg.innerHTML = message;
    
    var bgColor;
    if (isError) {
        bgColor = '#e74c3c';
    } else {
        bgColor = 'linear-gradient(135deg, #2b50aa, #2ecc71)';
    }
    
    msg.style.cssText = 'position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: ' + bgColor + '; color: white; padding: 10px 20px; border-radius: 50px; z-index: 9999; font-size: 14px; text-align: center;';
    
    document.body.appendChild(msg);
    
    setTimeout(function() {
        msg.remove();
    }, 2500);
}
