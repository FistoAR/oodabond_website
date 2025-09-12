const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  navLinks.classList.toggle('active');

  // Change icon based on menu state
  const icon = this.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
    icon.style.color = "#01060D"
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    icon.style.color = "#01060D"
  }
});

// Close menu when clicking on a link (optional)
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', function () {
    if (window.innerWidth <= 991) {
      navLinks.classList.remove('active');
      mobileMenuToggle.querySelector('i').classList.remove('fa-times');
      mobileMenuToggle.querySelector('i').classList.add('fa-bars');
    }
  });
});


const productsLink = document.querySelector('.products-link');
const positionFixed = document.querySelector('.positoin-flxed');

let isOverLink = false;
let isOverMenu = false;
let hideTimeout = null;

function updateMenuVisibility() {
  if (isOverLink || isOverMenu) {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    positionFixed.classList.add('active');
  } else {
    hideTimeout = setTimeout(() => {
      positionFixed.classList.remove('active');
      hideTimeout = null;
    }, 150);
  }
}

let bool = true;
productsLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (bool) {
    isOverLink = true;
    updateMenuVisibility();
    bool = false;
  } else {
    isOverLink = false;
    updateMenuVisibility();
    bool = true
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
  });
  productsLink.classList.add('active');
});

// productsLink.addEventListener('mouseleave', () => {
//   isOverLink = false;
//   updateMenuVisibility();
// });

// positionFixed.addEventListener('mouseenter', () => {
//   isOverMenu = true;
//   updateMenuVisibility();
// });

// positionFixed.addEventListener('mouseleave', () => {
//   isOverMenu = false;
//   updateMenuVisibility();
// });

const gridItems = document.querySelectorAll('.grid-item-card');
const productImage = document.querySelector('.product-img-container img');

const imgSources = [
  '../nav/Product1.webp',
  '../nav/Product2.webp',
  '../nav/Product3.webp',
  '../nav/Product4.webp',
  '../nav/Product5.webp',
  '../nav/Product6.webp',
  '../nav/Product7.webp',
  '../nav/Product8.webp',
  '../nav/Product9.webp',
  '../nav/Product10.webp',
  '../nav/Product11.webp',
  '../nav/Product12.webp',
];

gridItems.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    if (!item.querySelector('img.select-icon')) {
      const img = document.createElement('img');
      img.src = '../nav/green_active.svg';
      img.alt = 'select icon';
      img.classList.add('select-icon');
      item.appendChild(img);
    }

    // Temporary hover image
    if (productImage && index < 12) {
      productImage.src = imgSources[index];
    }
  });

  item.addEventListener('mouseleave', () => {
    const icon = item.querySelector('img.select-icon');
    if (icon && !item.classList.contains('active')) {
      item.removeChild(icon);
    }

    gridItems.forEach((i, index) => {
      if (i.classList.contains('active')) {
        productImage.src = imgSources[index];
      }
    });

  });

  item.addEventListener('click', () => {
    gridItems.forEach(i => {
      i.classList.remove('active');
      const icon = i.querySelector('img.select-icon');
      if (icon) i.removeChild(icon);
    });

    item.classList.add('active');

    const img = document.createElement('img');
    img.src = '../nav/green_active.svg';
    img.alt = 'select icon';
    img.classList.add('select-icon');
    item.appendChild(img);

    if (productImage && index < 7) {
      productImage.src = imgSources[index];
    }
  });
});


// const navbar = document.getElementById('navbar');
// const stickyOffset = navbar.offsetTop;

// window.addEventListener('scroll', () => {
//   if (window.pageYOffset > stickyOffset) {
//     navbar.classList.add('fixed');
//   } else {
//     navbar.classList.remove('fixed');
//   }
// });

const demobtn = document.querySelector('.nav-button');

demobtn.addEventListener('click', () => {
  window.location.href = '../contact/index.html#contactSection';
});

const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  window.location.href = "../homepage";
});

(function () {
    // Create and inject CSS styles
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
                    /* Base floating button styles */
                    .btn-floating {
                        position: fixed;
                        right: 25px;
                        bottom: 25px;
                        overflow: hidden;
                        width: 75px;
                        height: 75px;
                        border-radius: 100px;
                        border: 0;
                        z-index: 9999;
                        color: white;
                        transition: 0.3s ease;
                        background: linear-gradient(65deg, #19cb47, #0078b7);
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0;
                        text-decoration: none;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                        transition: all .3s ease-in-out;
                    }

                    /* Hover effects */
                    .btn-floating:hover {
                        width: auto;
                        padding: 0 20px;
                        background: #ffffffff;
                        color: #03934d;
                    }

                    /* Icon styling */
                    .btn-floating .contact-icon {
                        width: 30px;
                        height: 30px;
                        fill: currentColor;
                        flex-shrink: 0;
                        
                        transition: 0.3s ease;
                    }

                    .btn-floating:hover .contact-icon {
                        margin-bottom: -3px;
                    }

                    /* Text span styling */
                    .btn-floating span {
                        font-size: 16px;
                        margin-left: 10px;
                        transition: 0.3s ease;
                        line-height: 1;
                        display: none;
                        white-space: nowrap;
                        font-weight: 500;
                        margin-top: 3px;
                    }

                    .btn-floating:hover span {
                        display: inline-block;
                    }

                    /* Focus styles for accessibility */
                    .btn-floating:focus {
                        outline: 3px solid #ffffffff;
                        outline-offset: 2px;
                    }

                    /* Active state */
                    .btn-floating:active {
                        transform: scale(0.98);
                    }

                    /* Mobile responsiveness */
                    @media (max-width: 768px) {
                        .btn-floating {
                            right: 20px;
                            bottom: 20px;
                            width: 50px;
                            height: 50px;
                        }
                        
                        .btn-floating .contact-icon {
                            width: 25px;
                            height: 25px;
                            
                        }
                        
                        .btn-floating:hover {
                            padding: 0 18px;
                        }
                        
                        .btn-floating span {
                            font-size: 14px;
                            margin-left: 8px;
                        }
                    }

                    @media (max-width: 480px) {
                        .btn-floating {
                            right: 15px;
                            bottom: 15px;
                            width: 42px;
                            height: 42px;
                        }
                        
                        .btn-floating .contact-icon {
                            width: 20px;
                            height: 20px;
                            
                        }
                        
                        .btn-floating:hover {
                            padding: 0 16px;
                        }
                        
                        .btn-floating span {
                            font-size: 9px;
                            margin-left: 6px;
                        }
                    }

                    @media (max-width: 320px) {
                        .btn-floating {
                            right: 12px;
                            bottom: 12px;
                            width: 40px;
                            height: 40px;
                        }
                        
                        .btn-floating .contact-icon {
                            width: 16px;
                            height: 16px;
                            
                        }
                        
                        .btn-floating:hover {
                            padding: 0 14px;
                        }
                        
                        .btn-floating span {
                            font-size: 9px;
                            margin-left: 5px;
                        }
                    }
                `;
        document.head.appendChild(style);
    }

    // Create the floating button HTML using template string
    function createButton() {
        const container = document.createElement('div');
        container.innerHTML = `
                    <a href="/contact/index.html#contactSection" class="btn-floating" aria-label="Contact us for technical support, application suggestions, or free samples demo">
                        <svg class="contact-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <span>Technical/Application Suggestion/Free samples Demo</span>
                    </a>
                `;
        return container;
    }

    // Add event listeners
    function addEventListeners(button) {
        // Click analytics (optional)
        button.addEventListener('click', function (e) {
            console.log('Contact button clicked');
        });

        // Keyboard accessibility
        button.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    function init() {
    // Inject styles
    injectStyles();

    // Create and add button to body
    const floatingButton = createButton();
    document.body.appendChild(floatingButton);

    // Add event listeners
    const buttonElement = floatingButton.querySelector('.btn-floating');
    addEventListeners(buttonElement);
}

function runInitBasedOnPage() {
    const isHomepage = location.pathname.endsWith('/homepage/index.html');

    if (isHomepage) {
        const preloader = document.querySelector('#video-preloader'); // Update selector if needed

        if (!preloader) {
            // No preloader found — run init immediately
            init();
            return;
        }

        const isHidden = () => getComputedStyle(preloader).display === 'none';

        if (isHidden()) {
            init(); // Already hidden
        } else {
            // Wait for preloader to be hidden
            const observer = new MutationObserver(() => {
                if (isHidden()) {
                    observer.disconnect();
                    init();
                }
            });

            observer.observe(preloader, {
                attributes: true,
                attributeFilter: ['style']
            });
        }
    } else {
        // Not the homepage — run init immediately
        init();
    }
}

// Wait for DOM to load before running any logic
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runInitBasedOnPage);
} else {
    runInitBasedOnPage();
}

})();