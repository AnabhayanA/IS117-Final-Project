// Contact Form with Zapier Webhook Integration
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    // Replace with your actual Zapier webhook URL
    const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/';
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };
        
        // Show loading state
        formStatus.textContent = 'Sending message...';
        formStatus.className = 'form-status';
        
        try {
            // Send to Zapier webhook
            const response = await fetch(ZAPIER_WEBHOOK_URL, {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                formStatus.className = 'form-status success';
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            formStatus.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
            formStatus.className = 'form-status error';
            console.error('Form submission error:', error);
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
