       // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });

        // Service Data with Font Awesome icons
        const serviceData = [
            {
                id: 'branding-logo',
                category: 'design',
                icon: '<i class="fas fa-palette text-purple-600 dark:text-purple-400"></i>',
                title: 'Branding & Logo Design',
                shortDescription: 'Crafting unique brand identities that resonate.',
                longDescription: 'We develop comprehensive brand strategies, memorable logos, and complete visual guidelines that define your presence and connect with your audience. Our approach ensures your brand truly stands out in a crowded market.',
                link: '#'
            },
            {
                id: 'social-media',
                category: 'marketing',
                icon: '<i class="fas fa-hashtag text-purple-600 dark:text-purple-400"></i>',
                title: 'Social Media Marketing',
                shortDescription: 'Engage, grow, and convert with strategic social campaigns.',
                longDescription: 'Our social media experts create dynamic content, manage campaigns, and analyze performance across platforms to build strong communities and drive measurable results for your business. From content calendars to paid ads, we cover it all.',
                link: '#'
            },
            {
                id: 'web-development',
                category: 'development',
                icon: '<i class="fas fa-code text-purple-600 dark:text-purple-400"></i>',
                title: 'Web Development',
                shortDescription: 'Building responsive, high-performance websites.',
                longDescription: 'From custom web applications to robust e-commerce platforms, we build fast, secure, and scalable websites tailored to your specific needs. We focus on cutting-edge technologies and seamless user experiences.',
                link: '#'
            },
            {
                id: 'seo-optimization',
                category: 'marketing',
                icon: '<i class="fas fa-search text-purple-600 dark:text-purple-400"></i>',
                title: 'SEO Optimization',
                shortDescription: 'Boost your visibility and rank higher in search results.',
                longDescription: 'Improve your organic search rankings and drive more qualified traffic with our expert SEO strategies. We cover everything from keyword research and on-page optimization to technical SEO and link building.',
                link: '#'
            },
            {
                id: 'graphic-design',
                category: 'design',
                icon: '<i class="fas fa-pencil-ruler text-purple-600 dark:text-purple-400"></i>',
                title: 'Graphic Design',
                shortDescription: 'Visually stunning designs for all your marketing needs.',
                longDescription: 'Our graphic designers create compelling visuals for brochures, presentations, advertisements, and digital assets that capture attention and communicate your message effectively. We bring your ideas to life with creativity and precision.',
                link: '#'
            },
            {
                id: 'ecommerce-solutions',
                category: 'development',
                icon: '<i class="fas fa-shopping-cart text-purple-600 dark:text-purple-400"></i>',
                title: 'E-commerce Solutions',
                shortDescription: 'Powerful online stores designed for sales success.',
                longDescription: 'We build secure, user-friendly, and high-converting e-commerce websites using platforms like Shopify, WooCommerce, and custom solutions. Our focus is on optimizing the shopping experience to maximize your revenue.',
                link: '#'
            },
            {
                id: 'content-creation',
                category: 'content',
                icon: '<i class="fas fa-pen-fancy text-purple-600 dark:text-purple-400"></i>',
                title: 'Content Creation',
                shortDescription: 'Engaging content that tells your brand\'s story.',
                longDescription: 'From blog posts and articles to website copy and case studies, we produce high-quality, SEO-friendly content that educates, entertains, and converts your audience. Let us craft words that resonate with your target market.',
                link: '#'
            },
            {
                id: 'motion-graphics',
                category: 'content',
                icon: '<i class="fas fa-film text-purple-600 dark:text-purple-400"></i>',
                title: 'Motion Graphics',
                shortDescription: 'Dynamic animations to captivate your audience.',
                longDescription: 'Bring your ideas to life with stunning motion graphics and animated videos. Perfect for explainers, advertisements, and social media, motion graphics are a powerful tool for visual storytelling and engagement.',
                link: '#'
            }
        ];

        // DOM Elements
        const servicesGrid = document.getElementById('services-grid');
        const filterButtons = document.querySelectorAll('.filter-button');
        const serviceModal = document.getElementById('service-modal');
        const modalCloseButton = document.getElementById('modal-close-button');
        const modalIcon = document.getElementById('modal-icon');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalLink = document.getElementById('modal-link');
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');

        // Render Services
        function renderServices(filterCategory = 'all') {
            servicesGrid.innerHTML = '';
            let delay = 0;

            serviceData.forEach(service => {
                if (filterCategory === 'all' || service.category === filterCategory) {
                    const card = document.createElement('div');
                    card.className = `service-card-container w-full h-full`;
                    card.dataset.category = service.category;
                    card.dataset.aos = "fade-up";
                    card.dataset.aosDelay = delay;

                    card.innerHTML = `
                        <div class="card p-6 rounded-xl shadow-lg flex flex-col h-full hover:shadow-xl transition-all duration-300 cursor-pointer" data-id="${service.id}">
                            <div class="text-5xl mb-4 flex items-center justify-center h-16">${service.icon}</div>
                            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${service.title}</h3>
                            <p class="text-gray-700 dark:text-gray-300 text-sm flex-grow mb-4">${service.shortDescription}</p>
                            <button class="more-info-button inline-block bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors duration-300 self-start">
                                More Info
                            </button>
                        </div>
                    `;
                    servicesGrid.appendChild(card);
                    delay += 100;
                }
            });
            AOS.refresh();
        }

        // Filter Buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderServices(button.dataset.category);
            });
        });

        // Modal Handling
        servicesGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const button = e.target.closest('.more-info-button');
            
            if (card && button) {
                const service = serviceData.find(s => s.id === card.dataset.id);
                if (service) {
                    modalIcon.innerHTML = service.icon;
                    modalTitle.textContent = service.title;
                    modalDescription.textContent = service.longDescription;
                    modalLink.href = service.link;
                    
                    serviceModal.classList.remove('hidden');
                    setTimeout(() => serviceModal.classList.add('open'), 10);
                }
            }
        });

        modalCloseButton.addEventListener('click', () => {
            serviceModal.classList.remove('open');
            setTimeout(() => serviceModal.classList.add('hidden'), 300);
        });

        serviceModal.addEventListener('click', (e) => {
            if (e.target === serviceModal) {
                serviceModal.classList.remove('open');
                setTimeout(() => serviceModal.classList.add('hidden'), 300);
            }
        });

        // Dark Mode Toggle (Fixed)
        function updateTheme() {
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } else {
                localStorage.theme = 'light';
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        }

        // Check initial theme
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        updateTheme();

        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            updateTheme();
        });

         
       
        // Initial render
        renderServices('all');
      
