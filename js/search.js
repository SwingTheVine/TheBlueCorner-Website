// Retrieve the URI
const url_URI = window.location.search;

// Removes the leading "?" and makes an array of all URI keys and their values
const uriKeys_URI = url_URI.substring(1).split('&');

// Declares a null object array to store the URI keys
const uriKeys_Array = {};

// Lambda to store each key in the key object array
uriKeys_URI.forEach(uriKey => {
  const [key, value] = uriKey.split('=');
  uriKeys_Array[key] = decodeURIComponent(value || "");
});

const searchQuery = uriKeys_Array['q']; // The user's search query as a String

// If the search query does NOT equal null...
if (searchQuery != '') {

  // Retrieve and store the search bar
  const searchBar = document.getElementById('search-bar');

  // Change the text input
  searchBar.value = searchQuery;
}

function fetchPageText(pageURL) {
  return fetch(pageURL)
    .then(response => {
      return response.text()
    })
    .then(htmlString => {
      const result = new DOMParser().parseFromString(htmlString, "text/html");
      return result.body.textContent;
    });
}

(async () => {
  try {
    pageIndex = await fetchPageText("./index.html");
  } catch (error) {
    console.error("Error:", error);
  }
})();