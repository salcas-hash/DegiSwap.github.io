// كود JavaScript الأساسي
console.log('DegiSwap loaded successfully!');

// تأثيرات تفاعلية بسيطة
document.addEventListener('DOMContentLoaded', function() {
    // تأثير عند التمرير
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(26, 31, 54, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        }
    });

    // تأثير الأزرار
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // رسالة ترحيب
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        alert('مرحباً! سنبدأ رحلة DegiSwap معاً 🚀');
    });
});
