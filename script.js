/* ================================================================
   script.js — Complete application logic
   ================================================================ */

// ================================================================
// 1. DATA — All content managed here
// ================================================================

const profile = {
    name: 'Arslan Shah',
    title: 'Business & Technology Strategist',
    tagline: 'Brand Development · AI & Data Analytics · Software Engineering',
    bio: `<p>I'm <strong>Arslan Shah</strong>, a Business & Technology Strategist with a unique blend of expertise in brand development, AI, data analytics, and software engineering. I help businesses grow by combining strategic thinking with cutting-edge technology.</p>
          <p>With experience across brand strategy, e-commerce, AI automation, and software development, I bridge the gap between business goals and technical execution. My mission is to build systems that drive measurable growth.</p>
          <p><strong>Mission:</strong> Helping businesses grow using strategy, AI, software and data.</p>`,
    stats: [
        { number: '8+', label: 'Years Experience' },
        { number: '10+', label: 'Brands Worked' },
        { number: '2', label: 'Own Brands Built' },
        { number: '1.5', label: 'Agency Experience' }
    ],
    timeline: [
        { year: '2018–2020', desc: '<strong>Software Engineering Intern</strong> — Built POS systems and web applications.' },
        { year: '2020', desc: '<strong>Data Analysis Intern</strong> — Cleaned data, built dashboards, derived insights.' },
        { year: '2020–2022', desc: '<strong>Brand Development & Strategy</strong> — Worked with 10+ brands at HYPETEK Advertising Agency.' },
        { year: '2022–Present', desc: '<strong>Independent Consultant</strong> — Built two personal brands and launched multiple software projects.' }
    ]
};

const experience = [{
    company: 'XYZ Company',
    role: 'Software Engineering Intern',
    period: '6 Months',
    achievements: [
        'Developed and debugged internal web applications.',
        'Collaborated with cross-functional teams on frontend and backend tasks.',
        'Documented code and assisted in problem-solving sessions.'
    ]
}, {
    company: 'Data Analytics Firm',
    role: 'Data Analysis Intern',
    period: '3 Months',
    achievements: [
        'Cleaned and processed large datasets using Python and Excel.',
        'Built interactive dashboards in Power BI for business insights.',
        'Generated reports and visualizations for stakeholders.'
    ]
}, {
    company: 'HYPETEK Advertising Agency',
    role: 'Brand Development & Strategy',
    period: '1.5 Years',
    achievements: [
        'Worked with 10+ brands on positioning, strategy, and influencer marketing.',
        'Conducted consumer behavior analysis, competitor research, and data analytics.',
        'Leveraged AI for product photography and content generation.',
        'Collaborated with digital marketing teams to optimize campaigns.',
        'Delivered performance dashboards and client consulting.'
    ]
}];

const skills = {
    'Business & Strategy': [
        { name: 'Brand Strategy', level: 90 },
        { name: 'Market Research', level: 85 },
        { name: 'Competitive Analysis', level: 88 },
        { name: 'Consumer Psychology', level: 82 },
        { name: 'Business Intelligence', level: 84 }
    ],
    'Data & Analytics': [
        { name: 'Python (Pandas, NumPy)', level: 80 },
        { name: 'Power BI', level: 85 },
        { name: 'Excel', level: 90 },
        { name: 'SQL Basics', level: 75 },
        { name: 'Matplotlib', level: 70 }
    ],
    'AI & Automation': [
        { name: 'Generative AI (ChatGPT, Claude)', level: 88 },
        { name: 'Prompt Engineering', level: 90 },
        { name: 'AI Automation', level: 82 }
    ],
    'Development & E-commerce': [
        { name: 'HTML, CSS, JavaScript', level: 85 },
        { name: 'Responsive Design', level: 80 },
        { name: 'Git & GitHub', level: 78 },
        { name: 'Shopify', level: 85 },
        { name: 'E-commerce Strategy', level: 82 }
    ]
};

const projects = [{
    id: 1,
    title: 'Multi POS System',
    category: 'Software',
    description: 'Versatile point-of-sale system for various retail verticals.',
    tags: ['JavaScript', 'HTML', 'CSS', 'POS'],
    image: '🛒'
}, {
    id: 2,
    title: 'Pharmacy POS',
    category: 'Software',
    description: 'Specialized POS for pharmacy inventory and prescription management.',
    tags: ['JavaScript', 'Inventory', 'Pharmacy'],
    image: '💊'
}, {
    id: 3,
    title: 'School Fee Management System',
    category: 'Software',
    description: 'Automated fee collection, tracking, and reporting for educational institutions.',
    tags: ['JavaScript', 'Finance', 'Education'],
    image: '🏫'
}, {
    id: 4,
    title: 'Mobile Shop POS',
    category: 'Software',
    description: 'POS tailored for mobile phone retailers with IMEI tracking.',
    tags: ['JavaScript', 'Retail', 'Inventory'],
    image: '📱'
}, {
    id: 5,
    title: 'Bakery POS',
    category: 'Software',
    description: 'Intuitive POS for bakeries with recipe cost management.',
    tags: ['JavaScript', 'Food', 'Retail'],
    image: '🍞'
}, {
    id: 6,
    title: 'Super Store POS',
    category: 'Software',
    description: 'Comprehensive POS for supermarkets with barcode scanning.',
    tags: ['JavaScript', 'Retail', 'Inventory'],
    image: '🛍️'
}, {
    id: 7,
    title: 'Brand Websites',
    category: 'Web',
    description: 'Custom brand websites for various businesses.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
    image: '🌐'
}, {
    id: 8,
    title: 'Shopify Stores',
    category: 'E-commerce',
    description: 'Full-fledged Shopify stores with custom themes and apps.',
    tags: ['Shopify', 'E-commerce', 'Liquid'],
    image: '🛍️'
}, {
    id: 9,
    title: 'Analytics Dashboards',
    category: 'Data',
    description: 'Interactive dashboards for business intelligence.',
    tags: ['Power BI', 'Python', 'Data Visualization'],
    image: '📊'
}];

const caseStudies = [{
    id: 1,
    title: 'Pakistan Metrics',
    subtitle: 'Economic Indicators Dashboard',
    description: 'Interactive dashboard tracking Pakistan\'s key economic indicators with historical data and forecasts.',
    image: '📈',
    tags: ['Data Visualization', 'Python', 'Dash'],
    link: '#'
}];

const tools = [
    'Shopify', 'VS Code', 'GitHub', 'Python',
    'ChatGPT', 'Claude', 'Gemini', 'DeepSeek',
    'Canva', 'Photoshop', 'Figma',
    'Google Analytics', 'Meta Ads Manager', 'Google Ads',
    'Excel', 'Power BI'
];

const testimonials = [{
    quote: 'Arslan\'s strategic approach transformed our brand presence. He combined data insights with creative thinking to deliver results that exceeded our expectations.',
    author: 'Sarah Ahmed',
    title: 'CEO, LuxeBrand',
    stars: 5
}, {
    quote: 'Working with Arslan on our software project was seamless. He understands both business needs and technical implementation perfectly.',
    author: 'Usman Khan',
    title: 'CTO, TechFlow Solutions',
    stars: 5
}, {
    quote: 'Arslan helped us build a Shopify store that generated 3x revenue in the first quarter. His e-commerce expertise is unmatched.',
    author: 'Ayesha Malik',
    title: 'Founder, Organic Bliss',
    stars: 5
}];

const achievements = [
    { number: '10+', label: 'Brands Worked' },
    { number: '2', label: 'Own Brands Built' },
    { number: '6', label: 'POS Systems' },
    { number: '3', label: 'Shopify Stores' },
    { number: '1.5', label: 'Agency Years' },
    { number: '5', label: 'AI Workflows' }
];

const services = [
    { icon: '📈', name: 'Brand Strategy', desc: 'Positioning, identity, and market entry.' },
    { icon: '💼', name: 'Business Consulting', desc: 'Growth strategy and operational efficiency.' },
    { icon: '🤖', name: 'AI Automation', desc: 'Workflow automation and AI integration.' },
    { icon: '📊', name: 'Data Analytics', desc: 'Insights, dashboards, and BI solutions.' },
    { icon: '🛍️', name: 'Shopify Development', desc: 'Custom stores, themes, and apps.' },
    { icon: '🔍', name: 'Market Research', desc: 'Competitor analysis and consumer insights.' }
];

const blogPosts = [{
    id: 1,
    title: 'How AI is Transforming Business Strategy',
    excerpt: 'Explore the impact of generative AI on strategic decision-making and competitive advantage.',
    category: 'AI',
    date: '2026-07-20',
    readTime: '5 min',
    tags: ['AI', 'Strategy', 'Business'],
    image: '🤖'
}, {
    id: 2,
    title: 'Pakistan\'s Economy: Trends and Opportunities',
    excerpt: 'An in-depth look at Pakistan\'s economic indicators and what they mean for investors.',
    category: 'Economy',
    date: '2026-07-15',
    readTime: '7 min',
    tags: ['Pakistan', 'Economy', 'Data'],
    image: '📊'
}, {
    id: 3,
    title: 'The Future of Brand Development',
    excerpt: 'How brands are evolving with AI, personalization, and data-driven storytelling.',
    category: 'Branding',
    date: '2026-07-10',
    readTime: '6 min',
    tags: ['Branding', 'Marketing', 'AI'],
    image: '🎯'
}, {
    id: 4,
    title: 'Building Scalable E-commerce with Shopify',
    excerpt: 'Best practices for creating high-converting Shopify stores that scale.',
    category: 'E-commerce',
    date: '2026-07-05',
    readTime: '8 min',
    tags: ['Shopify', 'E-commerce', 'Growth'],
    image: '🛍️'
}];

const faqs = [
    { q: 'What industries do you work with?', a: 'I work across technology, e-commerce, consumer goods, finance, and professional services. My approach is adaptable to any sector that values data-driven strategy.' },
    { q: 'How do you combine business strategy with technology?', a: 'I start with business goals and then identify the technology, AI, or data solutions that can accelerate those goals. I build systems that are both strategic and practical.' },
    { q: 'What kind of software projects have you built?', a: 'I\'ve developed multiple point-of-sale systems, a school management system, analytics dashboards, and Shopify stores. I also build custom web applications.' },
    { q: 'Can you help with AI integration in my business?', a: 'Absolutely. I specialize in generative AI, prompt engineering, and workflow automation. I can help you leverage AI for content, customer insights, and operations.' },
    { q: 'Do you offer consulting for startups?', a: 'Yes, I work with early-stage startups on brand strategy, product-market fit, and technology roadmaps. I can also help with investor presentations.' }
];

const socialLinks = {
    linkedin: 'https://linkedin.com/in/arslanshah',
    github: 'https://github.com/arslanshah',
    instagram: 'https://instagram.com/arslanshah',
    twitter: 'https://twitter.com/arslanshah',
    email: 'mailto:hello@arslanshah.com',
    whatsapp: 'https://wa.me/1234567890'
};

const contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@arslanshah.com', link: 'mailto:hello@arslanshah.com' },
    { icon: '📍', label: 'Location', value: 'Dubai, UAE', link: null },
    { icon: '📱', label: 'WhatsApp', value: '+971 50 123 4567', link: 'https://wa.me/971501234567' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/arslanshah', link: 'https://linkedin.com/in/arslanshah' }
];

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
];

// ================================================================
// 2. RENDER FUNCTIONS
// ================================================================

function renderNavigation() {
    const container = document.getElementById('navLinks');
    container.innerHTML = navItems.map(item =>
        `<a href="${item.href}">${item.label}</a>`
    ).join('');
    // Add CTA
    const cta = document.createElement('a');
    cta.href = '#contact';
    cta.className = 'nav-cta';
    cta.textContent = 'Let\'s Talk';
    container.appendChild(cta);

    // Mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.innerHTML = navItems.map(item =>
        `<a href="${item.href}">${item.label}</a>`
    ).join('');
    const mobileCta = document.createElement('a');
    mobileCta.href = '#contact';
    mobileCta.className = 'nav-cta';
    mobileCta.textContent = 'Let\'s Talk';
    mobileMenu.appendChild(mobileCta);
}

function renderHeroStats() {
    const container = document.getElementById('heroStats');
    container.innerHTML = profile.stats.map(s =>
        `<div class="hero-stat"><h3>${s.number}</h3><p>${s.label}</p></div>`
    ).join('');
}

function renderHeroDesc() {
    document.getElementById('heroDesc').textContent = profile.tagline;
}

function renderAbout() {
    document.getElementById('aboutText').innerHTML = profile.bio;
    const tl = document.getElementById('aboutTimeline');
    tl.innerHTML = profile.timeline.map(item =>
        `<div class="timeline-item"><span class="year">${item.year}</span><span class="desc">${item.desc}</span></div>`
    ).join('');
}

function renderExperience() {
    const container = document.getElementById('expTimeline');
    container.innerHTML = experience.map(exp =>
        `<div class="exp-item">
            <div class="top">
                <span class="company">${exp.company}</span>
                <span class="period">${exp.period}</span>
            </div>
            <div class="role">${exp.role}</div>
            <ul>${exp.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>`
    ).join('');
}

function renderSkills() {
    const wrap = document.getElementById('skillsWrap');
    wrap.innerHTML = Object.entries(skills).map(([category, items]) =>
        `<div class="skill-category">
            <h4>${category}</h4>
            ${items.map(s => `
                <div class="skill-bar-wrap">
                    <div class="label"><span>${s.name}</span><span>${s.level}%</span></div>
                    <div class="skill-bar"><div class="fill" data-level="${s.level}"></div></div>
                </div>
            `).join('')}
        </div>`
    ).join('');
}

function renderProjects(filter = 'All') {
    const grid = document.getElementById('projectsGrid');
    const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(p =>
        `<div class="project-card" data-category="${p.category}">
            <div class="thumb">${p.image}</div>
            <div class="body">
                <div class="cat">${p.category}</div>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
            </div>
        </div>`
    ).join('');
}

function renderProjectFilters() {
    const container = document.getElementById('projectFilters');
    const cats = ['All', ...new Set(projects.map(p => p.category))];
    container.innerHTML = cats.map(c =>
        `<button class="${c === 'All' ? 'active' : ''}" data-filter="${c}">${c}</button>`
    ).join('');
    container.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            container.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProjects(this.dataset.filter);
        });
    });
}

function renderCaseStudies() {
    const grid = document.getElementById('caseStudiesGrid');
    grid.innerHTML = caseStudies.map(cs =>
        `<div class="case-study-card">
            <div class="thumb">${cs.image}</div>
            <div class="body">
                <h3>${cs.title}</h3>
                <div class="sub">${cs.subtitle}</div>
                <p>${cs.description}</p>
                <div class="meta">
                    <span>${cs.tags.join(' · ')}</span>
                    <span><i class="fas fa-external-link-alt"></i> View Case Study</span>
                </div>
            </div>
        </div>`
    ).join('');
}

function renderTools() {
    const grid = document.getElementById('toolsGrid');
    const iconMap = {
        'Shopify': '🛍️', 'VS Code': '💻', 'GitHub': '🐙', 'Python': '🐍',
        'ChatGPT': '🤖', 'Claude': '🧠', 'Gemini': '✨', 'DeepSeek': '🔍',
        'Canva': '🎨', 'Photoshop': '📸', 'Figma': '✏️',
        'Google Analytics': '📊', 'Meta Ads Manager': '📱', 'Google Ads': '🎯',
        'Excel': '📈', 'Power BI': '📉'
    };
    grid.innerHTML = tools.map(name =>
        `<div class="tool-item"><span class="ti-icon">${iconMap[name] || '🛠️'}</span>${name}</div>`
    ).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonialSlider');
    container.innerHTML = testimonials.map(t =>
        `<div class="testimonial-card">
            <div class="stars">${'★'.repeat(t.stars)}</div>
            <blockquote>“${t.quote}”</blockquote>
            <div class="author">${t.author}</div>
            <div class="title">${t.title}</div>
        </div>`
    ).join('');
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = achievements.map(a =>
        `<div class="achievement-card">
            <div class="number">${a.number}</div>
            <div class="label">${a.label}</div>
        </div>`
    ).join('');
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = services.map(s =>
        `<div class="service-card">
            <span class="icon">${s.icon}</span>
            <h4>${s.name}</h4>
            <p>${s.desc}</p>
        </div>`
    ).join('');
}

function renderBlog() {
    const grid = document.getElementById('blogGrid');
    grid.innerHTML = blogPosts.map(post =>
        `<div class="blog-card">
            <div class="thumb">${post.image}</div>
            <div class="body">
                <div class="meta">
                    <span>${post.category}</span>
                    <span>${post.date}</span>
                    <span>${post.readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="tags">${post.tags.map(t => `<span>${t}</span>`).join('')}</div>
            </div>
        </div>`
    ).join('');
}

function renderFAQ() {
    const list = document.getElementById('faqList');
    list.innerHTML = faqs.map((item, i) =>
        `<div class="faq-item">
            <button class="faq-question" aria-expanded="false">
                ${item.q}
                <span class="icon">+</span>
            </button>
            <div class="faq-answer"><p>${item.a}</p></div>
        </div>`
    ).join('');
    list.querySelectorAll('.faq-item').forEach(item => {
        const btn = item.querySelector('.faq-question');
        btn.addEventListener('click', function() {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
}

function renderContact() {
    const container = document.getElementById('contactInfo');
    container.innerHTML = contactInfo.map(item =>
        `<div class="ci-item">
            <span class="ci-icon">${item.icon}</span>
            <span class="ci-text">
                <strong>${item.label}:</strong>
                ${item.link ? `<a href="${item.link}" target="_blank">${item.value}</a>` : item.value}
            </span>
        </div>`
    ).join('');
}

function renderFooter() {
    const links = document.getElementById('footerLinks');
    links.innerHTML = navItems.map(item =>
        `<a href="${item.href}">${item.label}</a>`
    ).join('');

    const socials = document.getElementById('footerSocials');
    const icons = {
        linkedin: 'fa-brands fa-linkedin-in',
        github: 'fa-brands fa-github',
        instagram: 'fa-brands fa-instagram',
        twitter: 'fa-brands fa-x-twitter',
        email: 'fa-regular fa-envelope',
        whatsapp: 'fa-brands fa-whatsapp'
    };
    socials.innerHTML = Object.entries(socialLinks).map(([key, url]) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${key}">
            <i class="${icons[key] || 'fa-regular fa-link'}"></i>
        </a>`
    ).join('');
}

// ================================================================
// 3. TYPEWRITER
// ================================================================

function initTypewriter() {
    const words = [
        'Business & Technology Strategist',
        'Brand Development Specialist',
        'AI & Data Analytics Professional',
        'Software Engineer'
    ];
    let wordIndex = 0, charIndex = 0, isDeleting = false;
    const el = document.getElementById('typewriter');

    function type() {
        const current = words[wordIndex];
        if (!isDeleting) {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                isDeleting = true;
                setTimeout(type, 1800);
                return;
            }
            setTimeout(type, 80);
        } else {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 400);
                return;
            }
            setTimeout(type, 40);
        }
    }
    type();
}

// ================================================================
// 4. INTERSECTION OBSERVER (Animations & Skill Bars)
// ================================================================

function initObservers() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animate skill bars if present
                const fills = entry.target.querySelectorAll('.skill-bar .fill');
                if (fills.length) {
                    fills.forEach(bar => {
                        const level = bar.dataset.level;
                        setTimeout(() => { bar.style.width = level + '%'; }, 300);
                    });
                }
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in, .skill-category').forEach(el => {
        observer.observe(el);
    });
}

// ================================================================
// 5. NAVIGATION & SCROLL
// ================================================================

function initNav() {
    const navbar = document.getElementById('navbar');
    const progress = document.getElementById('scroll-progress');
    const backTop = document.getElementById('back-top');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileOverlay');

    // Scroll events
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progressWidth = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progress.style.width = progressWidth + '%';

        navbar.classList.toggle('scrolled', scrollTop > 80);
        backTop.classList.toggle('visible', scrollTop > 400);
    });

    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile menu
    function toggleMenu(open) {
        const isOpen = open !== undefined ? open : mobileMenu.classList.toggle('open');
        mobileMenu.classList.toggle('open', isOpen);
        overlay.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    menuToggle.addEventListener('click', () => toggleMenu());
    overlay.addEventListener('click', () => toggleMenu(false));
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) toggleMenu(false);
    });
}

// ================================================================
// 6. CURSOR GLOW
// ================================================================

function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    let x = 0, y = 0, targetX = 0, targetY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function animateGlow() {
        x += (targetX - x) * 0.08;
        y += (targetY - y) * 0.08;
        glow.style.transform = `translate(${x - 160}px, ${y - 160}px)`;
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

// ================================================================
// 7. THEME TOGGLE (Dark Mode)
// ================================================================

function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const icon = toggle.querySelector('i');
    let dark = localStorage.getItem('theme') === 'dark';

    function setTheme(isDark) {
        document.body.classList.toggle('dark', isDark);
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        dark = isDark;
    }

    setTheme(dark);
    toggle.addEventListener('click', () => setTheme(!dark));
}

// ================================================================
// 8. COMMAND PALETTE (Ctrl+K)
// ================================================================

function initCommandPalette() {
    const overlay = document.getElementById('commandOverlay');
    const palette = document.getElementById('commandPalette');
    const input = document.getElementById('commandInput');
    const results = document.getElementById('commandResults');
    const toggleBtn = document.getElementById('commandToggle');

    // Build search index
    const searchable = [
        ...navItems.map(item => ({ label: item.label, href: item.href, type: 'Navigation' })),
        ...projects.map(p => ({ label: p.title, href: '#projects', type: 'Project' })),
        ...blogPosts.map(b => ({ label: b.title, href: '#blog', type: 'Blog' })),
        ...services.map(s => ({ label: s.name, href: '#services', type: 'Service' })),
        ...faqs.map(f => ({ label: f.q, href: '#faq', type: 'FAQ' }))
    ];

    function openPalette() {
        overlay.classList.add('active');
        palette.classList.add('active');
        input.value = '';
        results.innerHTML = '';
        input.focus();
        renderResults('');
    }

    function closePalette() {
        overlay.classList.remove('active');
        palette.classList.remove('active');
    }

    function renderResults(query) {
        const q = query.toLowerCase().trim();
        const filtered = q ? searchable.filter(item =>
            item.label.toLowerCase().includes(q)
        ) : searchable.slice(0, 10);

        if (filtered.length === 0) {
            results.innerHTML = '<div class="command-no-results">No results found</div>';
            return;
        }
        results.innerHTML = filtered.map(item =>
            `<div class="command-result-item" data-href="${item.href}">
                <span class="icon"><i class="fas fa-${item.type === 'Navigation' ? 'link' : 'file-alt'}"></i></span>
                <span class="label">${item.label}</span>
                <span class="type">${item.type}</span>
            </div>`
        ).join('');

        results.querySelectorAll('.command-result-item').forEach(el => {
            el.addEventListener('click', () => {
                const href = el.dataset.href;
                if (href.startsWith('#')) {
                    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.href = href;
                }
                closePalette();
            });
        });
    }

    toggleBtn.addEventListener('click', openPalette);
    overlay.addEventListener('click', closePalette);

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (palette.classList.contains('active')) {
                closePalette();
            } else {
                openPalette();
            }
        }
        if (e.key === 'Escape' && palette.classList.contains('active')) {
            closePalette();
        }
    });

    input.addEventListener('input', (e) => renderResults(e.target.value));

    // Keyboard navigation in results
    let selectedIndex = -1;
    input.addEventListener('keydown', (e) => {
        const items = results.querySelectorAll('.command-result-item');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelection(items);
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            items[selectedIndex]?.click();
        }
    });

    function updateSelection(items) {
        items.forEach((el, i) => {
            el.classList.toggle('selected', i === selectedIndex);
        });
        if (selectedIndex >= 0) {
            items[selectedIndex]?.scrollIntoView({ block: 'nearest' });
        }
    }
}

// ================================================================
// 9. CONTACT FORM (mailto)
// ================================================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector('textarea').value.trim();
        if (!name || !email || !message) {
            showToast('Please fill in all fields.', 'error');
            return;
        }
        const subject = encodeURIComponent('New contact from ' + name);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        window.location.href = `mailto:hello@arslanshah.com?subject=${subject}&body=${body}`;
        showToast('Email client opened!', 'success');
    });
}

// ================================================================
// 10. TOAST NOTIFICATIONS
// ================================================================

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('out');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ================================================================
// 11. COPY EMAIL
// ================================================================

function initCopyEmail() {
    // Find email link and add copy functionality
    const emailLink = document.querySelector('.contact-info a[href^="mailto"]');
    if (emailLink) {
        const email = emailLink.textContent.trim();
        const copyBtn = document.createElement('button');
        copyBtn.className = 'btn btn-outline';
        copyBtn.style.marginTop = '16px';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Email';
        copyBtn.addEventListener('click', () => {
            navigator.clipboard?.writeText(email).then(() => {
                showToast('Email copied to clipboard!', 'success');
            }).catch(() => {
                // Fallback
                const textarea = document.createElement('textarea');
                textarea.value = email;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                textarea.remove();
                showToast('Email copied!', 'success');
            });
        });
        emailLink.parentElement.parentElement.appendChild(copyBtn);
    }
}

// ================================================================
// 12. LOADING SCREEN
// ================================================================

function initLoader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loader').classList.add('hidden');
        }, 600);
    });
    // Fallback
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 3000);
}

// ================================================================
// 13. KEYBOARD SHORTCUTS
// ================================================================

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Escape closes mobile menu
        if (e.key === 'Escape') {
            const menu = document.getElementById('mobileMenu');
            if (menu.classList.contains('open')) {
                document.getElementById('menuToggle').click();
            }
        }
        // Ctrl+Shift+C to copy email (if email exists)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
            const email = document.querySelector('.contact-info a[href^="mailto"]')?.textContent.trim();
            if (email) {
                navigator.clipboard?.writeText(email).then(() => {
                    showToast('Email copied!', 'success');
                });
            }
        }
    });
}

// ================================================================
// 14. INIT
// ================================================================

function init() {
    renderNavigation();
    renderHeroStats();
    renderHeroDesc();
    renderAbout();
    renderExperience();
    renderSkills();
    renderProjectFilters();
    renderProjects();
    renderCaseStudies();
    renderTools();
    renderTestimonials();
    renderAchievements();
    renderServices();
    renderBlog();
    renderFAQ();
    renderContact();
    renderFooter();

    initTypewriter();
    initNav();
    initCursorGlow();
    initTheme();
    initCommandPalette();
    initContactForm();
    initCopyEmail();
    initLoader();
    initKeyboardShortcuts();

    setTimeout(initObservers, 100);

    // Expose showToast globally for other functions
    window.showToast = showToast;
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}