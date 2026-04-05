// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Contact form alert (if using a form)
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! I’ll get back to you soon.');
    contactForm.reset();
  });
}

// Dynamic greeting on homepage
window.addEventListener('DOMContentLoaded', () => {
  const greeting = document.createElement('p');
  const hour = new Date().getHours();
  let message = 'Welcome!';

  if (hour < 12) message = 'Good morning!';
  else if (hour < 18) message = 'Good afternoon!';
  else message = 'Good evening!';

  greeting.textContent = message;
  greeting.style.fontSize = '1.2em';
  greeting.style.marginTop = '1em';

  const hero = document.querySelector('.hero');
  if (hero) hero.appendChild(greeting);
});
