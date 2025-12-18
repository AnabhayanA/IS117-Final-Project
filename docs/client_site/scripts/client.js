// Client Site - GreenLeaf Landscaping JavaScript

document.addEventListener('DOMContentLoaded', () => {
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
    
    // Intersection Observer for fade-in animations
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
    
    // Observe elements for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(section);
    });
    
    // Add fade-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
