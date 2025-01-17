// This triggers whenever the user scrolls
window.addEventListener('scroll', function() {
  var sidebar = document.getElementById('sidebar'); // Retrieves the sidebar
  var sidebarHeight = window.getComputedStyle(sidebar).height; // Retrieves the sidebar height
  var contentHeight = window.getComputedStyle(document.getElementById('content-main')).height; // Retrieves the content height
  
  // If the bottom of the sidebar is above the bottom of the content...
  if (this.window.scrollY < parseFloat(contentHeight) - parseFloat(sidebarHeight)) {
    sidebar.style.marginTop = (window.scrollY + 100) + 'px'; // Updates the sidebar Y position so it appears to stay on the same spot on the screen
  }
});

