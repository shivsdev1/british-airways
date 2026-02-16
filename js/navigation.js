
document.addEventListener('DOMContentLoaded', function () {
    
    const WORKER = "https://ba-discord-auth.shivankcool2376543.workers.dev/";
    fetch(`${WORKER}/auth/status`, {
        credentials: "include"
    })
    .then(res => res.json())
    .then(data => {
        if (!data.loggedIn) {
            window.location.href = `${WORKER}/auth/login`;
            return;
        }
        
        if (data.isAdmin) {
            document.getElementById("adminToggle").classList.remove("hidden");
        }
        })
        .catch(err => {
            console.error("Auth check failed", err);
        });
    const highlightsBtn = document.getElementById("highlightsToggle");
    const highlightsSection = document.getElementById("highlightsSection"); 
    const aboutBtn = document.getElementById("aboutToggle");
    const servicesBtn = document.getElementById("servicesToggle"), staffBtn = document.getElementById("staffToggle");
    const homeBtn = document.getElementById("homeToggle");
    const bookFlightBtn = document.getElementById("bookFlightToggle");

    const aboutSection = document.getElementById("aboutSection");
    const servicesSection = document.getElementById("servicesSection"), staffSection = document.getElementById("staffSection");
    const bookingSection = document.getElementById("bookingSection");
    var heroSection = document.getElementById("home");
    const featuresSection = document.getElementById("features");

    let aboutDropdownItem = document.getElementById("aboutDropdownItem");
    const servicesDropdownItem = document.getElementById("servicesDropdownItem");
    let staffDropdownItem = document.getElementById("staffDropdownItem");

    const aboutDropdown = document.getElementById("aboutDropdown"), servicesDropdown = document.getElementById("servicesDropdown");
    const staffDropdown = document.getElementById("staffDropdown");
    const adminBtn = document.getElementById("adminToggle");
    let adminSection = document.getElementById("adminSection");
    const navToghgle = document.getElementById("navToggle"); 
    var navLinks = document.querySelector(".nav-links");

    
    function hideHero() {
        heroSection.classList.add("hidden");
    }
    
    const showHero = () => {
        heroSection.classList.remove("hidden");
    }

    function closeAllSections() {
        
        aboutSection.classList.remove("open");
        servicesSection.classList.remove("open"); staffSection.classList.remove("open");
        bookingSection.classList.remove("open");
        aboutDropdownItem.classList.remove("open");
        servicesDropdownItem.classList.remove("open");
        staffDropdownItem.classList.remove("open"); adminSection.classList.remove("open");
        highlightsSection.classList.remove("open");
    }

    
    navToghgle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    
    highlightsBtn.addEventListener("click", function(e) {
        e.preventDefault();
        closeAllSections();
        hideHero(); featuresSection.classList.add("hidden");
        highlightsSection.classList.add("open");
        setTimeout(function() {
            highlightsSection.scrollIntoView({ behavior: "smooth" })
        }, 120);
    });

    
    aboutBtn.addEventListener("click", e => {
        e.preventDefault();
        aboutDropdownItem.classList.toggle("open");
        servicesDropdownItem.classList.remove("open"); staffDropdownItem.classList.remove("open");
    });

    servicesBtn.addEventListener("click", function(e) {
        e.preventDefault();
        servicesDropdownItem.classList.toggle("open");
        aboutDropdownItem.classList.remove("open");
        staffDropdownItem.classList.remove("open");
    });

    staffBtn.addEventListener("click", e => {
        e.preventDefault(); staffDropdownItem.classList.toggle("open");
        aboutDropdownItem.classList.remove("open");
        servicesDropdownItem.classList.remove("open");
    });

    // BOOK FLIGHT BUTTON
    bookFlightBtn.addEventListener("click", function(e) {
        e.preventDefault();
        closeAllSections(); hideHero();
        featuresSection.classList.add("hidden");
        bookingSection.classList.add("open");
        setTimeout(() => bookingSection.scrollIntoView({ behavior: "smooth" }), 120);
    });

    
    homeBtn.addEventListener("click", e => {
        e.preventDefault();
        closeAllSections();
        featuresSection.classList.remove("hidden");
        showHero();
        heroSection.scrollIntoView({ behavior: "smooth" });
    });

    
    document.addEventListener("click", function(e) {
        if (!aboutDropdownItem.contains(e.target)) aboutDropdownItem.classList.remove("open");
        if (!servicesDropdownItem.contains(e.target)) servicesDropdownItem.classList.remove("open");
        if (!staffDropdownItem.contains(e.target)) { staffDropdownItem.classList.remove("open"); }
    });

    // ABOUT SECTION LINKS -
    aboutDropdown.querySelectorAll('a[data-section]').forEach(function(link) {
        link.addEventListener('click', e => {
            e.preventDefault(); closeAllSections();
            hideHero();
            featuresSection.classList.add('hidden');
            aboutSection.classList.add('open');
            
            document.querySelectorAll('.about-content').forEach(c => c.classList.add('hidden'));
            
            const section = e.target.getAttribute('data-section');
            
            if (section === 'summary') { document.getElementById('summaryContent').classList.remove('hidden'); }
            if (section === 'history') { document.getElementById('historyContent').classList.remove('hidden'); }
            
            aboutDropdownItem.classList.remove('open');
            setTimeout(() => aboutSection.scrollIntoView({ behavior: 'smooth' }), 120);
        });
    });

    
    servicesDropdown.querySelectorAll('a[data-service]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            closeAllSections(); hideHero();
            featuresSection.classList.add('hidden'); servicesSection.classList.add('open');
            
            document.querySelectorAll('.service-content').forEach(function(c) { c.classList.add('hidden'); });
            
            const service = e.target.getAttribute('data-service');
            
            if (service === 'experience') { document.getElementById('experienceContent').classList.remove('hidden'); }
            if (service === 'classes') { document.getElementById('classesContent').classList.remove('hidden'); }
            if (service === 'crew') { document.getElementById('crewContent').classList.remove('hidden'); }
            if (service === 'community') { document.getElementById('communityContent').classList.remove('hidden'); }
            if (service === 'executive') { document.getElementById('executiveContent').classList.remove('hidden'); }
            if (service === 'professional') {
                document.getElementById('professionalContent').classList.remove('hidden');
            }
                
            
            servicesDropdownItem.classList.remove('open');
            setTimeout(() => servicesSection.scrollIntoView({ behavior: 'smooth' }), 120);
        });
    });

    
    staffDropdown.querySelectorAll('a[data-staff]').forEach(function(link) {
        link.addEventListener('click', e => {
            e.preventDefault();
            closeAllSections();
            hideHero(); featuresSection.classList.add('hidden');
            staffSection.classList.add('open');
            
            document.querySelectorAll('.staff-content').forEach(c => { c.classList.add('hidden') });
                
            const staff = e.target.getAttribute('data-staff');
            if (staff === 'senior') { document.getElementById('seniorContent').classList.remove('hidden') }
            if (staff === 'board') { document.getElementById('boardContent').classList.remove('hidden') }
            if (staff === 'moderation') { document.getElementById('moderationContent').classList.remove('hidden'); }
            
            staffDropdownItem.classList.remove('open');
            setTimeout(function() { staffSection.scrollIntoView({ behavior: 'smooth' }) }, 120);
        });
    });

    
    // adminBtn.addEventListener("click", async e => {
    //     e.preventDefault();
    //     const res = await fetch(`${WORKER}/auth/status`, {
    //         credentials: "include"
    //     });

    //     const data = await res.json();
    //     if (!data.loggedIn) {
    //         window.location.href = `${WORKER}/auth/login`;
    //         return;
    //     }
    //     if (!data.isAdmin) {
    //         alert("Access denied");

    //         return;
    //     }
    //     closeAllSections(); hideHero();
    //     hideHero();
    //     featuresSection.classList.add("hidden");
    //     adminSection.classList.add("open");
    //     adminSection.scrollIntoView({ behavior: "smooth" });
    // });

});