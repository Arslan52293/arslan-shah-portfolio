// js/script.js
(function() {
    'use strict';

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const body = document.body;
    const preloader = document.querySelector('.preloader');
    const preloaderProgress = document.querySelector('.preloader-progress');
    const navbar = document.getElementById('navbar');
    const themeToggle = document.getElementById('themeToggle');
    const hamburger = document.getElementById('hamburger');
    const mobileCarousel = document.getElementById('mobileCarousel');
    const carouselClose = document.getElementById('carouselClose');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const particleCanvas = document.getElementById('particleCanvas');
    const heroImage = document.getElementById('heroImage');

    // ============================================
    // PRELOADER
    // ============================================
    function initPreloader() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 20;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 500);
                }, 500);
            }
            preloaderProgress.style.width = progress + '%';
        }, 200);
    }

    // ============================================
    // CUSTOM CURSOR
    // ============================================
    function initCustomCursor() {
        if (window.innerWidth <= 768) return;

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX - 15 + 'px';
                cursorFollower.style.top = e.clientY - 15 + 'px';
            }, 100);
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });

        // Hover effects
        document.querySelectorAll('a, button, .project-item, .skill-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursorFollower.style.transform = 'scale(1.5)';
                cursorFollower.style.borderColor = 'var(--accent-coral)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
                cursorFollower.style.borderColor = 'var(--accent-green)';
            });
        });
    }

    // ============================================
    // PARTICLE SYSTEM
    // ============================================
    function initParticles() {
        const ctx = particleCanvas.getContext('2d');
        let particles = [];
        const particleCount = window.innerWidth <= 768 ? 30 : 80;

        function resizeCanvas() {
            particleCanvas.width = window.innerWidth;
            particleCanvas.height = window.innerHeight;
        }

        function createParticle() {
            return {
                x: Math.random() * particleCanvas.width,
                y: Math.random() * particleCanvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25,
                opacity: Math.random() * 0.5 + 0.1,
                color: Math.random() > 0.5 ? '83,102,83' : '180,201,139'
            };
        }

        function initParticleArray() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(createParticle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
            
            particles.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                if (particle.x < 0 || particle.x > particleCanvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > particleCanvas.height) particle.speedY *= -1;
                
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
                ctx.fill();
            });
            
            requestAnimationFrame(animateParticles);
        }

        resizeCanvas();
        initParticleArray();
        animateParticles();
        
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticleArray();
        });
    }

    // ============================================
    // NAVIGATION
    // ============================================
    function initNavigation() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ============================================
    // MOBILE CAROUSEL
    // ============================================
    function initMobileCarousel() {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileCarousel.classList.toggle('active');
        });

        carouselClose.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileCarousel.classList.remove('active');
        });

        // Close carousel when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileCarousel.classList.contains('active') && 
                !mobileCarousel.contains(e.target) && 
                !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                mobileCarousel.classList.remove('active');
            }
        });

        // Handle carousel item clicks
        carouselItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileCarousel.classList.remove('active');
                updateCarouselIndicators(index);
            });
        });

        // Handle carousel dots
        carouselDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateCarouselIndicators(index);
                scrollToSection(index);
            });
        });
    }

    function updateCarouselIndicators(index) {
        carouselDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function scrollToSection(index) {
        const sections = ['#home', '#work', '#casestudies', '#experience', '#about', '#skills', '#contact'];
        const target = document.querySelector(sections[index]);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // ============================================
    // THEME TOGGLE
    // ============================================
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            const isDark = body.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    function initScrollAnimations() {
        // Project items
        const projectItems = document.querySelectorAll('.project-item');
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        projectItems.forEach(item => projectObserver.observe(item));

        // Case study items
        const caseStudyItems = document.querySelectorAll('.case-study-item');
        const caseStudyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.transition = `opacity 0.8s ease ${entry.target.dataset.delay || '0s'}, 
                                                    transform 0.8s ease ${entry.target.dataset.delay || '0s'}`;
                }
            });
        }, { threshold: 0.2 });

        caseStudyItems.forEach(item => caseStudyObserver.observe(item));

        // Timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        timelineItems.forEach(item => timelineObserver.observe(item));

        // About items
        const aboutImage = document.querySelector('.about-image-wrapper');
        const aboutContent = document.querySelector('.about-content');
        
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === aboutImage) {
                        aboutImage.classList.add('visible');
                    }
                    if (entry.target === aboutContent) {
                        aboutContent.classList.add('visible');
                    }
                }
            });
        }, { threshold: 0.2 });

        if (aboutImage) aboutObserver.observe(aboutImage);
        if (aboutContent) aboutObserver.observe(aboutContent);

        // Skill cards
        const skillCards = document.querySelectorAll('.skill-card');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
                }
            });
        }, { threshold: 0.2 });

        skillCards.forEach(card => skillObserver.observe(card));
    }

    // ============================================
    // PARALLAX EFFECTS
    // ============================================
    function initParallax() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            // Hero parallax
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
            
            // Project parallax
            document.querySelectorAll('.project-item[data-parallax]').forEach(item => {
                const rect = item.getBoundingClientRect();
                const speed = 0.1;
                const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
                item.style.transform = `translateY(${offset}px)`;
            });
        });
    }

    // ============================================
    // GSAP ADVANCED ANIMATIONS
    // ============================================
    function initGSAPAnimations() {
        if (window.gsap && window.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
            
            // Hero title animation
            gsap.from('.hero-title', {
                duration: 1.5,
                opacity: 0,
                y: 100,
                ease: 'power4.out',
                delay: 1
            });
            
            gsap.from('.hero-subtitle', {
                duration: 1,
                opacity: 0,
                y: 50,
                ease: 'power3.out',
                delay: 1.5
            });
            
            gsap.from('.hero-description', {
                duration: 1,
                opacity: 0,
                y: 30,
                ease: 'power3.out',
                delay: 2
            });
            
            gsap.from('.btn-group', {
                duration: 1,
                opacity: 0,
                y: 20,
                ease: 'power3.out',
                delay: 2.5
            });
            
            // Section animations
            gsap.utils.toArray('.section-header').forEach(header => {
                gsap.from(header, {
                    scrollTrigger: {
                        trigger: header,
                        start: 'top 80%',
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: 'power3.out'
                });
            });
        }
    }

    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // ============================================
    // RESPONSIVE HANDLER
    // ============================================
    function handleResponsive() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            document.querySelector('.desktop-nav').style.display = 'none';
            document.querySelector('.hamburger').style.display = 'flex';
        } else {
            document.querySelector('.desktop-nav').style.display = 'flex';
            document.querySelector('.hamburger').style.display = 'none';
            mobileCarousel.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        initPreloader();
        initCustomCursor();
        initParticles();
        initNavigation();
        initMobileCarousel();
        initTheme();
        initScrollAnimations();
        initParallax();
        initGSAPAnimations();
        initSmoothScroll();
        handleResponsive();
        
        window.addEventListener('resize', handleResponsive);
        
        console.log('✨ Premium Portfolio Initialized');
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();