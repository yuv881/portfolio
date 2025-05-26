// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;
let cursorAngle = 0;
let cursorScale = 1;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Calculate angle for rotation effect
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    cursorAngle = Math.atan2(dy, dx) * 180 / Math.PI;
});

// Smooth cursor animation
function animateCursor() {
    // Calculate distance between current position and target position
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    // Update cursor position with easing
    cursorX += dx * 0.2;
    cursorY += dy * 0.2;
    
    // Update follower position with more easing
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    // Apply positions with rotation
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) rotate(${cursorAngle}deg) scale(${cursorScale})`;
    cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px) rotate(${cursorAngle}deg) scale(${cursorScale})`;
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Add hover effect to cursor
document.querySelectorAll('a, button, .project-card, .skill, .info-item, input, textarea').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
        cursorScale = 1.5;
    });

    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
        cursorScale = 1;
    });
});

// Add click effect
document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
    cursorFollower.classList.add('click');
    cursorScale = 0.5;
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
    cursorFollower.classList.remove('click');
    cursorScale = cursor.classList.contains('active') ? 1.5 : 1;
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove background based on scroll position
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Form validation and animation
const form = document.querySelector('.contact-form');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });

    // Add validation styles
    input.addEventListener('input', () => {
        if (input.value) {
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
        }
    });
});

// Form submission with animation
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Add loading state
    const submitButton = form.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const originalText = buttonText.textContent;
    const icon = submitButton.querySelector('i');

    submitButton.disabled = true;
    buttonText.textContent = 'Sending...';
    icon.classList.remove('fa-paper-plane');
    icon.classList.add('fa-spinner', 'fa-spin');

    try {
        // Simulate form submission (replace with actual form submission)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Success state
        buttonText.textContent = 'Message Sent!';
        icon.classList.remove('fa-spinner', 'fa-spin');
        icon.classList.add('fa-check');
        submitButton.style.background = '#4CAF50';
        
        // Reset form
        form.reset();
        inputs.forEach(input => {
            input.parentElement.classList.remove('focused');
            input.classList.remove('valid');
        });

        // Reset button after 3 seconds
        setTimeout(() => {
            buttonText.textContent = originalText;
            icon.classList.remove('fa-check');
            icon.classList.add('fa-paper-plane');
            submitButton.style.background = '';
            submitButton.disabled = false;
        }, 3000);
    } catch (error) {
        // Error state
        buttonText.textContent = 'Error! Try Again';
        icon.classList.remove('fa-spinner', 'fa-spin');
        icon.classList.add('fa-exclamation-circle');
        submitButton.style.background = '#f44336';

        // Reset button after 3 seconds
        setTimeout(() => {
            buttonText.textContent = originalText;
            icon.classList.remove('fa-exclamation-circle');
            icon.classList.add('fa-paper-plane');
            submitButton.style.background = '';
            submitButton.disabled = false;
        }, 3000);
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in
document.querySelectorAll('.about-content, .project-card, .contact-form, .skill, .timeline-item, .info-item, .flip-in').forEach(el => {
    observer.observe(el);
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 247, 255, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// Add parallax effect to hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Add typing effect to subtitle
const subtitle = document.querySelector('.subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Start typing effect when page loads
window.addEventListener('load', () => {
    typeWriter();
    
    // Animate skill progress bars
    document.querySelectorAll('.skill-progress').forEach(progress => {
        progress.style.width = progress.style.width;
    });
});

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-up, .zoom-in, .slide-up, .rotate-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class with a slight delay for better visual effect
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, 100);
                
                // If element has skill progress, animate it
                const skillProgress = entry.target.querySelector('.skill-progress');
                if (skillProgress) {
                    const width = skillProgress.getAttribute('data-progress');
                    skillProgress.style.setProperty('--progress-width', width + '%');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Add hover animations to elements
const addHoverAnimations = () => {
    // Add hover-lift to buttons and cards
    document.querySelectorAll('.cta-button, .project-card, .skill').forEach(el => {
        el.classList.add('hover-lift');
    });

    // Add hover-scale to images
    document.querySelectorAll('.project-image img, .profile-image img').forEach(el => {
        el.classList.add('hover-scale');
    });

    // Add hover-glow to interactive elements
    document.querySelectorAll('.nav-link, .social-link').forEach(el => {
        el.classList.add('hover-glow');
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    addHoverAnimations();
});

// Observe elements with animation classes
document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-up, .zoom-in, .slide-up, .rotate-in, .section-animate').forEach(element => {
    observer.observe(element);
});

// Animate skill bars on scroll
const skillElements = document.querySelectorAll('.skill');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.3 });
skillElements.forEach(skill => skillObserver.observe(skill));

// Project card modal interactivity
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

const projectDetails = [
    {
        title: "Amazon Clone",
        status: "In progress",
        tech: "HTML, CSS",
        desc: "Designing a responsive ecommerce interface replicating Amazon's layout and user experience."
    },
    {
        title: "Netflix Clone",
        status: "In progress",
        tech: "HTML, CSS",
        desc: "Building a mobile-friendly Netflix interface clone with focus on seamless navigation and design fidelity."
    },
    {
        title: "Shifra AI",
        status: "Completed",
        tech: "Python",
        desc: "Engineered a Python-based voice assistant with speech recognition."
    }
];

projectCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
        modal.classList.add('active');
        modalBody.innerHTML = `
            <h3>${projectDetails[idx].title} <span class="status ${projectDetails[idx].status === 'Completed' ? 'completed' : 'in-progress'}">${projectDetails[idx].status}</span></h3>
            <p><strong>Tech used:</strong> ${projectDetails[idx].tech}</p>
            <p>${projectDetails[idx].desc}</p>
        `;
    });
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') card.click();
    });
});
closeModal.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

// Contact form shake on error
// const form = document.querySelector('.contact-form'); // Removed redundant declaration
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    this.querySelectorAll('input, textarea').forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('form-error');
            valid = false;
        } else {
            input.classList.remove('form-error');
        }
    });
    if (!valid) return;
    // Simulate success
    this.reset();
    alert('Message sent!');
});

// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.2 });
timelineItems.forEach(item => timelineObserver.observe(item));