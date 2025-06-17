  // --- Resume Download and Smooth Scroll Functionality ---

      // Event listener for the resume download button
      document.querySelector(".resume-btn").addEventListener("click", function() {
        window.open("Shashikant_Gautam_Immediate_Joiner.pdf", "_blank");
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Check if the browser supports smooth scrolling
                const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;
                
                if (supportsSmoothScroll) {
                    // Smooth scroll
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'  // Aligns the scroll to the start of the section
                    });
                } else {
                    // Fallback for older browsers without smooth scrolling support
                    targetElement.scrollIntoView({ block: 'start' });
                }
            }
        });
    });

    // --- Modal Functionality for Awards & Certificates ---

    // Get the modal element
    const modal = document.getElementById("modal");
    
    // Get the modal image and caption
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    
    // Get all images within the awards-certificates section
    const awardsCertificates = document.querySelectorAll(".certificate-item img");
    
    // Get the close button
    const closeBtn = document.querySelector(".close");
    
    // Function to open modal with clicked image
    awardsCertificates.forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.textContent = img.nextElementSibling.textContent;
        });
    });
    
    // Function to close modal when close button is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
    
    // Function to close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    
    // Optional: Close modal with the 'Esc' key for accessibility
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

    // --- Popup Window for Live View Button ---
    function openPopup() {
      const width = 800; // Width of the pop-up
      const height = 600; // Height of the pop-up
      const left = (window.innerWidth / 2) - (width / 2); // Centering horizontally
      const top = (window.innerHeight / 2) - (height / 2); // Centering vertically

      window.open('https://regex-query-tool.vercel.app/', 'popupWindow', `width=${width},height=${height},top=${top},left=${left},scrollbars=yes`);
    }

