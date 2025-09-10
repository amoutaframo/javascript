// Load preferences from localStorage
function loadPreferences() {
  const prefs = JSON.parse(localStorage.getItem("hotelPreferences"));
  if (prefs) {
    document.getElementById("destination").value = prefs.destination || "";
    document.getElementById("checkin").value = prefs.checkin || "";
    document.getElementById("guests").value = prefs.guests || 1;
    document.getElementById("room").value = prefs.room || "Standard";
  }
}

// Save preferences to localStorage
function savePreferences() {
  const prefs = {
    destination: document.getElementById("destination").value,
    checkin: document.getElementById("checkin").value,
    guests: document.getElementById("guests").value,
    room: document.getElementById("room").value,
  };

  localStorage.setItem("hotelPreferences", JSON.stringify(prefs));
  document.getElementById("message").textContent = "Preferences saved!";
  setTimeout(() => (document.getElementById("message").textContent = ""), 2000);
}

// Initialize form with saved preferences on page load
window.onload = loadPreferences;
