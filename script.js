document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navbarLinks = document.querySelectorAll('.navbar a');

  // Change navbar background color on scroll
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.style.backgroundColor = '#444'; 
      } else {
          navbar.style.backgroundColor = '#333';
      }

      let current = '';

      navbarLinks.forEach(link => {
          const section = document.querySelector(link.getAttribute('href'));
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = link.getAttribute('href').substring(1);
          }
      });

      navbarLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
              link.classList.add('active');
          }
      });
  });
});
