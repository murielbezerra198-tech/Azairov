document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const header = document.querySelector('.site-header');
  if (header) {
    const toggleHeader = () => {
      header.classList.toggle('scrolled', window.scrollY > 18);
    };

    toggleHeader();
    window.addEventListener('scroll', toggleHeader, { passive: true });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (revealItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            target.classList.remove('is-hidden');
          } else {
            target.classList.remove('is-visible');
            target.classList.add('is-hidden');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => {
      item.classList.add('is-hidden');
      observer.observe(item);
    });
  }
});
