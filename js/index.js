// Show Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Toggle show class
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

// Active Link
const activeLink = document.querySelectorAll('.nav__link');
function perforemAction() {
    activeLink.forEach(link => {
        link.classList.remove('active');
        this.classList.add('active');
    })
    // Remove Menu after Clicking the Link
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
activeLink.forEach(n => n.addEventListener('click', perforemAction))

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// Scroll Home
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__image', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })

// Scroll About
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 400 })

// Scroll Skill
sr.reveal('.skills__text', {})
sr.reveal('.skills__subtitle', { delay: 200 })
sr.reveal('.skills__data', { interval: 200 })
sr.reveal('.skills__img', { delay: 400 })

// Scroll Work
sr.reveal('.work__img', { interval: 200 })

// Scroll Contact
sr.reveal('.contact__input', { interval: 200 })

// Moving Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.cssText = cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

