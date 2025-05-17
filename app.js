/**
 * Neuroimpulse - Main application JavaScript
 * Optimized for performance
 */

// Initialize on DOM content loaded to avoid render blocking
document.addEventListener('DOMContentLoaded', function() {
    // Design switcher functionality
    initDesignSwitcher();
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Make cards clickable
    initClickableCards();
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // iOS specific fixes
    initIOSFixes();
    
    // Initialize form handlers
    initForms();
});

/**
 * Design switcher initialization
 */
function initDesignSwitcher() {
    const designSwitcher = document.getElementById('designSwitcher');
    const designIcon = document.getElementById('designIcon');
    const designText = document.getElementById('designText');
    const smartDiv = document.querySelector('.smart-design');
    const simpleDiv = document.querySelector('.simple-design');
    
    // Force smart design initially if not set
    if (localStorage.getItem('isSmartDesign') === null) {
        localStorage.setItem('isSmartDesign', 'true');
    }
    
    let isSmart = localStorage.getItem('isSmartDesign') !== 'false';
    
    function setDesign(smart) {
        if (smart) {
            smartDiv.style.display = '';
            if (simpleDiv) simpleDiv.style.display = 'none';
            designIcon.textContent = '🎨    ';
            designText.textContent = 'Что то на простом';
            document.body.classList.remove('simple-design');
        } else {
            smartDiv.style.display = 'none';
            if (simpleDiv) simpleDiv.style.display = '';
            designIcon.textContent = '📝';
            designText.textContent = 'Что то на умном ';
            document.body.classList.add('simple-design');
        }
        localStorage.setItem('isSmartDesign', smart);
    }
    
    // Force smart design initially
    setDesign(true);
    
    if (designSwitcher) {
        designSwitcher.addEventListener('click', function() {
            isSmart = !isSmart;
            setDesign(isSmart);
        });
    }
}

/**
 * Mobile menu initialization
 */
function initMobileMenu() {
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const businessNav = document.querySelector('.business-nav');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            businessNav.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (businessNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

/**
 * Card click functionality
 */
function initClickableCards() {
    setupClickableCards('.article-card', '.read-more');
    setupClickableCards('.solution-card, .solution-simple', '.solution-link, .simple-button');
    setupClickableCards('.case-card', '.read-more');
}

/**
 * Helper function to set up clickable cards
 */
function setupClickableCards(selector, buttonSelector) {
    document.querySelectorAll(selector).forEach(card => {
        const button = card.querySelector(buttonSelector);
        const href = button ? button.getAttribute('href') : null;
        
        if (href) {
            card.addEventListener('click', function(e) {
                // Prevent click if clicking on the button itself
                if (e.target !== button && !button.contains(e.target)) {
                    window.open(href, '_blank');
                }
            });
        }
    });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * iOS specific fixes
 */
function initIOSFixes() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isIOS) {
        document.body.classList.add('ios-device');
        
        function setIOSHeight() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        
        setIOSHeight();
        window.addEventListener('resize', setIOSHeight);
        window.addEventListener('orientationchange', function() {
            setTimeout(setIOSHeight, 300);
        });
    }
}

/**
 * Form initialization
 */
function initForms() {
    const consultationForm = document.getElementById('consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = consultationForm.querySelector('input[name="name"]').value;
            const phone = consultationForm.querySelector('input[name="phone"]').value;
            const telegram = consultationForm.querySelector('input[name="telegram"]').value;
            
            // Telegram bot configuration
            const botToken = '7672901413:AAHd0SfBJC3HmwwYxhU_Dwtjzch-cl8GwgE';
            const chatId = '-1002568274832';
            
            // Format message for Telegram
            const message = `📝 Новая заявка на консультацию!\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n💬 Telegram: ${telegram}`;
            
            // Send to Telegram
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'HTML'
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
                    consultationForm.reset();
                } else {
                    alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.');
                    console.error('Telegram API error:', data);
                }
            })
            .catch(error => {
                alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.');
                console.error('Error sending to Telegram:', error);
            });
        });
    }
}

// Initialize Yandex Metrika with delay
window.addEventListener('load', function() {
    setTimeout(function() {
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
     
        ym(101761947, "init", {
             clickmap:true,
             trackLinks:true,
             accurateTrackBounce:true
        });
    }, 2000); // Delayed by 2 seconds to prioritize page content
}); 