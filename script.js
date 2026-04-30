/**
 * Dashboard Landing Page — Script
 * Handles scroll-triggered animations, navbar behaviour, and mobile menu.
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------------------------------------------------------------
     1. Navbar — show border on scroll past 60 px
     --------------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ---------------------------------------------------------------
     2. Mobile hamburger menu toggle
     --------------------------------------------------------------- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------------------------------------------------------------
     3. Scroll-reveal animations via IntersectionObserver
     --------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.15,
      }
    );

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: just show everything
    revealElements.forEach(el => el.classList.add('visible'));
  }

  /* ---------------------------------------------------------------
     4. Smooth-scroll for all anchor links (extra safety)
     --------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
