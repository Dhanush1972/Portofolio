// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// Simple form submit handler
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', e => {
  e.preventDefault();
  alert(`Thanks for reaching out, ${form.name.value}! I'll get back to you soon.`)
  form.reset();
});
