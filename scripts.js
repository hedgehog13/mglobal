document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll with fixed header adjustment
    const headerOffset = document.querySelector('.navbar').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetPosition = targetElement.offsetTop - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    // mobile menu 
   
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const mobileNavLinks = document.querySelector(".nav-links.mobile");
  
    hamburger.addEventListener("click",  (event) => {
      // Toggle the mobile menu (desktop menu remains unaffected)
      if (mobileNavLinks) {
        mobileNavLinks.classList.toggle("open");
      } else {
        console.error("Mobile menu element (.nav-links.mobile) not found.");
      }
      event.stopPropagation(); 
    });
    document.addEventListener("click", (event) => {
        if (
          mobileNavLinks &&
          mobileNavLinks.classList.contains("open") && // Only act if the menu is open
          !mobileNavLinks.contains(event.target) && // Click is outside the menu
          !hamburger.contains(event.target) // Click is outside the hamburger
        ) {
          mobileNavLinks.classList.remove("open");
        }
      });
     // const mobileLinks = document.querySelector('.mobile-nav-links');
      const anchor = mobileNavLinks.querySelectorAll('a'); // Assuming your links are <a> tags inside mobileNavLinks

      anchor.forEach(link => {
        link.addEventListener('click', () => {
          mobileNavLinks.classList.remove('open');
        });
      });

      window.addEventListener("click", function (e) {
        if (e.target.classList.contains("modal")) {
          e.target.style.display = "none";
        }
      });
      // Add event listeners to open modals
document.getElementById("privacyLink").addEventListener("click", function (e) {
  e.preventDefault();
  openModal("privacyModal");
});

document.getElementById("termsLink").addEventListener("click", function (e) {
  e.preventDefault();
  openModal("termsModal");
});


const popup = document.getElementById("privacy-popup");
const closeBtn = document.getElementById("close-popup");

 // Check if the user has already seen the popup
 if (!localStorage.getItem("privacyAccepted")) {
  setTimeout(() => {
      popup.style.display = "block"; // Show popup after 2 seconds
  }, 2000);
}


// Close the popup and store the visit in localStorage
closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    localStorage.setItem("privacyAccepted", new Date().toISOString()); // Save visit date
});

      
});
function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

// Function to close modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
