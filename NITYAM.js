const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    contactForm.reset(); // Optional: reset form fields after submission
  });
}