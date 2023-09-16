const root = document.documentElement;
const loader = document.querySelector('.loader');

window.onload = function () {
    if (loader)
        loader.style.display = 'none';
    document.body.classList.remove('hide-overflow');

    // ****************************** Intersection observer

    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    if (faders) {
        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    // *********************************************

    const mobileNavBtn = document.querySelector('.lp-nav-btn');
    const mobileNav = document.querySelector('.lp-mobile-nav');
    if (mobileNav && mobileNavBtn) {
        mobileNavBtn.addEventListener('click', () => {
            if (!mobileNav.classList.contains('shown')) {
                mobileNav.classList.add('shown');
                mobileNavBtn.classList.add('navbar-shown');
                document.body.classList.add('hide-overflow');
            } else {
                mobileNav.classList.remove('shown');
                mobileNavBtn.classList.remove('navbar-shown');
                document.body.classList.remove('hide-overflow');
            }
        });
    }

    // resize event 

    window.addEventListener('resize', () => {
        if (mobileNav && mobileNavBtn) {
            if (window.innerWidth > 750 && mobileNav.classList.contains('shown')) {
                mobileNav.classList.remove('shown');
                mobileNavBtn.classList.remove('navbar-shown');
                document.body.classList.remove('hide-overflow');
            }
        }
    });

    // scroll event

    window.addEventListener('scroll', function () {
        if (window.scrollY === 0 && faders) {
            faders.forEach(fader => {
                fader.classList.remove('appear');
                appearOnScroll.observe(fader);
            });
        }
    });
};