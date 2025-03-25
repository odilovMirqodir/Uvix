// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger")
  const mobileMenu = document.querySelector(".mobile-menu")

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll(".mobile-menu a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      mobileMenu.classList.remove("active")
    })
  })

  // Particles.js Configuration
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    })
  } else {
    console.warn("particlesJS is not defined. Make sure the particles.js library is included.")
  }

  // Testimonial Carousel
  const slides = document.querySelectorAll(".testimonial-slide")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentSlide = 0

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"))
    currentSlide = (n + slides.length) % slides.length
    slides[currentSlide].classList.add("active")
  }

  prevBtn.addEventListener("click", () => showSlide(currentSlide - 1))
  nextBtn.addEventListener("click", () => showSlide(currentSlide + 1))

  // Auto-advance slides every 5 seconds
  setInterval(() => showSlide(currentSlide + 1), 5000)

  // Work Filter
  const filterBtns = document.querySelectorAll(".filter-btn")
  const workItems = document.querySelectorAll(".work-item")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      btn.classList.add("active")

      // Get filter value
      const filterValue = btn.getAttribute("data-filter")

      // Filter work items
      workItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.style.display = "block"
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "scale(1)"
          }, 100)
        } else {
          item.style.opacity = "0"
          item.style.transform = "scale(0.8)"
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Scroll Animation
  function checkScroll() {
    const elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .about-image")

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("active")
        if (element.classList.contains("about-image")) {
          element.classList.add("animate")
        }
      }
    })
  }

  // Add animation classes to elements
  const serviceCards = document.querySelectorAll(".service-card")
  const portfolioItems = document.querySelectorAll(".portfolio-item")
  const partnerItems = document.querySelectorAll(".partner-item")
  const sectionTitles = document.querySelectorAll(".section-title")

  serviceCards.forEach((card, index) => {
    card.classList.add("fade-in")
    card.style.transitionDelay = `${index * 0.1}s`
  })

  portfolioItems.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add("slide-in-left")
    } else {
      item.classList.add("slide-in-right")
    }
    item.style.transitionDelay = `${index * 0.1}s`
  })

  const workItemsAnimation = document.querySelectorAll(".work-item")

  workItemsAnimation.forEach((item, index) => {
    item.classList.add("fade-in")
    item.style.transitionDelay = `${index * 0.1}s`
  })

  partnerItems.forEach((item, index) => {
    item.classList.add("fade-in")
    item.style.transitionDelay = `${index * 0.1}s`
  })

  sectionTitles.forEach((title) => {
    title.classList.add("fade-in")
  })

  // Check for animations on scroll
  window.addEventListener("scroll", checkScroll)

  // Initial check for animations
  checkScroll()

  // Form submission with animation
  const form = document.querySelector(".contact-form form")

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault()

      // Add submission animation
      const button = this.querySelector("button")
      button.innerHTML = "Sending..."

      // Simulate form submission
      setTimeout(() => {
        button.innerHTML = "Message Sent!"
        button.style.backgroundColor = "#27ae60"
        this.reset()

        // Reset button after 3 seconds
        setTimeout(() => {
          button.innerHTML = "Send Message"
          button.style.backgroundColor = ""
        }, 3000)
      }, 1500)
    })
  }

  // Button ripple effect
  const buttons = document.querySelectorAll(".cta-button")

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const ripple = document.createElement("span")
      ripple.style.position = "absolute"
      ripple.style.width = "1px"
      ripple.style.height = "1px"
      ripple.style.borderRadius = "50%"
      ripple.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
      ripple.style.transform = "scale(0)"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.style.animation = "ripple 0.6s linear"

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
})

