document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle")
  const headerNav = document.querySelector(".header-nav")
  const header = document.querySelector(".header")
  const heroBackground = document.querySelector(".hero-background")

  menuToggle.addEventListener("click", () => {
    headerNav.classList.toggle("show")
  })

  // Add active class to current page
  const currentLocation = location.href
  const menuItems = document.querySelectorAll(".nav-list a")
  menuItems.forEach((link) => {
    if (link.href === currentLocation) {
      link.classList.add("active")
    }
  })

  // Scroll effect for header
  let lastScrollTop = 0
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
      header.style.transform = "translateY(-100%)"
    } else {
      header.style.transform = "translateY(0)"
    }
    lastScrollTop = scrollTop
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-fade-in-up")
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementBottom = element.getBoundingClientRect().bottom
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add("animated")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Initial check on page load

  // Hero background image changer
  const backgroundImages = ["url('herobackground.jpg')", "url('herobackground1.jpg')", "url('herobackground2.jpg')"]
  let currentImageIndex = 0

  function changeBackgroundImage() {
    heroBackground.style.opacity = "0"
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % backgroundImages.length
      heroBackground.style.backgroundImage = backgroundImages[currentImageIndex]
      heroBackground.style.opacity = "1"
    }, 1000)
  }

  // Set initial background image
  heroBackground.style.backgroundImage = backgroundImages[currentImageIndex]
  heroBackground.style.opacity = "1"

  // Change background image every 5 seconds
  setInterval(changeBackgroundImage, 5000)

  // Mobile menu toggle
  const mobileMenu = document.querySelector(".mobile-menu")

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation()
    mobileMenu.classList.toggle("show")
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".header") && !event.target.closest(".mobile-menu")) {
      mobileMenu.classList.remove("show")
    }
  })

  // Close mobile menu when clicking a menu item
  const mobileMenuItems = document.querySelectorAll(".mobile-menu a")
  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("show")
    })
  })
})

