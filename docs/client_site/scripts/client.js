// Client Site - GreenLeaf Landscaping JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            const isExpanded = menuToggle.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Form handling
    const form = document.getElementById('client-contact-form');
    const formStatus = document.getElementById('client-form-status');
    
    // Replace with your actual Zapier webhook URL
    const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/';
    
    // Form submission handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('client-name').value,
            phone: document.getElementById('client-phone').value,
            email: document.getElementById('client-email').value,
            address: document.getElementById('client-address').value,
            service: document.getElementById('client-service').value,
            message: document.getElementById('client-message').value,
            timestamp: new Date().toISOString(),
            source: 'GreenLeaf Landscaping Website'
        };
        
        // Show loading state
        formStatus.textContent = 'Sending your request...';
        formStatus.className = 'form-status';
        
        try {
            // Send to Zapier webhook
            const response = await fetch(ZAPIER_WEBHOOK_URL, {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                formStatus.textContent = '🎉 Success! We\'ll contact you within 24 hours to schedule your free consultation.';
                formStatus.className = 'form-status success';
                form.reset();
                
                // Track conversion (if using analytics)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
                        'value': 1.0,
                        'currency': 'USD'
                    });
                }
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            formStatus.textContent = '❌ Oops! Something went wrong. Please call us at (555) 123-4567 or try again.';
            formStatus.className = 'form-status error';
            console.error('Form submission error:', error);
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(section);
    });
    
    // Observe cards for staggered animation
    document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        fadeInObserver.observe(card);
    });
    
    // Parallax effect on hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-client');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Interactive service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Portfolio item hover effect with info overlay
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
    
    // Number counter animation for stats/trust badges
    const animateCounter = (element, target) => {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    };
    
    // Trigger counter animation when trust badges come into view
    const trustBadges = document.querySelector('.trust-badges');
    if (trustBadges) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const badges = entry.target.querySelectorAll('span');
                    badges.forEach(badge => {
                        const text = badge.textContent;
                        const match = text.match(/\d+/);
                        if (match) {
                            const num = parseInt(match[0]);
                            badge.textContent = text.replace(/\d+/, '0');
                            setTimeout(() => {
                                badge.textContent = text;
                            }, 500);
                        }
                    });
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterObserver.observe(trustBadges);
    }
    
    // Add ripple effect to buttons
    document.querySelectorAll('.btn-primary-large, .btn-secondary, .nav-cta').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add fade-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .portfolio-item.expanded .portfolio-info {
            max-height: 500px;
            padding: 2rem;
        }
    `;
    document.head.appendChild(style);
});
