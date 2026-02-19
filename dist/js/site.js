// Note: Typed.js is now initialized in the view file for better control
// Removed from here to prevent conflicts

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Scroll Reveal Animation
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal({
            reset: true,
            distance: "80px",
            duration: 2000,
            delay: 200,
        });

        ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
        ScrollReveal().reveal(
            ".home-img, .skills-container, .projects-container, .achievements-container, .contact form",
            { origin: "bottom" }
        );
        ScrollReveal().reveal(".home-content h1, .about-img", {
            origin: "left",
        });
        ScrollReveal().reveal(".home-content p, .about-content", {
            origin: "right",
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: this.name.value,
                email: this.email.value,
                subject: this.subject.value || "No Subject Provided",
                phone: this.phone.value || "Not Provided",
                message: this.text.value
            };

            try {
                // Submit to API
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (result.success) {
                    // Construct WhatsApp message
                    const name = encodeURIComponent(formData.name);
                    const email = encodeURIComponent(formData.email);
                    const subject = encodeURIComponent(formData.subject);
                    const phone = encodeURIComponent(formData.phone);
                    const message = encodeURIComponent(formData.message);

                    const whatsappUrl = `https://api.whatsapp.com/send?phone=919667033839&text=*📩 New Contact Inquiry*%0A%0A*🔹 Name:* ${name}%0A*📧 Email:* ${email}%0A*📞 Phone:* ${phone}%0A*📝 Subject:* ${subject}%0A%0A*💬 Message:*%0A${message}%0A%0A_This message was sent via your portfolio website_`;

                    // Open WhatsApp
                    window.open(whatsappUrl, "_blank");

                    // Show confirmation
                    alert("✅ Message saved and sent successfully! You'll be redirected to WhatsApp.");

                    // Reset form
                    this.reset();
                } else {
                    alert("❌ Error: " + result.message);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert("❌ Error submitting form. Please try again.");
            }
        });
    }

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link based on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Mirror active state in mobile menu
        mobileMenuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    /* Mobile Navigation Toggle */
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileToggle && mobileMenu) {
        const closeMenu = () => {
            mobileToggle.classList.remove('is-active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('is-open');
            document.body.classList.remove('no-scroll');
        };

        const openMenu = () => {
            mobileToggle.classList.add('is-active');
            mobileToggle.setAttribute('aria-expanded', 'true');
            mobileMenu.classList.add('is-open');
            document.body.classList.add('no-scroll');
        };

        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (mobileMenu.classList.contains('is-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close on link click
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Smooth scroll handled above; just close menu
                closeMenu();
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('is-open')) {
                const withinMenu = mobileMenu.contains(e.target);
                const withinToggle = mobileToggle.contains(e.target);
                if (!withinMenu && !withinToggle) {
                    closeMenu();
                }
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
                closeMenu();
                mobileToggle.focus();
            }
        });

        // Accessibility: trap focus when menu open (minimal implementation)
        const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && mobileMenu.classList.contains('is-open')) {
                const focusable = mobileMenu.querySelectorAll(focusableSelectors);
                if (!focusable.length) return;
                const firstEl = focusable[0];
                const lastEl = focusable[focusable.length - 1];
                if (e.shiftKey) {
                    if (document.activeElement === firstEl) {
                        e.preventDefault();
                        lastEl.focus();
                    }
                } else {
                    if (document.activeElement === lastEl) {
                        e.preventDefault();
                        firstEl.focus();
                    }
                }
            }
        });
    }
});

// Prevent body scroll when mobile menu open
const style = document.createElement('style');
style.innerHTML = 'body.no-scroll{overflow:hidden;}';
document.head.appendChild(style);