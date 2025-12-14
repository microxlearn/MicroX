/* ---------------------------
   PAGE FADE-IN
---------------------------- */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    const loader = document.getElementById("loader");
    if (loader) loader.classList.remove("show");
});

/* ===============================
   SAFE PAGE NAVIGATION (FIXED)
   DOES NOT BREAK BUTTONS
=============================== */

document.addEventListener("click", function (e) {

    const link = e.target.closest("a");
    if (!link) return;

    /* ALLOW NORMAL NAVIGATION FOR THESE */
    if (
        link.classList.contains("btn") ||        // HSE / FYUGP
        link.closest("#mxSideNav") ||            // hamburger menu
        link.href.includes("#") ||               // in-page links
        link.target                              // target=_blank
    ) {
        return;
    }

    e.preventDefault();

    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("show");

    document.body.classList.remove("loaded");

    const href = link.href;

    setTimeout(() => {
        window.location.href = href;
    }, 400);
});

/* ---------------------------
   GLASS RIPPLE BUTTON
---------------------------- */
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty("--x", (e.clientX - rect.left) + "px");
        btn.style.setProperty("--y", (e.clientY - rect.top) + "px");
    });
});

/* ---------------------------
   FLOATING TEXT / EQUATIONS
---------------------------- */

const equations = ["BCA", "COMMERCE", "SCIENCE", "HUMANITIES", "BBA", "BA", "BCom", "Σ", "θ"];
const equationElements = [];

function createEquation() {
    const eq = document.createElement("div");
    eq.className = "floating-equation";
    eq.innerText = equations[Math.floor(Math.random() * equations.length)];

    eq.style.left = Math.random() * 100 + "vw";
    eq.style.top = Math.random() * 100 + "vh";
    eq.style.fontSize = (Math.random() * 10 + 5) + "px";
    eq.style.opacity = Math.random() * 0.2 + 0.1;

    document.body.appendChild(eq);

    equationElements.push({
        el: eq,
        x: parseFloat(eq.style.left),
        y: parseFloat(eq.style.top),
        vx: (Math.random() - 0.5) * 0.10,
        vy: (Math.random() - 0.5) * 0.10
    });
}

for (let i = 0; i < 40; i++) createEquation();

function animateEquations() {
    equationElements.forEach(eq => {
        eq.x += eq.vx;
        eq.y += eq.vy;

        if (eq.x < 0 || eq.x > 100) eq.vx *= -1;
        if (eq.y < 0 || eq.y > 100) eq.vy *= -1;

        eq.el.style.left = eq.x + "vw";
        eq.el.style.top = eq.y + "vh";
    });

    requestAnimationFrame(animateEquations);
}

animateEquations();

/* ===============================
   MICROX HAMBURGER NAV TOGGLE
=============================== */

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("mxHamburger");
    const sideNav = document.getElementById("mxSideNav");
    const overlay = document.getElementById("mxOverlay");

    if (!hamburger || !sideNav || !overlay) return;

    hamburger.addEventListener("click", () => {
        const open = sideNav.classList.contains("active");

        sideNav.classList.toggle("active", !open);
        overlay.classList.toggle("active", !open);
        hamburger.classList.toggle("active", !open);
    });

    overlay.addEventListener("click", () => {
        sideNav.classList.remove("active");
        overlay.classList.remove("active");
        hamburger.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {

    const oldNav = document.querySelector("nav");
    if (!oldNav) return;

    /* Extract logo HTML */
    const logoHTML = oldNav.querySelector(".nav-left")?.innerHTML || "";

    /* Build new navigation */
    const newNavHTML = `
        <nav class="mx-nav">
            <div class="mx-nav-left">
                ${logoHTML}
            </div>

            <div class="mx-nav-right">
                <div class="mx-hamburger" id="mxHamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>

        <div class="mx-side-nav" id="mxSideNav">
            <a href="about-us.html">About Us</a>
            <a href="contact-us.html">Contact Us</a>
        </div>

        <div class="mx-overlay" id="mxOverlay"></div>
    `;

    oldNav.insertAdjacentHTML("beforebegin", newNavHTML);
    oldNav.remove();

    /* Hamburger logic */
    const hamburger = document.getElementById("mxHamburger");
    const sideNav = document.getElementById("mxSideNav");
    const overlay = document.getElementById("mxOverlay");

    if (!hamburger || !sideNav || !overlay) return;

    hamburger.addEventListener("click", () => {
        const open = sideNav.classList.contains("active");
        sideNav.classList.toggle("active", !open);
        overlay.classList.toggle("active", !open);
        hamburger.classList.toggle("active", !open);
    });

    overlay.addEventListener("click", () => {
        sideNav.classList.remove("active");
        overlay.classList.remove("active");
        hamburger.classList.remove("active");
    });
});
