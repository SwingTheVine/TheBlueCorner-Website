// This scrolls and then focuses on an element with a specific class
function scrollToId(idName, event) {
  console.log(event);

  // If the user wants to activate the button/link...
  if(accessiblePress(event)) {

    var element = document.getElementById(idName); // Finds the first matching element
    scrollAndFocus(element); // Scrolls to, and focuses on the element
  }
}

// This focuses on an element (using the id) without scrolling the page
function focusToId(idName, event) {

  // If the user wants to activate the button/link...
  if(accessiblePress(event)) {

    var element = document.getElementById(idName); // Finds the first matching element
    focusOnElement(element); // Focuses on the element
  }
}

// This scrolls and then focuses on an element with a specific class
function scrollToClass(className, event) {
  
  // If the user wants to activate the button/link...
  if(accessiblePress(event)) {

    var element = document.querySelector('.' + className); // Finds the first matching element
    scrollAndFocus(element); // Scrolls to, and focuses on the element
  }
}

// This focuses on an element (using the class) without scrolling the page
function focusToClass(className, event) {
  
  // If the user wants to activate the button/link...
  if(accessiblePress(event)) {

    var element = document.querySelector('.' + className); // Finds the first matching element
    focusOnElement(element); // Focuses on the element
  }
}

// This scrolls and then focuses on an element with a specific tag
function scrollToTag(tagName, event) {
  
  // If the user wants to activate the button/link...
  if(accessiblePress(event)) {

    var element = document.querySelector(tagName); // Finds the first matching element
    scrollAndFocus(element); // Scrolls to, and focuses on the element
  }
}

// This focuses on an element (using the tag) without scrolling the page
function focusToTag(tagName, event) {
  
  // If the user wants to activate the button/link...
  if(accessiblePress(event)) {

    var element = document.querySelector(tagName); // Finds the first matching element
    focusOnElement(element); // Scrolls to, and focuses on the element
  }
}

// This scrolls and focuses on the element
function scrollAndFocus(element) {

  // If the element exists...
  if (element) {
    element.scrollIntoView({block: 'start', inline: 'nearest'}); // Scrolls into view
    
    focusOnElement(element); // Focuses on the element
    
    window.scrollBy(0, -124); // Scrolls down so the header is not obstructed by the navbar
  }
}

// Focuses on the element
function focusOnElement(element) {

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
}