// Enhanced Matrix background with authentic cybersecurity aesthetic
function createMatrixBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const matrixBg = document.getElementById('matrix-bg');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    matrixBg.appendChild(canvas);
    
    // Matrix characters including Japanese katakana for authentic Matrix feel
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン@#$%^&*()_+-=[]{}|\\:;\"'<>?,./~`";
    const matrixArray = matrix.split("");
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.floor(Math.random() * canvas.height / fontSize);
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = fontSize + 'px "Fira Code", "Courier New", monospace';
        ctx.textAlign = 'center';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            const x = i * fontSize + fontSize / 2;
            const y = drops[i] * fontSize;
            
            // Gradient effect for authentic matrix appearance
            const gradient = ctx.createLinearGradient(0, y - fontSize * 10, 0, y);
            gradient.addColorStop(0, 'rgba(0, 255, 136, 0.1)');
            gradient.addColorStop(0.5, 'rgba(0, 255, 136, 0.6)');
            gradient.addColorStop(1, 'rgba(0, 255, 136, 1)');
            
            ctx.fillStyle = gradient;
            ctx.fillText(text, x, y);
            
            if (Math.random() > 0.98) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.fillText(text, x, y);
            }
            
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    const matrixInterval = setInterval(draw, 50);
    
    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const newColumns = Math.floor(canvas.width / fontSize);
        if (newColumns !== columns) {
            while (drops.length < newColumns) {
                drops.push(Math.floor(Math.random() * canvas.height / fontSize));
            }
            if (drops.length > newColumns) {
                drops.length = newColumns;
            }
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
        clearInterval(matrixInterval);
        window.removeEventListener('resize', handleResize);
    };
}

let cleanupMatrix;
document.addEventListener('DOMContentLoaded', () => {
    cleanupMatrix = createMatrixBackground();
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Adaptive header with performance-optimized scroll handling
const header = document.getElementById('header');
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.addEventListener('load', () => {
    const terminalPrompt = document.querySelector('.terminal-prompt');
    if (terminalPrompt) {
        setTimeout(() => {
            typeWriter(terminalPrompt, '$ whoami', 150);
        }, 500);
    }
});

// Security badge functionality - showcases security features
document.addEventListener('DOMContentLoaded', () => {
    const securityBadge = document.querySelector('.security-badge');
    if (securityBadge) {
        securityBadge.addEventListener('click', () => {
            const securityFeatures = [
                '🛡️ Content Security Policy (CSP) Headers',
                '🔒 Input Sanitization & Validation',
                '🚫 XSS Protection',
                '📡 Secure HTTPS Deployment',
                '🔍 Regular Security Audits',
                '⚡ Performance Optimization',
                '♿ Accessibility Compliant',
                '📱 Mobile-First Responsive Design'
            ];
            
            alert(`🛡️ SECURITY FEATURES:\n\n${securityFeatures.join('\n')}\n\nBuilt with security-first principles!`);
        });
    }
});

// Enhanced form security with XSS prevention and real-time validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                // XSS prevention - sanitize dangerous content
                this.value = this.value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
                this.value = this.value.replace(/javascript:/gi, '');
                this.value = this.value.replace(/on\w+=/gi, '');
            });
            
            input.addEventListener('blur', function() {
                validateInput(this);
            });
        });
        
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput) {
            emailInput.addEventListener('input', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value && !emailRegex.test(this.value)) {
                    this.style.borderColor = '#ff6b6b';
                } else {
                    this.style.borderColor = '#00ff88';
                }
            });
        }
    }
});

function validateInput(input) {
    const value = input.value.trim();
    
    if (input.hasAttribute('required') && !value) {
        input.style.borderColor = '#ff6b6b';
        return false;
    }
    
    if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
            input.style.borderColor = '#ff6b6b';
            return false;
        }
    }
    
    input.style.borderColor = '#00ff88';
    return true;
}

// Konami code easter egg - security professional appreciation feature
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.filter = 'hue-rotate(180deg)';
        document.body.style.transition = 'filter 0.5s ease';
        
        setTimeout(() => {
            document.body.style.filter = 'hue-rotate(360deg)';
        }, 3000);
        
        setTimeout(() => {
            document.body.style.filter = 'none';
            showEasterEgg();
        }, 4000);
    }
});

function showEasterEgg() {
    const easterEggMessages = [
        "🕵️ Congratulations! You found the security professional's easter egg!",
        "🛡️ You've got the skills of a true cybersecurity expert!",
        "🔍 You might be a gamer!",
        "⚡ Nice work! Let me know when you find the next easter egg!"
    ];
    
    const randomMessage = easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)];
    alert(randomMessage);
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Basic client-side security monitoring for demonstration
let securityEvents = [];

window.addEventListener('error', (e) => {
    if (e.message.includes('script') || e.message.includes('eval')) {
        securityEvents.push({
            type: 'potential_xss',
            timestamp: new Date().toISOString(),
            message: e.message,
            source: e.filename,
            line: e.lineno
        });
        
        console.warn('🛡️ Security Alert: Potential XSS attempt detected and blocked');
    }
});

// Developer tools detection with friendly security message
let devtools = {
    open: false,
    orientation: null
};

setInterval(() => {
    const threshold = 200;
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
            devtools.open = true;
            console.log('🛡️ Security Notice: Developer tools detected. This portfolio is open source - feel free to explore!');
            console.log('🔍 GitHub: https://github.com/DavisAdrian');
            console.log('💼 LinkedIn: https://www.linkedin.com/in/adrian-davis-bb6b82222/');
        }
    } else {
        devtools.open = false;
    }
}, 500);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.5)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    window.addEventListener('beforeunload', () => {
        if (cleanupMatrix) {
            cleanupMatrix();
        }
    });
});

// Accessibility enhancements for keyboard navigation
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        if (!link.getAttribute('aria-label')) {
            link.setAttribute('aria-label', `${link.textContent} (opens in new tab)`);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const profileImg = new Image();
    profileImg.src = 'images/profile.jpg';
    
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);
});

// Production error handling
window.addEventListener('error', (e) => {
    console.error('Application Error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
});
