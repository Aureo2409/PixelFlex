// Hamburger / overlay
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const closeMenu = () => {
  hamburger.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
};
hamburger.addEventListener('click', () => {
  const isOpen = overlay.classList.toggle('active');
  hamburger.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
document.querySelectorAll('.menu-link').forEach(l => l.addEventListener('click', closeMenu));
overlay.addEventListener('click', e => { if (e.target === overlay) closeMenu(); });

// Header scroll shadow
const hdr = document.getElementById('site-header');
if (hdr) {
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// Scroll Spy: Highlight active section in navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar-link, .menu-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${id}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '-20% 0px -50% 0px'
});

sections.forEach(section => spyObserver.observe(section));

// Scroll reveal
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));