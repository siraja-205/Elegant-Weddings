
        // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            const isOpen = navLinks.classList.toggle('active');
            this.setAttribute('aria-expanded', String(isOpen));
            this.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const selector = this.getAttribute('href');
                const target = selector === '#' ? null : document.querySelector(selector);
                if (!target) {
                    return;
                }

                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('active');
                document.querySelector('.mobile-menu').setAttribute('aria-expanded', 'false');
                document.querySelector('.mobile-menu').setAttribute('aria-label', 'Open navigation menu');
            });
        });

        // Sticky Navigation
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(48, 35, 42, 0.96)';
                nav.style.padding = '10px 0';
            } else {
                nav.style.background = 'rgba(48, 35, 42, 0.88)';
                nav.style.padding = '14px 0';
            }
        });

        // Form Submission
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });
        }

        // Newsletter Form Submission
        const newsletterForm = document.querySelector('.footer-column form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            });
        }
    