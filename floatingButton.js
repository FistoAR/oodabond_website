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
                        width: 50px;
                        height: 50px;
                        border-radius: 100px;
                        border: 0;
                        z-index: 9999;
                        color: white;
                        transition: 0.3s ease;
                        background-color: #03934d;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        padding: 0;
                        text-decoration: none;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    }

                    /* Hover effects */
                    .btn-floating:hover {
                        width: auto;
                        padding: 0 20px;
                        background-color: #87ceeb;
                        color: #03934d;
                    }

                    /* Icon styling */
                    .btn-floating .contact-icon {
                        width: 24px;
                        height: 24px;
                        fill: currentColor;
                        flex-shrink: 0;
                        margin-left: 13px;
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
                    }

                    .btn-floating:hover span {
                        display: inline-block;
                    }

                    /* Focus styles for accessibility */
                    .btn-floating:focus {
                        outline: 3px solid #87ceeb;
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
                            width: 45px;
                            height: 45px;
                        }
                        
                        .btn-floating .contact-icon {
                            width: 20px;
                            height: 20px;
                            margin-left: 12.5px;
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
                            width: 18px;
                            height: 18px;
                            margin-left: 12px;
                        }
                        
                        .btn-floating:hover {
                            padding: 0 16px;
                        }
                        
                        .btn-floating span {
                            font-size: 13px;
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
                            margin-left: 12px;
                        }
                        
                        .btn-floating:hover {
                            padding: 0 14px;
                        }
                        
                        .btn-floating span {
                            font-size: 12px;
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
                    <a href="/contact.html" class="btn-floating" aria-label="Contact us for technical support, application suggestions, or free samples demo">
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

    // Initialize the floating button
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Inject styles
        injectStyles();

        // Create and add button to body
        const floatingButton = createButton();
        document.body.appendChild(floatingButton);

        // Add event listeners
        const buttonElement = floatingButton.querySelector('.btn-floating');
        addEventListeners(buttonElement);
    }

    // Start initialization
    init();
})();