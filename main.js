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
window.addEventListener('scroll', () => {
  hdr.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Scroll reveal
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Ecosystem tab switcher
const ecoBtns = document.querySelectorAll('.eco-selector-btn');
const ecoContents = document.querySelectorAll('.eco-detail-content');

ecoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    
    // Update active button
    ecoBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update active content
    ecoContents.forEach(content => {
      if (content.id === targetId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});