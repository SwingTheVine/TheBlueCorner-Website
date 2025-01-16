// This scrolls to an element with a specific class
function scrollToId(idName) {
  var element = document.getElementById(idName); // Finds the first matching element
  scrollAndFocus(element); // Scrolls to, and focuses on the element
}

// This scrolls to an element with a specific class
function scrollToClass(className) {
  var element = document.querySelector('.' + className); // Finds the first matching element
  scrollAndFocus(element); // Scrolls to, and focuses on the element
}

// This scrolls to an element with a specific tag
function scrollToTag(tagName) {
  var element = document.querySelector(tagName); // Finds the first matching element
  scrollAndFocus(element); // Scrolls to, and focuses on the element
}

// This scrolls and focuses on the element
function scrollAndFocus(element) {

  // If the element exists...
  if (element) {
    element.scrollIntoView({block: 'start', inline: 'nearest'}); // Scrolls into view
    
    // If the element is not <body>...
    if (element !== document.body) {

      // ...and if the element is focusable...
      if (element.tabIndex >= 0 || element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement || element instanceof HTMLAnchorElement) {
        element.focus(); // Focus on the element
      } else {
        // The element is NOT focusable

        // Make the element focusable and focus on it
        element.setAttribute('tabindex', '-1');
        element.focus();
      }
    }
    
    window.scrollBy(0, -124); // Scrolls down so the header is not obstructed by the navbar
  }
}