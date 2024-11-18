$(document).ready(function () {
  $("#homePage").show();

  $(".nav-link").click(function (event) {
    event.preventDefault();

    $("section").hide();

    var targetSection = $(this).attr("href");

    $(targetSection).show();
    switch (targetSection) {
      case "#CustomerManage":
        $(".sectionName").text("Customer Manage");
        break;
      case "#ItemManage":
        $(".sectionName").text("Item Manage");
        break;
      case "#OrderManage":
        $(".sectionName").text("Order Manage");
        break;
      default:
        $(".sectionName").text("Home Page");
    }
  });
});

{
  let currentSlide = 0;
  const slideInterval = 3000;
  let autoSlide;

  function showSlide(index) {
    const $slides = $(".carousel-item");
    const totalSlides = $slides.length;

    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    const offset = -currentSlide * 100;
    $(".carousel-inner").css("transform", "translateX(" + offset + "%)");

    $slides.each(function (i) {
      $(this).toggleClass("active", i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, slideInterval);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  showSlide(currentSlide);
  startAutoSlide();

  $(".carousel").mouseenter(stopAutoSlide).mouseleave(startAutoSlide);

  $(".prev").click(function () {
    prevSlide();
  });

  $(".next").click(function () {
    nextSlide();
  });
}
// Responsive JavaScript Handlers

document.addEventListener("DOMContentLoaded", function () {
  // Responsive Navigation Handler
  function handleResponsiveNavigation() {
    const screenWidth = window.innerWidth;
    const header = document.querySelector("header");
    const navList = header.querySelector("ul");

    if (screenWidth <= 425) {
      // Mobile view: Add hamburger menu
      if (!document.querySelector(".hamburger")) {
        const hamburger = document.createElement("div");
        hamburger.classList.add("hamburger");
        hamburger.innerHTML = "&#9776;"; // Hamburger menu icon
        hamburger.style.color = "white";
        hamburger.style.fontSize = "24px";
        hamburger.style.cursor = "pointer";
        header.insertBefore(hamburger, navList);

        hamburger.addEventListener("click", function () {
          navList.classList.toggle("mobile-menu-active");
        });

        navList.style.display = "none";
        hamburger.addEventListener("click", function () {
          navList.style.display =
            navList.style.display === "none" ? "flex" : "none";
          navList.style.flexDirection = "column";
          navList.style.position = "absolute";
          navList.style.top = "8vh";
          navList.style.left = "0";
          navList.style.width = "100%";
          navList.style.backgroundColor = "black";
          navList.style.zIndex = "1000";
        });
      }
    } else {
      // Desktop view: Remove hamburger menu
      const hamburger = document.querySelector(".hamburger");
      if (hamburger) {
        hamburger.remove();
      }
      navList.style.display = "flex";
      navList.classList.remove("mobile-menu-active");
    }
  }

  // Responsive Carousel Handler
  function handleResponsiveCarousel() {
    const carousel = document.querySelector(".carousel-inner");
    const carouselItems = carousel.querySelectorAll(".carousel-item");
    const screenWidth = window.innerWidth;

    carouselItems.forEach((item) => {
      if (screenWidth <= 425) {
        item.style.minWidth = "100%";
      } else {
        item.style.minWidth = "100%";
      }
    });
  }

  // Responsive Table Handler
  function handleResponsiveTables() {
    const screenWidth = window.innerWidth;
    const tables = document.querySelectorAll(
      "#CustomerManage table, #ItemManage table"
    );

    tables.forEach((table) => {
      if (screenWidth <= 425) {
        table.style.fontSize = "12px";
        table.style.width = "100%";
      } else {
        table.style.fontSize = "16px";
        table.style.width = "auto";
      }
    });
  }

  // Initial setup and window resize event
  handleResponsiveNavigation();
  handleResponsiveCarousel();
  handleResponsiveTables();

  window.addEventListener("resize", function () {
    handleResponsiveNavigation();
    handleResponsiveCarousel();
    handleResponsiveTables();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  function handleOrderManageResponsiveness() {
    const screenWidth = window.innerWidth;
    const orderSections = document.querySelectorAll(
      "#OrderManage .includeDetails, #OrderManage .ItemSelect, #OrderManage .TotalCal"
    );
    const orderInputs = document.querySelectorAll(
      "#OrderManage input, #OrderManage select"
    );
    const orderTables = document.querySelector(".mainTable");

    if (screenWidth <= 768) {
      orderSections.forEach((section) => {
        section.style.width = "90%";
        section.style.margin = "10px auto";
      });

      orderInputs.forEach((input) => {
        input.style.width = "100%";
      });

      if (orderTables) {
        orderTables.style.width = "90%";
        orderTables.style.margin = "0 auto";
      }
    } else {
      orderSections.forEach((section) => {
        section.style.width = "";
        section.style.margin = "";
      });

      orderInputs.forEach((input) => {
        input.style.width = "";
      });

      if (orderTables) {
        orderTables.style.width = "";
        orderTables.style.margin = "";
      }
    }
  }

  handleOrderManageResponsiveness();
  window.addEventListener("resize", handleOrderManageResponsiveness);
});
document.addEventListener("DOMContentLoaded", function () {
  function handleHeaderResponsiveness() {
    const screenWidth = window.innerWidth;
    const header = document.querySelector("header");
    const navList = header.querySelector("ul");
    const systemName = header.querySelector(".systemName");

    if (screenWidth <= 768) {
      // Create hamburger menu for mobile
      if (!document.querySelector(".hamburger")) {
        const hamburger = document.createElement("div");
        hamburger.classList.add("hamburger");
        hamburger.innerHTML = "&#9776;";
        hamburger.style.color = "white";
        hamburger.style.fontSize = "24px";
        hamburger.style.cursor = "pointer";

        hamburger.addEventListener("click", function () {
          navList.style.display =
            navList.style.display === "none" ? "flex" : "none";
          navList.style.flexDirection = "column";
          navList.style.width = "100%";
          navList.style.position = "absolute";
          navList.style.top = "100%";
          navList.style.left = "0";
          navList.style.backgroundColor = "#000000";
          navList.style.zIndex = "1000";
        });

        header.insertBefore(hamburger, navList);
        navList.style.display = "none";
      }
    } else {
      // Remove hamburger for desktop
      const hamburger = document.querySelector(".hamburger");
      if (hamburger) {
        hamburger.remove();
      }
      navList.style.display = "flex";
    }
  }

  function handleCarouselResponsiveness() {
    const carousel = document.querySelector(".carousel-inner");
    const carouselItems = carousel.querySelectorAll(".carousel-item");
    const screenWidth = window.innerWidth;

    carouselItems.forEach((item) => {
      if (screenWidth <= 768) {
        item.style.height = "50vh";
      } else {
        item.style.height = "100%";
      }
    });
  }

  // Initial setup
  handleHeaderResponsiveness();
  handleCarouselResponsiveness();

  // Resize event listener
  window.addEventListener("resize", function () {
    handleHeaderResponsiveness();
    handleCarouselResponsiveness();
  });
});
