/* ---------------------------
   PAGE FADE-IN
---------------------------- */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
/* =====================================
   MICROX ROTATING LOADER ON PAGE CLICK
===================================== */

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {

        if (!link.href.includes("#") && !link.target) {

            e.preventDefault();

            const loader = document.getElementById("loader");
            loader.classList.add("show");

            setTimeout(() => {
                window.location = link.href;
            }, 700);
        }
    });
});



/* ---------------------------
   SMOOTH PAGE TRANSITION
---------------------------- */
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        if (!link.href.includes("#") && !link.target) {
            e.preventDefault();
            document.body.classList.remove("loaded");
            setTimeout(() => window.location = link.href, 250);
        }
    });
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
   FLOATING MATH EQUATIONS (70% speed)
---------------------------- */

const equations = ["BCA", "COMMERCE", "SCIENCE", "HUMANITIES", "BBA", "BA", "Bcom", "Σ", "θ"];

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

        /* ↓↓↓ SLOWER SPEED HERE ↓↓↓ */
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
