document.addEventListener("DOMContentLoaded", () => {

    // ===== ORDER BUTTONS =====
    const orderButtons = document.querySelectorAll(".card-button, .main-btn");
    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.innerText === "Order now") {
                button.innerText = "Added ✓";
                button.style.backgroundColor = "black";
                button.style.color = "white";
            } else {
                button.innerText = "Order now";
                button.style.backgroundColor = "";
                button.style.color = "";
            }
        });
    });

    // ===== HAMBURGER MENU =====
    const menuBtn = document.querySelector(".menu-btn");
    const navList = document.querySelector(".nav-list");

    menuBtn.addEventListener("click", () => {
        navList.classList.toggle("open");
    });

    // ===== SEARCH =====
    const searchIcon = document.querySelector(".search-icon");
    const searchBox = document.querySelector(".search-box");
    const logBox = document.querySelector(".log-box");

    searchIcon.addEventListener("click", () => {
        searchBox.classList.toggle("active");
        logBox.classList.remove("active");
    });

    // ===== LOGIN =====
    const loginBtn = document.getElementById("login");

    loginBtn.addEventListener("click", () => {
        logBox.classList.toggle("active");
        searchBox.classList.remove("active");
    });

    // ===== SUBSCRIBE =====
    const subscribeBtn = document.getElementById("subscribe-btn");
    const subscribeInput = document.getElementById("subscribe-email");

    subscribeBtn.addEventListener("click", () => {
        if (subscribeInput.value.includes("@")) {
            alert("Thank you for subscribing! Your 15% discount code has been sent to your email.");
            subscribeInput.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });
document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-bar")) {
        navList.classList.remove("open");
        searchBox.classList.remove("active");
        logBox.classList.remove("active");
    }
});
    // ===== SMOOTH SCROLL  and  CLOSE MENU =====
    const links = document.querySelectorAll('.nav-item a, .footer-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith("#") && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    navList.classList.remove("open");
                }
            }
        });
    });

});
