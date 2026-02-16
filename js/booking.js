
document.addEventListener('DOMContentLoaded', function() {
    
    const whoSelect = document.getElementById("whoSelect");
    const meField = document.getElementById("meField");
    const otherField = document.getElementById("otherField");
    const flightSelect = document.getElementById("flightSelect");
    const classSelect = document.getElementById("classSelect");
    const myRoblox = document.getElementById("myRoblox");
    const otherRoblox = document.getElementById("otherRoblox");
    const discordId = document.getElementById("discordId");
    const bookingForm = document.getElementById("bookingForm");
    const bookingResult = document.getElementById("bookingResult");

    
    whoSelect.addEventListener("change", () => {
        meField.classList.add("hidden");
        otherField.classList.add("hidden");

        
        if (whoSelect.value === "me") meField.classList.remove("hidden");
        if (whoSelect.value === "other") otherField.classList.remove("hidden");
    });

    
    bookingForm.addEventListener("submit", e => {
        e.preventDefault();
        console.log('form submitted');

        
        if (!flightSelect.value || !classSelect.value || !whoSelect.value) {
            alert("Please complete all required fields.");
            return;
        }

        let robloxUser = "";
        let discordUser = "N/A";

        
        if (whoSelect.value === "me") {
            if (!/^[a-zA-Z0-9_]{3,20}$/.test(myRoblox.value)) {
                alert("Invalid Roblox username.");
                return;
            }
            robloxUser = myRoblox.value;
        }

        if (whoSelect.value === "other") {
            // basic confirmation 
            if (!/^\d{17,20}$/.test(discordId.value)) {
                alert("Invalid Discord User ID.");
                return;
            }
            if (!/^[a-zA-Z0-9_]{3,20}$/.test(otherRoblox.value)) {
                alert("Invalid Roblox username.");
                return;
            }
            robloxUser = otherRoblox.value;
            discordUser = discordId.value;
        }

        // confirm
        const [route, aircraft] = flightSelect.value.split("|");
        const flightNumber = "BA" + Math.floor(1000 + Math.random() * 9000);
        const bookingCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        const departureTime = new Date().toLocaleTimeString();

        
        bookingResult.innerHTML = `
            <h3>Booking Confirmed</h3>
            <p><b>Route:</b> ${route}</p>
            <p><b>Aircraft:</b> ${aircraft}</p>
            <p><b>Departure:</b> ${departureTime}</p>
            <p><b>Cabin Class:</b> ${classSelect.value}</p>
            <p><b>Flight Number:</b> ${flightNumber}</p>
            <p><b>Booking Code:</b> ${bookingCode}</p>
        `;
        bookingResult.classList.remove("hidden");

        
            
        
    });
});
