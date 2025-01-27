// List of all site pages to search on
const sitePagesArray = [
  '/index.html',
  '/about.html',
  '/history.html',
  '/hall-of-fame.html',
  '/socials.html'
];

// Retrieves the emoji tied to the web page
function emojiFromPage(page) {
  var emoji = "🟦"; // Fallback emoji
  switch (page) {
    case '/index.html': emoji = "🏠"; break;
    case '/about.html': emoji = "🟦"; break;
    case '/history.html': emoji = "📖"; break;
    case '/hall-of-fame.html': emoji = "🏆"; break;
    case '/socials.html': emoji = "👥"; break;
    case '/search.html': emoji = "🔍"; break;
  }
  return emoji;
}

// Retrieve the URI
const url_URI = window.location.search;

// Removes the leading "?" and makes an array of all URI keys and their values
const uriKeys_URI = url_URI.substring(1).split('&');

// Declares a null object array to store the URI keys
const uriKeys_Array = {};

// Lambda to store each key in the key object array
uriKeys_URI.forEach(uriKey => {
  const [key, value] = uriKey.split('=');
  uriKeys_Array[key] = decodeURIComponent(value.replaceAll(/\+/g, ' ') || "");
});

var searchQuery = uriKeys_Array['q']; // The user's search query as a String

// If the search query does NOT equal null (or undefined)...
if ((searchQuery != null) && (searchQuery != '')) {

  // Retrieve and store the search bar
  const searchBar = document.getElementById('search-bar');

  // Change the text input
  searchBar.value = searchQuery;

  const searchRegex = new RegExp(searchQuery, 'gim'); // Search RegEx of user query

  // Searches
  fetchAndParsePages(sitePagesArray, searchRegex).then(results => {
    const parentElement = document.getElementById('search-results');
    parentElement.innerHTML = '';

    results.forEach((result) => {
      if (result.count != 0) {

        // Creates the list item element
        const listItem = document.createElement('li');

        // Creates the match anchor element
        const matchElement = document.createElement('a');
        matchElement.className = "search-results-match";
        matchElement.href = result.page;
        matchElement.role = "link";
        matchElement.ariaLabel = "Visit the '" + result.title + "' page. Opens in the same tab";
        
        // Spawns the grid children
        const gridLeft = document.createElement('div');
        const gridRight = document.createElement('div');

        // Spawns the grid left's children
        // Emoji
        const emoji = document.createElement('p');
        emoji.className = "search-results-match-emoji";
        emoji.innerText = emojiFromPage(result.page);
        gridLeft.appendChild(emoji);
        // Match count
        const count = document.createElement('p');
        count.className = "search-results-match-count";
        if (result.count == 1) {
          count.innerText = "1 match";
        } else {
          count.innerText = result.count + " matches";
        }
        gridLeft.appendChild(count);

        // Spawns the grid right's children
        // Title
        const title = document.createElement('h3');
        title.innerText = result.title;
        gridRight.appendChild(title);
        // Flavor
        const flavor = document.createElement('p');
        flavor.innerText = result.flavor;
        gridRight.appendChild(flavor);
        
        // Appends the grid children
        matchElement.appendChild(gridLeft);
        matchElement.appendChild(gridRight);

        // Appends the grid
        listItem.appendChild(matchElement);
        parentElement.appendChild(listItem);
      }
    })
  });
}

/* START OF SEARCH PARSING
  Made by ChatGPT. I don't know JS well enough right now to do this myself :(
*/

// Fetches and parses the pages provided based on the RegEx provided
async function fetchAndParsePages(pages, regex) {

  const results = []; // Stores the URL and matching results

  // Maps what happens for each page to fetch
  const fetchPromises = pages.map(async page => {

    // Tries to fetch the page content
    try {
      const responsePage = await fetch(page);
      const responseText = await responsePage.text();

      // Retrieves the meta description of each page
      const metaMatch = responseText.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
      const flavor = metaMatch ? metaMatch[1] : "No description available.";

      // Retrieves the title of each page
      const titleMatch = responseText.match(/<title>([^<&]+)/gi);
      const title = titleMatch.length ? titleMatch[0].substring(7).trimEnd() : "No Title Available";

      // Perform regex matching
      const matches = responseText.match(regex) || []; // Default to empty array if no matches
      results.push({ title, page, count: matches.length, flavor});
    } catch (error) {
      console.error(`Error fetching ${page}:`, error);
    }
  });

  // Wait for all fetches to complete
  await Promise.all(fetchPromises);

  // Sort results by the number of matches (descending order)
  results.sort((a, b) => b.count - a.count);

  return results; // Returns an array of arrays of the search query
}
