// Set footer year
(function setFooterYear() {
    const footerYear = document.getElementById('footerYear');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
})();

// Animate progress bars when they enter the viewport
(function animateProgressBars() {
    const skills = [
        { id: 'htmlCssProgress', value: 90 },
        { id: 'jsProgress', value: 80 },
        { id: 'phpProgress', value: 70 },
        { id: 'bootstrapProgress', value: 80 },
        { id: 'wordpressProgress', value: 70 },
        { id: 'canvaProgress', value: 85 },
        { id: 'adobeXdProgress', value: 75 },
        { id: 'figmaProgress', value: 75 },
        { id: 'photoshopProgress', value: 80 },
        { id: 'animateProgress', value: 75 },
        { id: 'vscodeProgress', value: 90 },
        { id: 'blenderProgress', value: 40 },
    ];
    let animated = false;

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function animateBarAndNumber(bar, numberSpan, endValue, delay) {
        setTimeout(() => {
            bar.style.transition = 'width 1.2s cubic-bezier(.4,0,.2,1)';
            bar.style.width = `${endValue}%`;
            bar.setAttribute('aria-valuenow', endValue);

            let frame = 0;
            const duration = 1200;
            const frameRate = 30;
            const totalFrames = Math.round(duration / frameRate);

            function updateNumber() {
                frame++;
                const progress = Math.min(frame / totalFrames, 1);
                numberSpan.textContent = `${Math.round(progress * endValue)}%`;
                if (progress < 1) setTimeout(updateNumber, frameRate);
            }
            updateNumber();
        }, delay);
    }

    function triggerAnimation() {
        if (animated) return;
        const bar = document.getElementById('htmlCssProgress');
        if (bar && isInViewport(bar)) {
            animated = true;
            skills.forEach((skill, idx) => {
                const bar = document.getElementById(skill.id);
                if (!bar) return;
                const skillBar = bar.closest('.skill-bar');
                if (!skillBar) return;
                const numberSpan = skillBar.querySelector('.fw-bold');
                if (!numberSpan) return;
                animateBarAndNumber(bar, numberSpan, skill.value, 300 + idx * 200);
            });
        }
    }

    ['scroll', 'resize', 'DOMContentLoaded'].forEach(evt =>
        window.addEventListener(evt, triggerAnimation)
    );
})();

// Hero image zoom on scroll
(function heroImageZoom() {
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero-section');
        const bg = document.querySelector('.hero-bg-img');
        if (!hero || !bg) return;
        const rect = hero.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.bottom > 0 && rect.top < windowHeight) {
            const progress = Math.min(Math.max((window.scrollY || window.pageYOffset) / (hero.offsetHeight * 0.8), 0), 1);
            bg.style.transform = `scale(${1 + progress * 0.15})`;
        }
    });
})();

// Fade in sections on scroll
(function fadeInSections() {
    function handleFade() {
        document.querySelectorAll('.fade-section').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80 && rect.bottom > 80) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
    ['scroll', 'resize', 'DOMContentLoaded'].forEach(evt =>
        window.addEventListener(evt, handleFade)
    );
})();

// Dynamically set active nav-link based on scroll position and click
(function navActiveOnScroll() {
    const sections = [
        { id: "home", nav: "navHome" },
        { id: "about", nav: "navAbout" },
        { id: "portfolio", nav: "navPortfolio" },
        { id: "contact", nav: "navContact" }
    ];

    function getSectionTop(id) {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY;
    }

    function onScroll() {
        const scrollPos = window.scrollY || window.pageYOffset;
        const offset = 130;
        let activeSection = sections[0];
        for (let i = 0; i < sections.length; i++) {
            if (scrollPos >= getSectionTop(sections[i].id) - offset) {
                activeSection = sections[i];
            }
        }
        sections.forEach(s => {
            const nav = document.getElementById(s.nav);
            if (nav) nav.classList.remove("active");
        });
        const activeNav = document.getElementById(activeSection.nav);
        if (activeNav) activeNav.classList.add("active");
    }

    sections.forEach(s => {
        const nav = document.getElementById(s.nav);
        if (nav) {
            nav.addEventListener("click", () => {
                sections.forEach(sec => {
                    const navEl = document.getElementById(sec.nav);
                    if (navEl) navEl.classList.remove("active");
                });
                nav.classList.add("active");
            });
        }
    });

    window.addEventListener("scroll", onScroll);
    document.addEventListener("DOMContentLoaded", onScroll);
})();

// Animate circular progress bars
(function animateCircularProgress() {
    function updateCircles() {
        document.querySelectorAll('.progress-circle').forEach(circle => {
            const value = parseInt(circle.getAttribute('data-value'), 10);
            const left = circle.querySelector('.progress-left .progress-bar');
            const right = circle.querySelector('.progress-right .progress-bar');
            if (value > 50) {
                right.style.transform = 'rotate(180deg)';
                left.style.transform = `rotate(${(value - 50) * 3.6}deg)`;
            } else {
                right.style.transform = `rotate(${value * 3.6}deg)`;
                left.style.transform = 'rotate(0deg)';
            }
        });
    }
    ['DOMContentLoaded', 'scroll'].forEach(evt =>
        window.addEventListener(evt, updateCircles)
    );
})();

// Gallery modal: open correct image in carousel
(function galleryModal() {
    document.querySelectorAll('.gallery-thumb').forEach((thumb, idx) => {
        thumb.addEventListener('click', e => {
            e.preventDefault();
            const carousel = document.getElementById('galleryCarousel');
            if (carousel) {
                const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
                bsCarousel.to(idx);
            }
        });
    });
})();

// Dark mode toggle
(function darkModeToggle() {
    document.addEventListener('DOMContentLoaded', () => {
        const toggleBtn = document.getElementById('darkModeToggle');
        if (!toggleBtn) return;
        const icon = toggleBtn.querySelector('i');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const saved = localStorage.getItem('darkMode');
        function setDarkMode(on) {
            document.body.classList.toggle('dark-mode', on);
            icon.className = on ? 'bi bi-brightness-high' : 'bi bi-moon';
            localStorage.setItem('darkMode', on ? '1' : '0');
        }
        setDarkMode(saved === null ? prefersDark : saved === '1');
        toggleBtn.addEventListener('click', () => {
            setDarkMode(!document.body.classList.contains('dark-mode'));
        });
    });
})();