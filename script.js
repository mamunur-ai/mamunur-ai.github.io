// Toggle the navigation menu open/closed on mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('open');
});

// Close the mobile menu when a link is clicked (for smooth navigation)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('open');
  });
});
