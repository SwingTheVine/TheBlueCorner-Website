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
  var videoState = 'Play'; // Pause or Play

  // If the video is paused...
  if (video.paused) {
    video.play(); // Play the video
    videoState = 'Pause'; // Change video state
  } else {
    // ...the video is playing

    video.pause(); // Pause the video
  }

  // Kills all children
  button.innerHTML = '';

  // Creates <img> pause icon child
  const pauseIcon = document.createElement('img');
  pauseIcon.className = 'video-button-image';
  pauseIcon.src = './assets/icons/FontAwesome_Circle-' + videoState +'.svg';
  pauseIcon.alt = '';
  button.appendChild(pauseIcon);
  
  // Creates <div> ARIA help child
  const buttonARIA = document.createElement('div');
  buttonARIA.id = button.getAttribute('aria-describedby'); // Id matches button ARIA "pointer"
  buttonARIA.className = 'screen-reader-only';
  buttonARIA.textContent = 'You can ' + videoState.toLowerCase() + ' the video using the "space" or "tab" keys.';
  button.appendChild(buttonARIA);
  
  // Updates the ARIA values
  button.setAttribute('aria-label', videoState + ' the video.');
}