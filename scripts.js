// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

// Add a glowing effect to headers when they appear on the screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('glow');
      } else {
          entry.target.classList.remove('glow');
      }
  });
});

document.querySelectorAll('section h2').forEach((header) => {
  observer.observe(header);
});

// Create a magical mouse trail effect
const trail = [];
const colors = ['#ffde59', '#ff6f91', '#6a5acd', '#40e0d0', '#ff4500'];

document.body.addEventListener('mousemove', (event) => {
  const circle = document.createElement('div');
  circle.classList.add('trail');
  circle.style.left = `${event.pageX}px`;
  circle.style.top = `${event.pageY}px`;
  circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(circle);
  trail.push(circle);

  setTimeout(() => {
      circle.remove();
      trail.shift();
  }, 500);
});

// Floating animations for articles
const articles = document.querySelectorAll('article');
articles.forEach((article, index) => {
  article.style.animationDelay = `${index * 0.2}s`;
  article.classList.add('float');
});

// Add typing animation to the header title
const headerTitle = document.querySelector('header h1');
const headerText = headerTitle.textContent;
headerTitle.textContent = '';
let i = 0;

function typeEffect() {
  if (i < headerText.length) {
      headerTitle.textContent += headerText.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;

// Scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '⬆';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
  } else {
      scrollToTopBtn.style.display = 'none';
  }
});
