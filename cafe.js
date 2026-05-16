document.addEventListener("DOMContentLoaded", () => {
    // --- 1. ORDER BUTTONS TOGGLE ---
    const orderButtons = document.querySelectorAll(".card-button,.main-btn");

    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.innerText === "Order now") {
                button.innerText = "Added ✓";
                button.style.backgroundColor = "black";
                button.style.color = "white";
            } else {
                button.innerText = "Order now";
                button.style.backgroundColor = ""; // Resets to original CSS
                button.style.color = "";
            }
        });
    });
 
  



    // --- 4. SUBSCRIPTION POPUP ---
    const subscribeSection = document.querySelector(".subscribe");
    const subscribeBtn = subscribeSection.querySelector("button");
    const subscribeInput = subscribeSection.querySelector("input");

    subscribeBtn.addEventListener("click", () => {
        if (subscribeInput.value.includes("@")) {
            alert("Thank you for subscribing! Your 15% discount code has been sent to your email.");
            subscribeInput.value = ""; // Clear input
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // --- 5. SMOOTH SCROLL FOR NAV LINKS ---
    // This looks for links like <a href="#footer"> and scrolls smoothly
    const links = document.querySelectorAll('.nav-item a, .footer-links a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Only scroll if it's an internal link (starts with #)
            if (targetId.startsWith("#") && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    
                    // Close mobile menu after clicking
                    navItems.forEach(item => item.style.display = "none");
                }
            }
        });
    });
});const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {

    if(navList.style.display === "flex"){
        navList.style.display = "none";
    }

    else{
        navList.style.display = "flex";
    }

});

const button = document.querySelector(".search-icon");
const form = document.querySelector(".search-box");

button.addEventListener("click", () => {

    if(form.style.display === "block"){

        form.style.display = "none";

    }

    else{

        form.style.display = "block";

    }

});
const log=document.getElementById("login");
const form1 = document.querySelector(".log-box");
log.addEventListener("click", () => {

    if(form1.style.display === "block"){

        form1.style.display = "none";

    }

    else{

        form1.style.display = "block";

    }

});