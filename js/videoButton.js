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

    // Kills all children
    button.innerHTML = '';

    // Creates a new child
    var pauseIcon = document.createElement('img');
    pauseIcon.className = 'video-button-image';
    pauseIcon.src = './assets/icons/FontAwesome_Circle-Pause.svg';
    pauseIcon.setAttribute('aria-label', ''); // Sets img as decorative
    button.appendChild(pauseIcon);
    
    // Updates the ARIA values
    button.setAttribute('aria-label', "Pause the video.");
    button.setAttribute('aria-details', "You can pause the video using the 'space' or 'tab' keys.");
  } else {
    // ...the video is playing

    video.pause(); // Pause the video
    
    // Kills all children
    button.innerHTML = '';

    // Creates a new child
    var playIcon = document.createElement('img');
    playIcon.className = 'video-button-image';
    playIcon.src = './assets/icons/FontAwesome_Circle-Play.svg';
    playIcon.setAttribute('aria-label', ''); // Sets img as decorative
    button.appendChild(playIcon);
    
    // Updates the ARIA values
    button.setAttribute('aria-label', "Play the video.");
    button.setAttribute('aria-details', "You can play the video using the 'space' or 'tab' keys.");
  }
}