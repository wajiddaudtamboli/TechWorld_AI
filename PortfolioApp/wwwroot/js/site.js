// Note: Typed.js is now initialized in the view file for better control
// Removed from here to prevent conflicts

// Ensure BoxIcons fonts are loaded
document.fonts.ready.then(function () {
    console.log('Fonts loaded successfully');
    // Force re-render of icons
    const icons = document.querySelectorAll('.bx, [class*="bx-"], [class*="bxl-"]');
    icons.forEach(icon => {
        icon.style.fontFamily = 'boxicons';
    });
});

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Verify BoxIcons are loading
    const iconTest = document.createElement('i');
    iconTest.className = 'bx bx-check';
    iconTest.style.position = 'absolute';
    iconTest.style.left = '-9999px';
    document.body.appendChild(iconTest);
    
    // Check if icon font is loaded
    setTimeout(() => {
        const computedStyle = window.getComputedStyle(iconTest);
        console.log('BoxIcons font-family:', computedStyle.fontFamily);
        document.body.removeChild(iconTest);
    }, 100);
    // Mobile Menu Toggle - Enhanced implementation
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    // Check if elements exist before adding event listeners
    if (menuIcon && navbar) {
        // Function to close menu
        function closeMenu() {
            menuIcon.classList.remove("bx-x");
            navbar.classList.remove("active");
            document.body.classList.remove("menu-open");
        }

        // Function to open menu
        function openMenu() {
            menuIcon.classList.add("bx-x");
            navbar.classList.add("active");
            document.body.classList.add("menu-open");
        }

        // Function to toggle menu
        function toggleMenu() {
            if (navbar.classList.contains("active")) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        // Menu icon click handler
        menuIcon.addEventListener("click", function (e) {
            e.stopPropagation();
            toggleMenu();
            console.log("Menu toggled");
        });

        // Close menu when clicking on nav links
        document.querySelectorAll(".navbar a").forEach((link) => {
            link.addEventListener("click", () => {
                closeMenu();
                console.log("Menu closed by nav link");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (
                navbar.classList.contains("active") &&
                !navbar.contains(e.target) &&
                e.target !== menuIcon
            ) {
                closeMenu();
                console.log("Menu closed by outside click");
            }
        });

        // Close menu on escape key press
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navbar.classList.contains("active")) {
                closeMenu();
                console.log("Menu closed by escape key");
            }
        });

        // Handle window resize - close menu if window becomes larger
        window.addEventListener("resize", () => {
            if (window.innerWidth > 991 && navbar.classList.contains("active")) {
                closeMenu();
                console.log("Menu closed due to window resize");
            }
        });

    } else {
        console.error("Menu icon or navbar not found!");
    }

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
    });
});