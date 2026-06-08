function goTo(id) {
      const el = document.getElementById(id);
      if (!el) return;
      const headerH = document.querySelector('header').offsetHeight;
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerH - 10;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }

    function mobileGoTo(id) {
      // Fermer le menu avant de scroller
      document.getElementById('mobile-menu').classList.remove('open');
      document.getElementById('burger').classList.remove('open');
      setTimeout(() => goTo(id), 50);
    }

const allSections = document.querySelectorAll('.section');
    const allLinks    = document.querySelectorAll('.nav-link');

    const scrollObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          allLinks.forEach(l => l.classList.remove('active'));
          const active = [...allLinks].find(l =>
            l.getAttribute('onclick')?.includes(entry.target.id)
          );
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.3 });

    allSections.forEach(s => scrollObserver.observe(s));

const themeBtn = document.getElementById('theme-toggle');
    const htmlEl   = document.documentElement;

    themeBtn.addEventListener('click', () => {
      const isDark = htmlEl.getAttribute('data-theme') === 'dark';
      htmlEl.setAttribute('data-theme', isDark ? 'light' : 'dark');
      themeBtn.textContent = isDark ? '🌙' : '☀️';
    });

const burger     = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobile-menu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', e => {
      if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });