document.addEventListener('DOMContentLoaded', () => {

    /* ===========================
       CONTACT FORM
    ============================*/
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = "Sending...";
            btn.style.opacity = "0.7";
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = "Message Sent ✓";
                btn.style.opacity = "1";
                btn.style.backgroundColor = "#16a34a";

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = "#dc2626";
                    btn.disabled = false;
                    contactForm.reset();
                }, 1500);
            }, 1500);
        });
    }

    /* ===========================
       SCROLL REVEAL EFFECT
    ============================*/
    const reveals = document.querySelectorAll('.card-bg, .skill-card, .section-title');

    reveals.forEach(el => el.classList.add('reveal'));

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
