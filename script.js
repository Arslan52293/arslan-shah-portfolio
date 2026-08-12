// js/script.js

(function() {
  'use strict';

  // ============================================
  // DOM ELEMENTS
  // ============================================
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinksContainer = document.querySelector('.nav-links');

  // ============================================
  // RESPONSIVE NAVIGATION MANAGEMENT
  // ============================================
  
  // Create mobile menu button if it doesn't exist
  function createMobileMenuButton() {
    if (!mobileMenuBtn && window.innerWidth <= 768) {
      const btn = document.createElement('button');
      btn.id = 'mobileMenuBtn';
      btn.className = 'mobile-menu-btn';
      btn.innerHTML = '☰';
      btn.setAttribute('aria-label', 'Toggle navigation menu');
      btn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.8rem;
        cursor: pointer;
        color: inherit;
        padding: 0.5rem;
        line-height: 1;
      `;
      navbar.insertBefore(btn, navLinksContainer);
      return btn;
    }
    return mobileMenuBtn;
  }

  // Handle responsive navigation
  function handleResponsiveNav() {
    const isMobile = window.innerWidth <= 768;
    const menuBtn = document.getElementById('mobileMenuBtn') || createMobileMenuButton();
    
    if (isMobile) {
      // Mobile view
      if (menuBtn) menuBtn.style.display = 'block';
      if (navLinksContainer) {
        navLinksContainer.style.display = 'none';
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.top = '100%';
        navLinksContainer.style.left = '0';
        navLinksContainer.style.width = '100%';
        navLinksContainer.style.flexDirection = 'column';
        navLinksContainer.style.background = body.classList.contains('dark') 
          ? 'rgba(17, 20, 17, 0.98)' 
          : 'rgba(246, 245, 240, 0.98)';
        navLinksContainer.style.backdropFilter = 'blur(20px)';
        navLinksContainer.style.padding = '2rem';
        navLinksContainer.style.gap = '1.5rem';
        navLinksContainer.style.borderBottom = '1px solid ' + 
          (body.classList.contains('dark') ? '#2A2D28' : '#DDDCD4');
        navLinksContainer.style.transition = 'all 0.3s ease';
        navLinksContainer.style.zIndex = '99';
      }
      
      // Add click handler to mobile menu button
      if (menuBtn && !menuBtn._hasClickHandler) {
        menuBtn._hasClickHandler = true;
        menuBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          if (navLinksContainer) {
            const isVisible = navLinksContainer.style.display === 'flex';
            navLinksContainer.style.display = isVisible ? 'none' : 'flex';
            menuBtn.innerHTML = isVisible ? '☰' : '✕';
          }
        });
      }
      
      // Close mobile menu when a link is clicked
      navLinks.forEach(link => {
        if (!link._hasMobileClickHandler) {
          link._hasMobileClickHandler = true;
          link.addEventListener('click', function() {
            if (navLinksContainer && window.innerWidth <= 768) {
              navLinksContainer.style.display = 'none';
              if (menuBtn) menuBtn.innerHTML = '☰';
            }
          });
        }
      });
      
    } else {
      // Desktop view
      if (menuBtn) menuBtn.style.display = 'none';
      if (navLinksContainer) {
        navLinksContainer.style.display = 'flex';
        navLinksContainer.style.position = '';
        navLinksContainer.style.top = '';
        navLinksContainer.style.left = '';
        navLinksContainer.style.width = '';
        navLinksContainer.style.flexDirection = '';
        navLinksContainer.style.background = '';
        navLinksContainer.style.backdropFilter = '';
        navLinksContainer.style.padding = '';
        navLinksContainer.style.gap = '';
        navLinksContainer.style.borderBottom = '';
      }
    }
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && navLinksContainer) {
      const menuBtn = document.getElementById('mobileMenuBtn');
      if (!navbar.contains(e.target) && navLinksContainer.style.display === 'flex') {
        navLinksContainer.style.display = 'none';
        if (menuBtn) menuBtn.innerHTML = '☰';
      }
    }
  });

  // ============================================
  // DARK / LIGHT MODE
  // ============================================
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark');
      if (themeToggle) themeToggle.textContent = '☼';
    } else {
      body.classList.remove('dark');
      if (themeToggle) themeToggle.textContent = '☾';
    }
    updateMobileMenuColors();
  }

  function toggleTheme() {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (themeToggle) themeToggle.textContent = isDark ? '☼' : '☾';
    updateMobileMenuColors();
  }

  function updateMobileMenuColors() {
    if (navLinksContainer && window.innerWidth <= 768) {
      const isDark = body.classList.contains('dark');
      navLinksContainer.style.background = isDark 
        ? 'rgba(17, 20, 17, 0.98)' 
        : 'rgba(246, 245, 240, 0.98)';
      navLinksContainer.style.borderBottom = '1px solid ' + 
        (isDark ? '#2A2D28' : '#DDDCD4');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // ============================================
  // NAVBAR SCROLL EFFECT
  // ============================================
  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // ============================================
  // SMOOTH SCROLLING
  // ============================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || !href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navbarHeight = navbar.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
  // ============================================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
      '.project-item, .exp-item, .skill-category, .about-flex, .nature-divider .quote'
    );
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });
  }

  // ============================================
  // IMAGE LAZY LOADING
  // ============================================
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    }, { threshold: 0.1 });

    images.forEach(img => imageObserver.observe(img));
  }

  // ============================================
  // RESIZE HANDLER
  // ============================================
  let resizeTimeout;
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      handleResponsiveNav();
      updateMobileMenuColors();
    }, 250);
  }

  // ============================================
  // KEYBOARD NAVIGATION (ACCESSIBILITY)
  // ============================================
  function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
      // Close mobile menu on Escape
      if (e.key === 'Escape' && window.innerWidth <= 768 && navLinksContainer) {
        const menuBtn = document.getElementById('mobileMenuBtn');
        if (navLinksContainer.style.display === 'flex') {
          navLinksContainer.style.display = 'none';
          if (menuBtn) menuBtn.innerHTML = '☰';
        }
      }
    });
  }

  // ============================================
  // PROJECT CARD HOVER EFFECTS (MOBILE OPTIMIZATION)
  // ============================================
  function initProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-item');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    projectCards.forEach(card => {
      if (isTouchDevice) {
        card.style.transform = 'none';
        card.addEventListener('touchstart', function() {
          this.style.transform = 'scale(0.98)';
        }, { passive: true });
        card.addEventListener('touchend', function() {
          this.style.transform = 'scale(1)';
        }, { passive: true });
      }
    });
  }

  // ============================================
  // PERFORMANCE OPTIMIZATION
  // ============================================
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const debouncedScroll = debounce(handleNavbarScroll, 10);

  // ============================================
  // INITIALIZATION
  // ============================================
  function init() {
    initTheme();
    handleResponsiveNav();
    initSmoothScroll();
    initScrollAnimations();
    initLazyLoading();
    initKeyboardNavigation();
    initProjectCardEffects();
    
    // Event listeners
    window.addEventListener('scroll', debouncedScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial scroll check
    handleNavbarScroll();
    
    // Re-check responsive nav on orientation change
    window.addEventListener('orientationchange', function() {
      setTimeout(handleResponsiveNav, 100);
    });
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();