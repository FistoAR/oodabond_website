gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".contact-hero",
    start: "top top",
    end: "+=100%", // Adjust to how long you want it pinned
    pin: true,
    pinSpacing: false, // prevents extra white space after pinning
    scrub: true
});

// Add smooth focus animations
const inputs = document.querySelectorAll('.form-input');
inputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function () {
        this.style.transform = 'scale(1)';
    });
});

// Add hover effect to contact items
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateX(5px)';
        this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateX(0)';
    });
});

// Responsive map height adjustment
function adjustMapHeight() {
    const mapContainer = document.querySelector('.map-container');
    if (window.innerWidth <= 480) {
        mapContainer.style.height = '200px';
    } else if (window.innerWidth <= 768) {
        mapContainer.style.height = '250px';
    } else {
        mapContainer.style.height = '300px';
    }
}

window.addEventListener('resize', adjustMapHeight);
adjustMapHeight(); 

$('#contactForm').on('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;


    fetch('https://oodabond.com/ooda_Email_send/Mailer.php', {
        method: 'POST',
        body: formData 
    })
    .then(async res => {
        const text = await res.text();
        console.log("Raw server response:", text);
        
        try {
            return JSON.parse(text);
        } catch {
            throw new Error("Invalid JSON: " + text);
        }
    })
    .then(response => {
        console.log("Parsed response:", response);
        
        if (response.status === "success") {
            alert('✅ Thank you for your message! We will get back to you soon.');
            this.reset();
        } else {
            alert('❌ Oops! Something went wrong: ' + response.message);
        }
    })
    .catch(err => {
        console.error("Fetch error:", err.message);
        alert('Failed to send message. Please try again later.\n\nDetails: ' + err.message);
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});