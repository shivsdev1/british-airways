// HIGHLIGHTS CAROUSEL STUFF

let highlights = JSON.parse(localStorage.getItem("highlights")) || [];

const highlightsCarousel = document.getElementById("highlightsCarousel");
const highlightsList = document.getElementById("highlightsList");
let currentSlide = 0; // which slide we on

function saveHighlights() {
    localStorage.setItem("highlights", JSON.stringify(highlights));
    renderHighlights();
    renderAdminHighlights();
}

function renderHighlights() {
    // if no highlights show placeholder
    if (highlights.length === 0) {
        highlightsCarousel.innerHTML = `
            <div class="highlight-item active">
                <img src="https://via.placeholder.com/800x400/0b1f3a/ffffff?text=No+Highlights+Yet" alt="Highlight">
                <p>No highlights added yet. Admins can add highlights from the Admin Panel.</p>
            </div>
        `;
        return;
    }

    highlightsCarousel.innerHTML = "";
    highlights.forEach((h, i) => {
        // add active class to current slide for animation
        highlightsCarousel.innerHTML += `
            <div class="highlight-item ${i === currentSlide ? 'active' : ''}">
                <img src="${h.image}" alt="Flight Highlight">
                <p>${h.text}</p>
            </div>
        `;
    });
}

function renderAdminHighlights() {
    highlightsList.innerHTML = "";
    highlights.forEach((h, i) => {
        highlightsList.innerHTML += `
            <div class="highlight-admin-item">
                <div style="display: flex; align-items: center; flex: 1;">
                    <img src="${h.image}" alt="Highlight">
                    <span>${h.text.substring(0, 50)}...</span>
                </div>
                <button onclick="deleteHighlight(${i})">Delete</button>
            </div>
        `;
    });
}

function deleteHighlight(index) {
    highlights.splice(index, 1);
    if (currentSlide >= highlights.length) currentSlide = 0;
    saveHighlights();
}

document.getElementById("addHighlightBtn").addEventListener("click", () => {
    const image = document.getElementById("highlightImageUrl").value;
    const text = document.getElementById("highlightText").value;

    if (!image || !text) {
        alert("Please fill all fields!");
        return;
    }

    highlights.push({ image, text });
    saveHighlights();

    // clear inputs
    document.getElementById("highlightImageUrl").value = "";
    document.getElementById("highlightText").value = "";
});

// carousel navigation buttons
document.getElementById("prevBtn").addEventListener("click", () => {
    if (highlights.length === 0) return;
    // go backwards but wrap around
    currentSlide = (currentSlide - 1 + highlights.length) % highlights.length;
    renderHighlights();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (highlights.length === 0) return;
    // go forwards and wrap around
    currentSlide = (currentSlide + 1) % highlights.length;
    renderHighlights();
});

renderHighlights();
renderAdminHighlights();
