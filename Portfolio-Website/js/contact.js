document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Normally, here you would send data via fetch() or an email API.
  // For demo, show message directly:
  document.getElementById('formMessage').classList.remove('hidden');
});
