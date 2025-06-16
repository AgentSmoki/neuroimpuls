// DOM Elements
const progressBar = document.getElementById('progressBar');
const floatingCTA = document.getElementById('floatingCTA');
const header = document.querySelector('.header');
const faqItems = document.querySelectorAll('.faq-item');
const tabBtns = document.querySelectorAll('.tab-btn');
const socialProof = document.getElementById('socialProof');
const priceCountdown = document.getElementById('price-countdown');
const calculateBtn = document.getElementById('calculate-btn');
const calculatorResults = document.getElementById('calculator-results');
const hourlyRateSlider = document.getElementById('hourly-rate');
const hourlyRateValue = document.getElementById('hourly-rate-value');
const businessSphere = document.getElementById('business-sphere');
const finalCtaForm = document.getElementById('final-cta-form');

// Calculator data for different business spheres
const calculatorData = {
    marketing: [
        { id: 'content-creation', label: 'Создание контента для соцсетей', hours: 3 },
        { id: 'analytics', label: 'Анализ рекламных кампаний', hours: 2 },
        { id: 'reporting', label: 'Составление отчётов', hours: 2.5 },
        { id: 'market-research', label: 'Исследование рынка и конкурентов', hours: 4 },
        { id: 'email-campaigns', label: 'Email-маркетинг', hours: 1.5 }
    ],
    development: [
        { id: 'code-review', label: 'Ревью кода и документация', hours: 2 },
        { id: 'testing', label: 'Тестирование приложений', hours: 3 },
        { id: 'debugging', label: 'Поиск и исправление ошибок', hours: 4 },
        { id: 'api-integration', label: 'Интеграция API', hours: 2.5 },
        { id: 'optimization', label: 'Оптимизация производительности', hours: 3 }
    ],
    design: [
        { id: 'mockups', label: 'Создание макетов и wireframes', hours: 3 },
        { id: 'graphics', label: 'Графические элементы', hours: 2.5 },
        { id: 'presentations', label: 'Презентации для клиентов', hours: 2 },
        { id: 'brand-assets', label: 'Брендинг и айдентика', hours: 4 },
        { id: 'ui-elements', label: 'UI элементы и иконки', hours: 2 }
    ],
    video: [
        { id: 'scriptwriting', label: 'Написание сценариев', hours: 3 },
        { id: 'editing', label: 'Монтаж и обработка', hours: 4 },
        { id: 'animations', label: 'Анимация и спецэффекты', hours: 3.5 },
        { id: 'voiceover', label: 'Озвучка и саунд-дизайн', hours: 2 },
        { id: 'thumbnails', label: 'Превью и обложки', hours: 1.5 }
    ],
    '3d': [
        { id: 'modeling', label: '3D моделирование объектов', hours: 5 },
        { id: 'texturing', label: 'Текстурирование и материалы', hours: 3 },
        { id: 'rendering', label: 'Рендеринг сцен', hours: 2 },
        { id: 'animation', label: '3D анимация', hours: 4 },
        { id: 'optimization', label: 'Оптимизация моделей', hours: 2.5 }
    ],
    chatbots: [
        { id: 'scenarios', label: 'Разработка сценариев диалогов', hours: 3 },
        { id: 'integration', label: 'Интеграция с платформами', hours: 2.5 },
        { id: 'testing', label: 'Тестирование и отладка', hours: 2 },
        { id: 'analytics', label: 'Анализ эффективности', hours: 1.5 },
        { id: 'training', label: 'Обучение и настройка ИИ', hours: 3 }
    ],
    construction: [
        { id: 'estimates', label: 'Составление смет', hours: 3 },
        { id: 'planning', label: 'Планирование проектов', hours: 2.5 },
        { id: 'documentation', label: 'Техническая документация', hours: 2 },
        { id: 'client-communication', label: 'Общение с клиентами', hours: 2 },
        { id: 'quality-control', label: 'Контроль качества', hours: 1.5 }
    ],
    flowers: [
        { id: 'design', label: 'Дизайн букетов и композиций', hours: 2 },
        { id: 'inventory', label: 'Управление складом', hours: 1.5 },
        { id: 'orders', label: 'Обработка заказов', hours: 2 },
        { id: 'social-media', label: 'Ведение соцсетей', hours: 2.5 },
        { id: 'photography', label: 'Фотосъёмка работ', hours: 1.5 }
    ],
    realestate: [
        { id: 'property-analysis', label: 'Анализ объектов недвижимости', hours: 2.5 },
        { id: 'client-matching', label: 'Подбор объектов для клиентов', hours: 3 },
        { id: 'documentation', label: 'Оформление документов', hours: 2 },
        { id: 'market-research', label: 'Исследование рынка', hours: 2 },
        { id: 'presentations', label: 'Презентации объектов', hours: 1.5 }
    ],
    legal: [
        { id: 'document-drafting', label: 'Составление документов', hours: 3 },
        { id: 'research', label: 'Правовые исследования', hours: 2.5 },
        { id: 'case-analysis', label: 'Анализ дел и прецедентов', hours: 3 },
        { id: 'client-consultation', label: 'Консультации клиентов', hours: 2 },
        { id: 'contract-review', label: 'Проверка договоров', hours: 2 }
    ],
    ecommerce: [
        { id: 'product-descriptions', label: 'Описания товаров', hours: 2.5 },
        { id: 'inventory-management', label: 'Управление товарами', hours: 2 },
        { id: 'customer-service', label: 'Обслуживание клиентов', hours: 3 },
        { id: 'analytics', label: 'Анализ продаж', hours: 2 },
        { id: 'content-creation', label: 'Контент для площадок', hours: 2.5 }
    ]
};

// Progress Bar
function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = `${progress}%`;
}

// Floating CTA Button
function toggleFloatingCTA() {
    const scrolled = window.scrollY;
    if (scrolled > 800) {
        floatingCTA.classList.add('visible');
    } else {
        floatingCTA.classList.remove('visible');
    }
}

// Header Scroll Effect
function handleHeaderScroll() {
    const scrolled = window.scrollY;
    if (scrolled > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// FAQ Accordion
function initFAQ() {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Tabs Navigation
function initTabs() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Add active class to clicked button and corresponding pane
            btn.classList.add('active');
            const targetPane = document.querySelector(`[data-content="${tabId}"]`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}

// Calculator Functionality
function initCalculator() {
    if (!businessSphere || !hourlyRateSlider) {
        console.warn('Calculator elements not found');
        return;
    }

    // Update hourly rate display
    hourlyRateSlider.addEventListener('input', (e) => {
        hourlyRateValue.textContent = e.target.value;
    });
    
    // Load tasks when sphere is selected
    businessSphere.addEventListener('change', (e) => {
        loadTasksForSphere(e.target.value);
    });
    
    // Calculate button click
    calculateBtn.addEventListener('click', () => {
        calculateSavings();
    });
}

function loadTasksForSphere(sphere) {
    const tasksGroup = document.getElementById('tasks-group');
    if (!tasksGroup || !sphere) {
        tasksGroup.innerHTML = '';
        return;
    }
    
    const tasks = calculatorData[sphere] || [];
    
    tasksGroup.innerHTML = tasks.map(task => `
        <div class="checkbox">
            <input type="checkbox" id="${task.id}" data-hours="${task.hours}">
            <div class="checkbox__box"></div>
            <label for="${task.id}" class="checkbox__label">
                ${task.label} <span style="color: var(--text-tertiary);">(~${task.hours}ч/день)</span>
            </label>
        </div>
    `).join('');
}

function calculateSavings() {
    const hourlyRate = parseInt(hourlyRateSlider.value);
    const selectedTasks = document.querySelectorAll('.checkbox input:checked');
    
    if (selectedTasks.length === 0 || !businessSphere.value) {
        showErrorMessage('Пожалуйста, выберите сферу деятельности и хотя бы одну задачу');
        return;
    }
    
    // Hide time usage ideas block if it was shown from previous calculation
    const timeUsageIdeas = document.getElementById('time-usage-ideas');
    if (timeUsageIdeas) {
        timeUsageIdeas.classList.remove('visible');
        timeUsageIdeas.style.display = 'none';
    }
    
    // Calculate total hours saved per day
    let totalHoursSaved = 0;
    selectedTasks.forEach(task => {
        const hours = parseFloat(task.dataset.hours);
        totalHoursSaved += hours * 0.7; // AI saves 70% of time
    });
    
    // Calculate 3-month savings (instead of monthly)
    const workDaysPerMonth = 22;
    const monthsCount = 3;
    const totalWorkDays = workDaysPerMonth * monthsCount;
    const totalHoursSaved3Months = totalHoursSaved * totalWorkDays;
    const totalMoneySaved = totalHoursSaved3Months * hourlyRate;
    const daysSaved = Math.floor(totalHoursSaved3Months / 8);
    const additionalIncome = totalMoneySaved * 0.5; // Potential additional income from freed time
    
    // ROI calculation (course price is 18,900₽)
    const coursePrice = 18900;
    const roiPercentage = Math.floor((totalMoneySaved / coursePrice) * 100);
    const paybackDays = Math.ceil(coursePrice / (totalMoneySaved / (monthsCount * 30)));
    
    // Update results
    updateElementText('time-saved-3months', Math.floor(totalHoursSaved3Months));
    updateElementText('days-saved', daysSaved);
    updateElementText('money-saved', formatNumber(Math.floor(totalMoneySaved)));
    updateElementText('additional-income', formatNumber(Math.floor(additionalIncome)));
    updateElementText('roi-percentage', roiPercentage);
    updateElementText('payback-days', paybackDays);
    
    // Update hours in time usage ideas block
    updateElementText('hours-per-month', Math.floor(totalHoursSaved * workDaysPerMonth));
    
    // Show results with animation
    calculatorResults.classList.add('visible');
    calculatorResults.style.display = 'block';
    
    // Show time usage ideas block with delay
    setTimeout(() => {
        if (timeUsageIdeas) {
            timeUsageIdeas.style.display = 'block';
            // Force reflow to ensure the display change is applied before animation
            timeUsageIdeas.offsetHeight;
            
            setTimeout(() => {
                timeUsageIdeas.classList.add('visible');
            }, 50);
        }
    }, 500);
    
    // Animate value cards one by one
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, 700 + (index * 100));
    });
    
    // Scroll to results
    setTimeout(() => {
        calculatorResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}

// Helper function to safely update element text
function updateElementText(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = value;
    } else {
        console.warn(`Element with id '${elementId}' not found`);
    }
}

// Helper function to show error messages
function showErrorMessage(message) {
    // Create or update notification
    let notification = document.querySelector('.error-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'error-notification';
        document.body.appendChild(notification);
    }
    
    notification.innerHTML = `
        <div class="notification-content">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>${message}</span>
        </div>
    `;
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Format numbers with spaces
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Countdown Timer
function initCountdown() {
    // Set target date (2 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(14, 23, 45);
    
    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            const countdownText = `${days} ${getDayWord(days)} ${hours}:${padZero(minutes)}:${padZero(seconds)}`;
            priceCountdown.textContent = countdownText;
        } else {
            priceCountdown.textContent = 'Время истекло!';
        }
    }
    
    function getDayWord(days) {
        if (days === 1) return 'день';
        if (days >= 2 && days <= 4) return 'дня';
        return 'дней';
    }
    
    function padZero(num) {
        return num < 10 ? '0' + num : num;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Social Proof Notifications
function initSocialProof() {
    const names = [
        { name: 'Анна из Москвы', action: 'только что присоединилась к НейроКлубу', avatar: 'image/user7.jpg' },
        { name: 'Сергей из Санкт-Петербурга', action: 'начал изучать маркетинг с ИИ', avatar: 'image/user5.jpg' },
        { name: 'Елена из Казани', action: 'увеличила доход на 150% за месяц', avatar: 'image/user6.jpg' },
        { name: 'Михаил из Екатеринбурга', action: 'автоматизировал продажи с ChatGPT', avatar: 'image/user4.jpg' },
        { name: 'Мария из Новосибирска', action: 'подняла стоимость услуг с 30 до 120 тыс. рублей', avatar: 'image/user8.jpg' }
        
    ];
    
    let currentIndex = 0;
    
    function showNotification() {
        const notification = names[currentIndex];
        const textElement = socialProof.querySelector('.social-proof__text');
        const avatarElement = socialProof.querySelector('.social-proof__avatar');
        
        textElement.innerHTML = `
            <strong>${notification.name}</strong>
            <span>${notification.action}</span>
        `;
        
        if (avatarElement) {
            avatarElement.src = notification.avatar;
            avatarElement.alt = notification.name.split(' ')[0];
        }
        
        socialProof.classList.add('show');
        
        setTimeout(() => {
            socialProof.classList.remove('show');
        }, 5000);
        
        currentIndex = (currentIndex + 1) % names.length;
    }
    
    // Start showing notifications after 10 seconds
    setTimeout(() => {
        showNotification();
        setInterval(showNotification, 20000); // Show every 20 seconds
    }, 10000);
    
    // Close button
    const closeBtn = socialProof.querySelector('.social-proof__close');
    closeBtn.addEventListener('click', () => {
        socialProof.classList.remove('show');
    });
}

// Form Validation - moved to scripts.js

// Testimonials Slider
function initTestimonialsSlider() {
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dots = document.querySelectorAll('.dot');
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonials.forEach((testimonial, i) => {
            if (window.innerWidth <= 768) {
                testimonial.style.display = i === index ? 'block' : 'none';
            } else {
                testimonial.style.display = 'block';
            }
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
        showSlide(currentSlide);
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Initialize
    showSlide(currentSlide);
    
    // Auto-play
    setInterval(() => {
        if (window.innerWidth <= 768) {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showSlide(currentSlide);
        }
    }, 5000);
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');
    
    if (mobileMenuToggle) {
        // Toggle menu on burger click
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('mobile-active');
                mobileMenuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking on overlay
        nav.addEventListener('click', (e) => {
            if (e.target === nav) {
                nav.classList.remove('mobile-active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

// CTA Button Actions
function initCTAActions() {
    const ctaButtons = document.querySelectorAll('.btn--primary');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Skip if it's a form submit button
            if (btn.type === 'submit') return;
            
            e.preventDefault();
            // Scroll to final CTA form
            const finalCTA = document.getElementById('final-cta');
            if (finalCTA) {
                finalCTA.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Focus on first input after scroll
                setTimeout(() => {
                    const firstInput = finalCTA.querySelector('input');
                    if (firstInput) firstInput.focus();
                }, 1000);
            }
        });
    });
    
    // Floating CTA specific action
    floatingCTA.addEventListener('click', () => {
        const finalCTA = document.getElementById('final-cta');
        if (finalCTA) {
            finalCTA.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initFAQ();
    initTabs();
    initCalculator();
    initCountdown();
    initSocialProof();
    initTestimonialsSlider();
    initScrollAnimations();
    initMobileMenu();
    initCTAActions();
});

// Window scroll events
window.addEventListener('scroll', () => {
    updateProgressBar();
    toggleFloatingCTA();
    handleHeaderScroll();
});

// Window resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reinitialize testimonials slider on resize
        initTestimonialsSlider();
    }, 250);
}); 