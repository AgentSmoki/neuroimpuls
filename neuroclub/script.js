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
        { id: 'deployment', label: 'Деплой и настройка серверов', hours: 1.5 }
    ],
    sales: [
        { id: 'lead-generation', label: 'Поиск потенциальных клиентов', hours: 3 },
        { id: 'cold-outreach', label: 'Холодные звонки и письма', hours: 4 },
        { id: 'proposal-writing', label: 'Написание коммерческих предложений', hours: 2 },
        { id: 'crm-management', label: 'Ведение CRM системы', hours: 1.5 },
        { id: 'follow-up', label: 'Следящие звонки и письма', hours: 2.5 }
    ],
    design: [
        { id: 'concept-development', label: 'Разработка концепций дизайна', hours: 3 },
        { id: 'mockup-creation', label: 'Создание макетов', hours: 4 },
        { id: 'asset-optimization', label: 'Оптимизация графических материалов', hours: 2 },
        { id: 'brand-guidelines', label: 'Создание брендбука', hours: 6 },
        { id: 'ui-prototyping', label: 'Прототипирование интерфейсов', hours: 3.5 }
    ],
    content: [
        { id: 'blog-writing', label: 'Написание статей для блога', hours: 2.5 },
        { id: 'social-media', label: 'Контент для социальных сетей', hours: 2 },
        { id: 'video-scripts', label: 'Сценарии для видео', hours: 1.5 },
        { id: 'copywriting', label: 'Рекламные тексты', hours: 3 },
        { id: 'seo-content', label: 'SEO-оптимизированный контент', hours: 3.5 }
    ]
};

// Social Proof Notifications Data
const notifications = [
    // Маркетинг и аналитика
    { 
        name: 'Анна Козлова', 
        city: 'Москва',
        action: '💡 Контент-план на месяц создан за 15 минут', 
        avatar: 'https://www.vokrug.tv/pic/person/c/0/a/5/c0a5cdb7c53cc2cd019e6b823f0ae6df.jpg',
        delay: 3000 
    },
    { 
        name: 'Дмитрий Петров', 
        city: 'СПб',
        action: '🎯 50 сайтов конкурентов проанализированы за час', 
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 5000 
    },
    { 
        name: 'Елена Смирнова', 
        city: 'Казань',
        action: '📊 Портрет ЦА готов за 10 минут вместо 3 часов', 
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 4000 
    },
    { 
        name: 'Михаил Волков', 
        city: 'Екатеринбург',
        action: '✍️ 30 постов для соцсетей написаны за полчаса', 
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 6000 
    },
    
    // Дизайн и креативы
    { 
        name: 'София Иванова', 
        city: 'Новосибирск',
        action: '🎨 10 вариантов логотипа сгенерированы за минуту', 
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 4500 
    },
    { 
        name: 'Александр Орлов', 
        city: 'Самара',
        action: '🖼 Рекламные баннеры готовы без дизайнера', 
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 5500 
    },
    
    // Продажи и коммуникации
    { 
        name: 'Марина Федорова', 
        city: 'Красноярск',
        action: '💬 Скрипт продаж написан за 5 минут', 
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 4000 
    },
    { 
        name: 'Владимир Попов', 
        city: 'Воронеж',
        action: '📧 Составил текст Email-рассылки на 1000 человек за 10 минут', 
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 5000 
    },
    { 
        name: 'Ольга Белова', 
        city: 'Уфа',
        action: '🤝 КП персонализировано под клиента за минуту', 
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 6000 
    },
    
    // Программирование
    { 
        name: 'Игорь Морозов', 
        city: 'Челябинск',
        action: '💻 Баг исправлен за 2 минуты с помощью AI', 
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 3500 
    },
    { 
        name: 'Андрей Соколов', 
        city: 'Омск',
        action: '⚡️ Код оптимизирован и заработал в 3 раза быстрее', 
        avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 4500 
    },
    
    // Видео и контент
    { 
        name: 'Татьяна Лебедева', 
        city: 'Ростов-на-Дону',
        action: '🎬 Сценарий ролика готов за 2 минуты', 
        avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 5500 
    },
    { 
        name: 'Роман Зайцев', 
        city: 'Пермь',
        action: '📹 Монтажный лист создан автоматически', 
        avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 4000 
    },
    
    // E-commerce
    { 
        name: 'Виктор Иванов', 
        city: 'Волгоград',
        action: '🛍 50 товаров описаны для маркетплейса за час', 
        avatar: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 5000 
    },
    { 
        name: 'Максим Николаев', 
        city: 'Саратов',
        action: '⭐️ Ответы на отзывы генерируются за секунды', 
        avatar: 'https://cdn5.vedomosti.ru/image/2022/a5/xy3e4/original-17zu.jpg',
        delay: 4500 
    },
    
    // Недвижимость
    { 
        name: 'Юлия Романова', 
        city: 'Краснодар',
        action: '🏠 Объявление о продаже написано за 3 минуты', 
        avatar: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 6000 
    },
    { 
        name: 'Сергей Воробьев', 
        city: 'Тюмень',
        action: '📍 Анализ района выполнен за 5 минут', 
        avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 3500 
    },
    
    // Юридические услуги
    { 
        name: 'Наталья Гусева', 
        city: 'Барнаул',
        action: '⚖️ Договор составлен AI за 2 минуты', 
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 5500 
    },
    { 
        name: 'Артем Киселев', 
        city: 'Иркутск',
        action: '📄 Шаблон иска подготовлен автоматически', 
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 4000 
    },
    
    // Строительство
    { 
        name: 'Денис Макаров', 
        city: 'Хабаровск',
        action: '🏗 Смета рассчитана без ошибок за 10 минут', 
        avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 4500 
    },
    { 
        name: 'Алина Жукова', 
        city: 'Владивосток',
        action: '📐 Проект визуализирован за час', 
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 5000 
    },
    
    // Общие достижения
    { 
        name: 'Павел Титов', 
        city: 'Калининград',
        action: '📈 Конверсия на сайте выросла на 35% с новыми промптами', 
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face&auto=format',
        delay: 5000 
    }
];

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
    // Check if all required elements exist
    const requiredElements = {
        'businessSphere': businessSphere,
        'hourlyRateSlider': hourlyRateSlider,
        'hourlyRateValue': hourlyRateValue,
        'calculateBtn': calculateBtn,
        'calculatorResults': calculatorResults
    };
    
    const missingElements = [];
    for (const [name, element] of Object.entries(requiredElements)) {
        if (!element) {
            missingElements.push(name);
        }
    }
    
    if (missingElements.length > 0) {
        console.warn('Missing calculator elements:', missingElements);
        showErrorMessage(`Ошибка инициализации калькулятора. Обратитесь к администратору.`);
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
    
    console.log('✅ Calculator initialized successfully');
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
    
    console.log('🔢 Calculating savings:', { 
        hourlyRate, 
        selectedTasksCount: selectedTasks.length, 
        businessSphere: businessSphere.value 
    });
    
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
        console.log(`Task: ${task.id}, Hours: ${hours}, Saved: ${hours * 0.7}`);
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
    
    console.log('📊 Calculation results:', {
        totalHoursSaved3Months: Math.floor(totalHoursSaved3Months),
        totalMoneySaved: Math.floor(totalMoneySaved),
        daysSaved,
        additionalIncome: Math.floor(additionalIncome),
        roiPercentage,
        paybackDays
    });
    
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
    
    console.log('✅ Results displayed successfully');
    
    // Show time usage ideas block with delay
    setTimeout(() => {
        if (timeUsageIdeas) {
            timeUsageIdeas.style.display = 'block';
            // Force reflow to ensure the display change is applied before animation
            timeUsageIdeas.offsetHeight;
            
            setTimeout(() => {
                timeUsageIdeas.classList.add('visible');
                console.log('✅ Time usage ideas shown');
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
        console.log(`✅ Updated ${elementId}: ${value}`);
    } else {
        console.warn(`❌ Element with id '${elementId}' not found`);
    }
}

// Test function for calculator (for debugging)
function testCalculator() {
    console.log('🧪 Testing calculator elements...');
    
    const testElements = [
        'business-sphere',
        'tasks-group', 
        'hourly-rate',
        'hourly-rate-value',
        'calculate-btn',
        'calculator-results',
        'time-saved-3months',
        'days-saved',
        'money-saved',
        'additional-income',
        'roi-percentage',
        'payback-days',
        'hours-per-month'
    ];
    
    const missing = [];
    testElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            console.log(`✅ Found: ${id}`);
        } else {
            console.warn(`❌ Missing: ${id}`);
            missing.push(id);
        }
    });
    
    if (missing.length === 0) {
        console.log('🎉 All calculator elements found!');
        return true;
    } else {
        console.error(`❌ Missing elements: ${missing.join(', ')}`);
        return false;
    }
}

// Test function for social proof notifications
function testSocialProof() {
    console.log('🔔 Testing social proof system...');
    
    if (!socialProof) {
        console.error('❌ Social proof element not found');
        return;
    }
    
    console.log('✅ Social proof element found');
    console.log(`📊 Total notifications: ${notifications.length}`);
    
    // Force show a notification immediately
    const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
    console.log('🚀 Forcing notification display:', randomNotification.name);
    
    const textElement = socialProof.querySelector('.social-proof__text');
    const avatarElement = socialProof.querySelector('.social-proof__avatar');
    
    if (textElement && avatarElement) {
        textElement.innerHTML = `
            <strong>${randomNotification.name} из г. ${randomNotification.city}</strong>
            <span>${randomNotification.action}</span>
        `;
        
        avatarElement.src = randomNotification.avatar;
        avatarElement.alt = randomNotification.name;
        
        socialProof.classList.add('show');
        
        setTimeout(() => {
            socialProof.classList.remove('show');
        }, 6000);
        
        console.log('✅ Test notification displayed successfully!');
    } else {
        console.error('❌ Social proof text or avatar element not found');
    }
}

// Global test function to call from console
window.testNotifications = testSocialProof;
window.testCalc = testCalculator;

// Helper function to show error messages
function showErrorMessage(message) {
    console.error('❌ Error:', message);
    
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            <span>${message}</span>
        </div>
    `;
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
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
    let currentIndex = 0;
    
    function showNotification() {
        if (!socialProof) return;
        
        const notification = notifications[currentIndex];
        const textElement = socialProof.querySelector('.social-proof__text');
        const avatarElement = socialProof.querySelector('.social-proof__avatar');
        
        textElement.innerHTML = `
            <strong>${notification.name} из г. ${notification.city}</strong>
            <span>${notification.action}</span>
        `;
        
        if (avatarElement) {
            avatarElement.src = notification.avatar;
            avatarElement.alt = notification.name;
            avatarElement.style.borderRadius = '50%';
            avatarElement.style.objectFit = 'cover';
        }
        
        socialProof.classList.add('show');
        
        setTimeout(() => {
            socialProof.classList.remove('show');
        }, notification.delay || 5000);
        
        currentIndex = (currentIndex + 1) % notifications.length;
    }
    
    // Start showing notifications after 8 seconds
    setTimeout(() => {
        showNotification();
        // Show next notification every 15 seconds (fixed interval)
        setInterval(() => {
            showNotification();
        }, 15000);
    }, 8000);
    
    // Close button
    const closeBtn = socialProof?.querySelector('.social-proof__close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            socialProof.classList.remove('show');
        });
    }
}

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
    // Test calculator elements first
    console.log('🚀 Initializing NeuroClub website...');
    
    const calculatorTestPassed = testCalculator();
    if (!calculatorTestPassed) {
        showErrorMessage('Некоторые элементы калькулятора недоступны. Обновите страницу.');
    }
    
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
    
    console.log('✅ Website initialization complete');
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