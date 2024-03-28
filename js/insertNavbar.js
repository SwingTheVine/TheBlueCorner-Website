fetch('./html/navbar.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('insert-navbar').innerHTML = data;
  })
  .catch(error => {
      console.error('Error:', error);
  });