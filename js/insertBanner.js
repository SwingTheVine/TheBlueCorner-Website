fetch('./html/banner.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('banner').innerHTML = data;
  })
  .catch(error => {
      console.error('Error:', error);
  });