// Nav link 
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const links = document.querySelector(".nav-links");

openButton.addEventListener("click", () => {
  openButton.classList.add("hidden");
  openButton.classList.remove("show");

  closeButton.classList.add("show");
  closeButton.classList.remove("hidden");

  links.classList.add("mobile-links");
});

closeButton.addEventListener("click", () => {
  closeButton.classList.add("hidden");
  closeButton.classList.remove("show");

  openButton.classList.add("show");
  openButton.classList.remove("hidden");

  links.classList.remove("mobile-links");
});

// Carousel section (Add check if carousel exists)
const carousel = document.getElementById("carousel");
if (carousel) {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const dots = document.querySelectorAll(".dot");
  const reviewCards = document.querySelectorAll(".review-card");
  let currentIndex = 1; // Start with the second card
  const totalReviews = reviewCards.length;

  function updateCarousel() {
    const carouselWidth = carousel.clientWidth; // Get the width of the carousel
    const cardWidth = carouselWidth / totalReviews; // Calculate the width of each card
    const offset =
      -currentIndex * cardWidth + (carouselWidth / 2 - cardWidth / 2); // Center the active card
    carousel.style.transform = `translateX(${offset}px)`;

    // Update the active and inactive classes for the review cards
    reviewCards.forEach((card, index) => {
      if (index === currentIndex) {
        card.classList.remove("inactive"); // Show active card
      } else {
        card.classList.add("inactive"); // Hide inactive cards
      }
    });

    // Update the dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + totalReviews) % totalReviews; // Move to the previous review
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalReviews; // Move to the next review
    updateCarousel();
  });

  // Initialize the carousel on load
  updateCarousel();
}

// FAQ section (This will run independently of the carousel)
let currentOpenFaq = null;

function toggleAnswer(id) {
  var faqItem = document.getElementById(id);
  var answer = faqItem.querySelector('.answer');
  var icon = faqItem.querySelector('.faq-icon');

  // Close any other open FAQ item
  if (currentOpenFaq && currentOpenFaq !== faqItem) {
    var openAnswer = currentOpenFaq.querySelector('.answer');
    var openIcon = currentOpenFaq.querySelector('.faq-icon');
    openAnswer.style.display = "none";
    openIcon.textContent = "+";
  }

  // Toggle the clicked FAQ answer
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    icon.textContent = "-";
    currentOpenFaq = faqItem;
  } else {
    answer.style.display = "none";
    icon.textContent = "+";
    currentOpenFaq = null;
  }
}

// Initialize all FAQ items to be closed by default
document.addEventListener("DOMContentLoaded", function() {
  var allAnswers = document.querySelectorAll('.answer');
  var allIcons = document.querySelectorAll('.faq-icon');

  allAnswers.forEach(function(answer) {
    answer.style.display = "none";
  });

  allIcons.forEach(function(icon) {
    icon.textContent = "+";
  });
});

// Adding the event listener for the "Continue Reading" link
document.querySelectorAll('.continue-reading').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      const additionalContent = this.nextElementSibling; // Get the next sibling element (the additional content)
      
      // Toggle the display of the additional content
      if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
          additionalContent.style.display = 'block'; // Show the content
      } else {
          additionalContent.style.display = 'none'; // Hide the content
      }
  });
});


// modal
// Open modal when clicking on an element with data-target attribute
document.querySelectorAll('[data-target]').forEach(trigger => {
  trigger.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(trigger.dataset.target).classList.add('active'); 
  });
});
// Close modal when clicking the close button or outside the modal
document.addEventListener('click', e => {
  const modalWrapper = e.target.closest('.modal_wrapper');

  if (modalWrapper && (e.target.matches('.close-modal') || e.target === modalWrapper)) {
      modalWrapper.classList.remove('active');
  }
});

// Get all checkboxes
const checkboxes = document.querySelectorAll('.boxes input[type="checkbox"]');
// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false; // Uncheck other checkboxes
                }
            });
        }
    });
});
