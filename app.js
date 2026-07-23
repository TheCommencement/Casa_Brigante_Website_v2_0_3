
const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.mobile-nav');

if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    mobile.classList.toggle('is-open', !open);
  });

  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobile.classList.remove('is-open');
    });
  });
}

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}

document.querySelector('.newsletter-form')?.addEventListener('submit', event => {
  event.preventDefault();
});

// Correspondence confirmation, in the voice of the house.
const form = document.querySelector('.newsletter-form');
if (form) {
  const confirmLine = form.querySelector('.form-confirm');
  form.addEventListener('submit', () => {
    const email = form.querySelector('#email');
    if (email && email.value.includes('@')) {
      confirmLine.textContent = 'Received. We write rarely, and only with news.';
      email.value = '';
    } else {
      confirmLine.textContent = 'That address did not go through. Try once more.';
    }
  });
}
