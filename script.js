// كود الجافاسكريبت للتأثيرات والحركات

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('DeguSwap جاهز للتشغيل! 🔥');

    // إنشاء جزيئات دخان إضافية
    createSmokeParticles();
    
    // إضافة تأثيرات تفاعلية للأزرار
    initButtonEffects();
    
    // تأثيرات الشبكات
    initNetworkButtons();
});

// إنشاء جزيئات دخان متحركة
function createSmokeParticles() {
    const smokeBg = document.querySelector('.smoke-bg');
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'smoke-particle';
        
        // أحجام وألوان عشوائية
        const size = Math.random() * 200 + 100;
        const redIntensity = Math.random() * 100 + 155;
        const opacity = Math.random() * 0.3 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = `radial-gradient(circle, rgba(${redIntensity},0,0,${opacity}) 0%, rgba(139,0,0,0) 70%)`;
        
        // مواقع عشوائية
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // توقيت عشوائي للحركة
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        
        smokeBg.appendChild(particle);
    }
}

// تأثيرات تفاعلية للأزرار
function initButtonEffects() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        // تأثير عند المرور بالفأرة
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // تأثير عند النقر
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.05)';
        });
    });
}

// تأثيرات أزرار الشبكات
function initNetworkButtons() {
    const networkButtons = document.querySelectorAll('.network-btn');
    
    networkButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة النشاط من جميع الأزرار
            networkButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة النشاط للزر المختار
            this.classList.add('active');
        });
    });
}

// تأثير زر المحفظة
const connectWallet = document.querySelector('.connect-wallet');
if (connectWallet) {
    connectWallet.addEventListener('click', function() {
        alert('🦊 سيتم فتح نافذة ربط المحفظة قريباً...');
    });
}

// تأثير زر التبادل
const swapButton = document.querySelector('.swap-button');
if (swapButton) {
    swapButton.addEventListener('click', function() {
        alert('🔥 جاري معالجة طلب التبادل...');
    });
}

// تأثير أزرار النسب
const percentButtons = document.querySelectorAll('.percent-btn');
percentButtons.forEach(button => {
    button.addEventListener('click', function() {
        const fromInput = document.querySelector('.amount-input');
        if (fromInput && this.textContent !== 'MAX') {
            const percent = parseInt(this.textContent) / 100;
            fromInput.value = percent * 1000; // قيمة افتراضية للتجربة
        } else if (this.textContent === 'MAX') {
            fromInput.value = 1000; // أقصى قيمة
        }
    });
});
