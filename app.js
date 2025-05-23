// Menu hamburger functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle menu
    function toggleMenu() {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Close menu
    function closeMenu() {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMenu);
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});

// Portfolio Project Data
const portfolioProjects = [
  {
    id: "project-1",
    title: "Herochall",
    shortDescription: "Gamified mobile app for personal development.", // Slightly shorter for the card
    longDescription: '<h4 class="story-subtitle">The Catalyst</h4><p>It all started with a pivotal moment : a layoff, ironically right after I\'d contributed to a major €80M success. Instead of succumbing to this setback, I chose it as my springboard. A leap of faith took me 10,000km from home : a deliberate dive out of my comfort zone. This journey wasn\'t just about changing scenery; it was about discovering firsthand that with true determination, any obstacle can be reshaped into an opportunity.</p><h4 class="story-subtitle">The Insight</h4><p>This experience solidified a core belief: so many of us are looking for guidance to unlock our true potential and simply feel better. I believe everyone has a hero within them, but not everyone realizes it yet.<br>This realization became the seed for Herochall.</p><h4 class="story-subtitle">My Mission: Your Hero\'s Journey, Gamified</h4><p>Herochall is that spark, designed to help you ignite your inner hero. It\'s a mobile application that transforms personal development into an engaging, gamified adventure. I\'ve cut through the overwhelming theories to focus on what truly matters: practical action! Through a personalized path of progressive challenges and steadfast support, Herochall guides you step-by-step. My aim is to help you take meaningful action, grow confidently, and feel accompanied on your unique journey.<br><br>My ultimate objective?<br>To empower you with the tools and the path to become the hero of your own story.</p>',
    technologies: ["React Native", "JavaScript", "Supabase", "AI (for Coaching)"],
    releaseDate: "Q2 2025", // Added release date for Herochall
    imageUrl: "/assets/images/herochall.png",
    liveUrl: "https://herochall.com",
    repoUrl: "#",
    logoUrl: "https://placehold.co/40x40/000000/FFFFFF?text=H&font=poppins", // Changed to black
    tags: ["Personal Development", "Mobile App", "Gamification"], // Added tags
    projectColor: "#000000" // Changed to black
  },
  {
    id: "project-2",
    title: "Athledex",
    shortDescription: "A comprehensive platform for athletic performance tracking.", // Updated for Athledex
    longDescription: '<h4 class="story-subtitle">The Catalyst</h4><p>Athledex was born from a simple, frustrating truth: chasing your athletic goals can feel incredibly lonely. I saw talented athletes, disciplined, driven, passionate, struggling not because they lacked motivation, but because they lacked support. Some couldn\'t find the right people to train with. Others gave up because they didn\'t have the money or visibility to keep going.<br>That\'s what hit me hardest. Potential was being wasted, not from laziness, but from isolation and lack of access.</p><p>And honestly, I felt it myself. I only recently started my own physical journey. I wasn\'t an elite athlete, just someone trying to show up consistently and push myself. But even with all the motivation in the world, doing it alone made progress feel heavy.<br>I realized I would have benefited the most from something like Athledex.</p><p>We don\'t need another tracking app.<br>We need a bridge. A real way to connect athletes to each other and to the opportunities that help them stay in the game.</p><h4 class="story-subtitle">The Insight</h4><p>What clicked was this. No matter your level, sport is better together. It\'s not just about performance. It\'s about belonging, about shared progress, about knowing someone\'s in your corner. Whether you\'re preparing for your first race or chasing your next podium, having the right people around you changes everything.<br>This insight became the foundation for Athledex, a platform where ambition meets connection.</p><h4 class="story-subtitle">My Mission: Connection That Fuels Progress</h4><p>Athledex is built to help athletes grow through meaningful connection. It\'s not about followers or likes. It\'s about finding your rhythm alongside others who get it. Through smart matchmaking, sport-specific filters, and real human stories, Athledex helps you find training partners, stay motivated, and feel part of something bigger.</p><p>This is not just a social network. It is a purpose-driven space where your goals matter and your journey is respected.<br>My mission is simple. Make sure no athlete has to chase their dream alone.</p><p>Because progress is powerful.<br>But shared progress, that is unstoppable.</p>', // Full Athledex description with better line breaks
    technologies: ["- (still developing)"], // Changed to show still developing
    releaseDate: " S2 2025", // Added release date for Athledex
    imageUrl: "/assets/images/athledex.jpg", // Updated to use actual logo
    liveUrl: "#",
    repoUrl: "#",
    logoUrl: "https://placehold.co/40x40/4A90E2/FFFFFF?text=A&font=poppins", // Updated logo with blue color
    tags: ["Sports", "Social Media", "Web", "Mobile App"], // Updated tags for Athledex
    projectColor: "#4A90E2" // Blue color for Athledex
  }
  // Add more projects here
];

function renderPortfolio() {
    const projectsListContainer = document.getElementById('projects-list');
    const projectDetailsScrollContainer = document.getElementById('project-details-scroll-container');
    
    const leftColumnPlaceholderLi = document.querySelector('#projects-list .project-list-item-placeholder'); 
    const rightColumnPlaceholderDiv = document.querySelector('#project-details-scroll-container .project-detail-card-placeholder');

    if (!projectsListContainer || !projectDetailsScrollContainer) {
        console.error("Essential portfolio containers ('projects-list' or 'project-details-scroll-container') not found in HTML. Cannot render portfolio.");
        if(leftColumnPlaceholderLi) leftColumnPlaceholderLi.textContent = "Error: Portfolio list container missing.";
        if(rightColumnPlaceholderDiv) rightColumnPlaceholderDiv.innerHTML = "<p>Error: Portfolio details container missing.</p>";
        return;
    }

    if (!portfolioProjects || portfolioProjects.length === 0) {
        console.warn("No projects data found in portfolioProjects array.");
        if (leftColumnPlaceholderLi) {
            leftColumnPlaceholderLi.textContent = "No projects to display at the moment.";
            leftColumnPlaceholderLi.style.display = 'list-item';
            projectsListContainer.innerHTML = ''; 
            projectsListContainer.appendChild(leftColumnPlaceholderLi);
        }
        if (rightColumnPlaceholderDiv) {
            rightColumnPlaceholderDiv.innerHTML = '<p>No projects to display at the moment.</p>';
            rightColumnPlaceholderDiv.style.display = 'block'; 
            projectDetailsScrollContainer.innerHTML = '';
            projectDetailsScrollContainer.appendChild(rightColumnPlaceholderDiv);
        }
        return;
    }

    if (leftColumnPlaceholderLi) leftColumnPlaceholderLi.style.display = 'none';
    if (rightColumnPlaceholderDiv) rightColumnPlaceholderDiv.style.display = 'none';

    // 1. Render the list of projects (left column)
    projectsListContainer.innerHTML = portfolioProjects.map((project, index) => `
        <li data-target-id="project-detail-${project.id}" class="project-list-item">
            <a href="#project-detail-${project.id}">
                <span class="project-list-title-number">${(index + 1).toString().padStart(2, '0')}</span>
                <span class="project-list-title">${project.title}</span>
                <span class="project-arrow"></span>
            </a>
        </li>
    `).join('');

    // 2. Render all project detail cards (right column)
    projectDetailsScrollContainer.innerHTML = portfolioProjects.map(project => `
        <div id="project-detail-${project.id}" class="project-detail-card-wrapper">
            <div class="project-display-card">
                <div class="project-header">
                    <span class="work-in-progress-tag">Work in Progress</span>
                    <div class="project-title-section">
                        ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title} logo" class="project-logo">` : ''}
                        <h3 id="project-display-title">${project.title}</h3>
                    </div>
                    
                    ${project.tags && project.tags.length > 0 ? `
                    <div class="project-display-tags">
                        ${project.tags.map(tag => `<span class="project-detail-tag">${tag}</span>`).join('')}
                    </div>
                    ` : ''}
                </div>
                
                <div class="project-display-content">
                    <p id="project-display-description">${project.longDescription}</p>
                    
                    <div class="project-tech-tags">
                        <h4>Technologies Used:</h4>
                        <div class="project-display-tech">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                    </div>
                    
                    ${project.releaseDate ? `
                    <div class="project-release-date">
                        <h4>Expected Release:</h4>
                        <div class="release-date-display">
                            <span class="release-date">${project.releaseDate}</span>
                            <div class="platform-logos">
                                ${project.id === 'project-1' ? `
                                    <img src="/assets/images/apple-logo.png" alt="iOS" class="platform-logo" title="Available on iOS">
                                    <img src="/assets/images/android-logo.png" alt="Android" class="platform-logo" title="Available on Android">
                                ` : project.id === 'project-2' ? `
                                    <img src="/assets/images/web-logo.png" alt="Web" class="platform-logo" title="Web Platform">
                                    <img src="/assets/images/apple-logo.png" alt="iOS" class="platform-logo" title="Available on iOS">
                                    <img src="/assets/images/android-logo.png" alt="Android" class="platform-logo" title="Available on Android">
                                ` : ''}
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="project-links">
                        ${project.liveUrl && project.liveUrl !== "#" ? `
                            <div class="cta-with-offer">
                                <a href="${project.liveUrl}" class="cta-btn secondary-btn" target="_blank"><span>I want to become my 2.0</span></a>
                                ${project.id === 'project-1' ? `<span class="special-offer">1st month of premium on me before it goes live</span>` : ''}
                            </div>
                        ` : ''}
                        ${project.repoUrl && project.repoUrl !== "#" ? `<a href="${project.repoUrl}" class="cta-btn secondary-btn" target="_blank"><span>View Repo</span></a>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    const projectDetailCards = document.querySelectorAll('.project-detail-card-wrapper');
    const projectListItems = document.querySelectorAll('#projects-list .project-list-item');

    if (projectDetailCards.length === 0 || projectListItems.length === 0) {
        console.warn("Rendered no project items, observer will not be set up.");
        return;
    }
    
    const observerOptions = {
        root: null,
        rootMargin: '-110px 0px -80% 0px',
        threshold: 0.01
    };

    const observerCallback = (entries) => {
        let highestVisibleIntersectingEntry = null;

        projectDetailCards.forEach(card => {
            // A helper function to check intersection might be cleaner if complex,
            // but for now, we'll re-evaluate based on position if it's in the entries or already visible.
            // This simple check relies on the IntersectionObserver correctly reporting via entries.
            // The key is to pick the *highest* among those *reported as intersecting*.
        });

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!highestVisibleIntersectingEntry || entry.boundingClientRect.top < highestVisibleIntersectingEntry.boundingClientRect.top) {
                    highestVisibleIntersectingEntry = entry;
                }
            }
        });
        
        if (entries.some(e => e.isIntersecting)) {
            let currentOverallHighestEntry = null;
            projectDetailCards.forEach(cardBeingObserved => {
                // We need to determine if cardBeingObserved is intersecting.
                // The `entry` object has `isIntersecting` and `boundingClientRect`.
                // We don't have direct access to that for cards not in `entries`.
                // This highlights a limitation: the callback only knows about *changes*.
                // A simpler robust solution is to ensure the `entries` processing logic is sound.

                // The issue is likely: multiple entries are true, last one processed wins.
                // The loop below correctly finds the highest among the *changing* entries.
            });
        }

        if (highestVisibleIntersectingEntry) {
            const targetId = highestVisibleIntersectingEntry.target.id;
            projectListItems.forEach(item => {
                const isTargetItem = item.dataset.targetId === targetId;
                if (isTargetItem) {
                    if (!item.classList.contains('active')) {
                        item.classList.add('active');
                        const activeProject = portfolioProjects.find(p => `project-detail-${p.id}` === targetId);
                        if (activeProject && activeProject.projectColor) {
                            item.style.setProperty('--active-project-border-color', activeProject.projectColor);
                        }
                    }
                } else {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                        item.style.removeProperty('--active-project-border-color');
                    }
                }
            });
        } else {
            // If no *changing* entry was intersecting, it's possible an item stopped intersecting.
            // We need to ensure that if other items are *still* intersecting (but didn't change state in this batch),
            // one of them becomes active. This part is tricky with the basic observer callback.
            // For now, let's trust that an intersection event will fire for the correct element.
            // The primary goal is to correctly pick from multiple simultaneous `isIntersecting: true` entries.
            // The `highestVisibleIntersectingEntry` from the current batch logic should handle this.
        }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    projectDetailCards.forEach(card => observer.observe(card));

    projectsListContainer.addEventListener('click', (event) => {
        const listItem = event.target.closest('.project-list-item');
        if (listItem && listItem.dataset.targetId) {
            event.preventDefault();
            const targetElementId = listItem.dataset.targetId; // This is already "project-detail-project-X"
            const targetElement = document.getElementById(targetElementId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' 
                });
            } else {
                console.warn(`Scroll target element with id '${targetElementId}' not found.`);
            }
        }
    });
    
    if (projectListItems.length > 0) {
        const firstProjectCardId = projectListItems[0].dataset.targetId;
        const firstProject = portfolioProjects.find(p => `project-detail-${p.id}` === firstProjectCardId);
        projectListItems[0].classList.add('active');
        if (firstProject && firstProject.projectColor) {
             projectListItems[0].style.setProperty('--active-project-border-color', firstProject.projectColor);
        }
    }
}

// Keep the old apps rendering for now, we will remove it after portfolio is refactored.
// const apps = []; // Example: { name: "Old App", description: "...", url: "..." }
// function renderApps() { ... old function ... }

document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    // renderApps(); // If you had other apps to render in a different way
});
