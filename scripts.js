document.querySelector('nav').addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    document.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    event.target.classList.add('active');
  }
});
