function accessiblePress(event) {

  // If the event exists (undefined when mouse-click),
  // ...AND the key press strict equals "Enter",
  // ...OR the key press strict equals " ",
  // ...OR the pointer type is "mouse",
  // ...OR the pointer type is "touch"...
  if(event && ((event.key === 'Enter') || (event.key === ' ') || (event.pointerType === 'mouse') || (event.pointerType === 'touch'))) {
    // ...keyboard/mouse navigation activated the button/link.
    // We want to focus on the element
    
    event.preventDefault(); // Prevent default handling of the press (i.e. scrolling)
    return true; // The user wants to activate the button/link
  }
  // ...else, keyboard navigation did NOT activate the button/link.
  // We want to NOT focus on the element so we don't trap the user

  return false; // The user does not want to activate the button/link
}

function triggerVideo(buttonId, event) {
  
  // If the user wants to pause/play the video...
  if(accessiblePress(event)) {

    const button = document.getElementById(buttonId); // Retrieves the button

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

    // Creates the <picture> child
    const picture = document.createElement('picture');
    button.appendChild(picture);

    // Creates the two <source> children
    const sourceLight = document.createElement('source');
    sourceLight.srcset = './assets/icons/FontAwesome_Circle-' + videoState + '_Light.svg';
    sourceLight.media = '(prefers-color-scheme: light), (prefers-color-scheme: no-preference)';
    const sourceDark = document.createElement('source');
    sourceDark.srcset = './assets/icons/FontAwesome_Circle-' + videoState + '_Dark.svg';
    sourceDark.media = '(prefers-color-scheme: dark)';
    picture.appendChild(sourceLight);
    picture.appendChild(sourceDark);

    // Creates the <img> pause icon child
    const pauseIcon = document.createElement('img');
    pauseIcon.className = 'video-button-image';
    pauseIcon.src = './assets/icons/FontAwesome_Circle-' + videoState +'_Light.svg';
    pauseIcon.alt = '';
    picture.appendChild(pauseIcon);
    
    // Creates <div> ARIA help child
    const buttonARIA = document.createElement('div');
    buttonARIA.id = button.getAttribute('aria-describedby'); // Id matches button ARIA "pointer"
    buttonARIA.className = 'screen-reader-only';
    buttonARIA.textContent = 'You can ' + videoState.toLowerCase() + ' the video using the "space" or "tab" keys.';
    buttonARIA.setAttribute('style', 'top: 51%; left: 50%;');
    button.appendChild(buttonARIA);
    
    // Updates the ARIA values
    button.setAttribute('aria-label', videoState + ' the video.');
  }
}