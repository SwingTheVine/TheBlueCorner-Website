var videoButtons = document.querySelectorAll('.video-button');

videoButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents default handling of the click
    triggerButton(button);
  })

  button.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default handling of the press (i.e. scrolling)
      triggerButton(button);
    }
  })
})

function triggerButton(button) {

  // Retrieves the video based on the button's "aria-controls" value
  // (which must match the video's ID)
  const videoId = button.getAttribute('aria-controls');
  const video = document.getElementById(videoId);

  // If the video is paused...
  if (video.paused) {
    video.play(); // Play the video
    button.textContent = "⏸"; // Override the icon
    button.setAttribute('aria-label', "Pause the video using the 'space' or 'tab' keys."); // Update the ARIA label
  } else {
    // ...the video is playing

    video.pause(); // Pause the video
    button.textContent = "▶"; // Override the icon
    button.setAttribute('aria-label', "Play the video using the 'space' or 'tab' keys."); // Update the ARIA label
  }
}