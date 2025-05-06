document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  const loadingPercent = document.getElementById("loading-percent");

  // Check if the loading screen has already been shown
  if (localStorage.getItem("loadingScreenShown")) {
    // Skip the loading screen and show the main content directly
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
    return;
  }

  // Simulate loading progress
  let progress = 0;
  const loadingInterval = setInterval(() => {
    progress += 5; // Increment progress by 5%
    loadingPercent.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(loadingInterval); // Stop the interval when loading is complete
      loadingScreen.style.display = "none"; // Hide the loading screen
      mainContent.style.display = "block"; // Show the main content

      // Save to localStorage to prevent the loading screen from showing again
      localStorage.setItem("loadingScreenShown", "true");
    }
  }, 100); // Update every 100ms
});

function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
}

