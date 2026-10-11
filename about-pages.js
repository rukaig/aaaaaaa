const aboutPages = {
    history: {
        title: "EAPIHS History",
        body: `
            <h2 class="site-section-title">A School Rooted in Community</h2>
            <div class="site-prose">
                <p>Emilia Ambalada Poblete Integrated High School was established in 2009 and serves learners in Mary Ann Village, Barangay V, Silang, Cavite.</p>
                <p>Today, EAPIHS continues its work as a public school community committed to learning, growth, and service.</p>
            </div>`
    },
    "vision-mission": {
        title: "Vision, Mission, Quality Policy and Strategic Areas",
        body: `
            <h2 class="site-section-title">Our Direction</h2>
            <div class="site-card-grid">
                <article class="site-info-card"><h3>Vision</h3><p>A learner-centered school where every student can grow with confidence, character, and purpose.</p></article>
                <article class="site-info-card"><h3>Mission</h3><p>To provide inclusive, meaningful learning experiences that help learners contribute positively to their communities.</p></article>
                <article class="site-info-card"><h3>Quality Policy</h3><p>We work to improve teaching and school services through collaboration, accountability, and care for every learner.</p></article>
                <article class="site-info-card"><h3>Strategic Areas</h3><p>Learner achievement, a safe and inclusive environment, educator growth, and strong community partnerships.</p></article>
            </div>`
    },
    "organizational-chart": {
        title: "Organizational Chart",
        body: `
            <h2 class="site-section-title">How We Work Together</h2>
            <div class="site-org-chart" aria-label="EAPIHS organizational structure">
                <div class="site-org-node"><strong>School Leadership</strong><span>Principal IV Gina Marie Pinza</span></div>
                <div class="site-org-branches">
                    <div class="site-org-node"><strong>Teaching Personnel</strong><span>Learning and instruction</span></div>
                    <div class="site-org-node"><strong>Administrative Support</strong><span>School operations</span></div>
                    <div class="site-org-node"><strong>Learners and Families</strong><span>School community</span></div>
                </div>
            </div>`
    },
    campus: {
        title: "Campus",
        body: `
            <h2 class="site-section-title">Visit EAPIHS</h2>
            <div class="site-prose"><p><strong>Emilia Ambalada Poblete Integrated High School</strong></p><p>Mary Ann Village, Brgy. V, Silang, Cavite</p></div>`
    },
    "principal-message": {
        title: "Principal's Message",
        body: `
            <h2 class="site-section-title">A Message to Our Community</h2>
            <div class="site-prose">
                <p>At EAPIHS, we are committed to helping every learner grow through meaningful learning, a caring school community, and partnership with families.</p>
                <p>Together, we can build knowledge, confidence, and strong values for the future.</p>
                <p><strong>Gina Marie Pinza</strong><br>Principal IV</p>
            </div>`
    },
    milestones: {
        title: "Institutional Milestones",
        body: `
            <h2 class="site-section-title">A Growing School Community</h2>
            <ol class="site-timeline"><li><strong>2009 | EAPIHS established</strong>Emilia Ambalada Poblete Integrated High School begins serving its community in Silang, Cavite.</li></ol>`
    },
    "board-of-regents": {
        title: "Board of Regents",
        body: `
            <h2 class="site-section-title">EAPIHS Leadership</h2>
            <article class="site-profile">
                <div class="site-profile-portrait"><img src="gina-principal.png" alt="Gina Marie Pinza, Principal IV of EAPIHS"></div>
                <div><p class="site-profile-index">01 / EAPIHS</p><h2 class="site-profile-name">Gina Marie Pinza</h2><p class="site-profile-role">Principal IV | EAPIHS</p><p class="site-prose">School leadership for Emilia Ambalada Poblete Integrated High School.</p></div>
            </article>`
    },
    "school-officials": {
        title: "School Officials",
        body: `
            <h2 class="site-section-title">People of EAPIHS</h2>
            <div class="site-directory-grid"><article class="site-info-card"><h3>Gina Marie Pinza</h3><p>Principal IV</p></article></div>`
    },
    directory: {
        title: "EAPIHS Directory",
        body: `
            <h2 class="site-section-title">School Information</h2>
            <div class="site-directory-grid">
                <article class="site-info-card"><h3>School Office</h3><p>Emilia Ambalada Poblete Integrated High School<br>Mary Ann Village, Brgy. V, Silang, Cavite</p></article>
                <article class="site-info-card"><h3>School Leadership</h3><p>Gina Marie Pinza<br>Principal IV</p></article>
            </div>`
    }
};

const menuItems = [
    ["EAPIHS History", "history.html"],
    ["Vision, Mission, Quality Policy, Strategic Areas", "vision-mission.html"],
    ["Organizational Chart", "organizational-chart.html"],
    ["Campus", "campus.html"],
    ["Principal's Message", "principal-message.html"],
    ["Institutional Milestones", "milestones.html"],
    ["Board of Regents", "board-of-regents.html"],
    ["School Officials", "school-officials.html"],
    ["EAPIHS Directory", "directory.html"]
];

const pageKey = document.body.dataset.aboutPage;
const currentPage = aboutPages[pageKey] || aboutPages.history;
const menuMarkup = menuItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");

document.title = `${currentPage.title} | Emilia Ambalada Poblete Integrated High School`;
document.querySelector("#site-shell").innerHTML = `
    <header>
        <div class="site-utility"><div class="site-utility-inner"><a href="eap.html">GOVPH</a></div></div>
        <div class="site-masthead"><div class="site-masthead-inner">
            <a href="eap.html" aria-label="EAPIHS home"><img class="site-crest" src="aldous.jpg" alt=""></a>
            <a class="site-brand" href="eap.html">Emilia Ambalada Poblete Integrated High School<small>Mary Ann Village, Brgy. V, Silang, Cavite</small></a>
            <time class="site-time" id="site-time"></time>
        </div></div>
        <nav class="site-navigation" aria-label="Main navigation"><div class="site-nav-inner">
            <a class="site-nav-link" href="eap.html">Home</a>
            <div class="site-nav-dropdown" id="site-about-dropdown">
                <button class="site-nav-trigger" id="site-about-trigger" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="site-about-menu">About <span class="site-chevron" aria-hidden="true"></span></button>
                <div class="site-about-menu" id="site-about-menu" aria-label="About EAPIHS">${menuMarkup}</div>
            </div>
            <a class="site-nav-link" href="eap.html">Academics</a>
            <a class="site-nav-link" href="eap.html">Admissions</a>
            <a class="site-nav-link" href="eap.html">Registrar</a>
            <a class="site-nav-link" href="eap.html">Students</a>
            <a class="site-nav-link" href="eap.html">Services</a>
            <a class="site-nav-link" href="eap.html">Research</a>
            <a class="site-nav-link" href="eap.html">Linkages</a>
            <a class="site-nav-link" href="eap.html">Alumni</a>
        </div></nav>
    </header>
    <section class="site-page-hero"><div class="site-page-hero-inner"><p>About EAPIHS</p><h1>${currentPage.title}</h1></div></section>
    <main class="site-main">${currentPage.body}</main>
    <footer class="site-footer"><div class="site-footer-inner"><p>Emilia Ambalada Poblete Integrated High School</p><p>Mary Ann Village, Brgy. V, Silang, Cavite</p></div></footer>
    <p class="site-sr-only" id="site-navigation-status" aria-live="polite"></p>`;

const dropdown = document.querySelector("#site-about-dropdown");
const trigger = document.querySelector("#site-about-trigger");
let closeTimer;

function setMenuOpen(isOpen) {
    window.clearTimeout(closeTimer);
    dropdown.classList.toggle("is-open", isOpen);
    trigger.setAttribute("aria-expanded", String(isOpen));
}

trigger.addEventListener("click", () => {
    setMenuOpen(trigger.getAttribute("aria-expanded") !== "true");
});

dropdown.addEventListener("pointerenter", () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        setMenuOpen(true);
    }
});

dropdown.addEventListener("pointerleave", () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        closeTimer = window.setTimeout(() => {
            if (!dropdown.contains(document.activeElement)) setMenuOpen(false);
        }, 140);
    }
});

dropdown.addEventListener("focusout", (event) => {
    if (!dropdown.contains(event.relatedTarget)) setMenuOpen(false);
});

document.addEventListener("pointerdown", (event) => {
    if (!dropdown.contains(event.target)) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && trigger.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        trigger.focus();
    }
});

function updateSiteTime() {
    document.querySelector("#site-time").textContent = new Intl.DateTimeFormat("en-PH", {
        timeZone: "Asia/Manila",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    }).format(new Date());
}

updateSiteTime();
window.setInterval(updateSiteTime, 60000);
