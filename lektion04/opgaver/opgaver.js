// Tilføj kode for opgave 4.1 - 4.5 her!


var paragraphs = document.querySelectorAll("p");

for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";


}


var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

headers.forEach(function(header) {
  var nextElement = header.nextElementSibling;
  var count = 0;

  while (nextElement) {
    if (count % 2 === 1) {
      nextElement.classList.add('brown-text');
    }
    if (!nextElement.tagName.startsWith('H')) {
      count++;
    }
    nextElement = nextElement.nextElementSibling;
  }
});


var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

headers.forEach(function(header) {
  var nextElement = header.nextElementSibling;
  var count = 0;

  while (nextElement) {
    if (!nextElement.tagName.startsWith('H')) {
      if (nextElement.tagName === 'UL') {
        var listItems = nextElement.querySelectorAll('li');
        listItems.forEach(function(item, index) {
          if (index % 2 === 1) {
            item.style.backgroundColor = 'lightgray'; // Add light gray background
          }
        });
        break;
      }
    }
    nextElement = nextElement.nextElementSibling;
  }
});

var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

headers.forEach(function(header) {
  var nextElement = header.nextElementSibling;

  while (nextElement) {
    if (!nextElement.tagName.startsWith('H')) {
      var subHeader = document.createElement('h2');
      subHeader.textContent = nextElement.textContent;
      nextElement.parentNode.replaceChild(subHeader, nextElement);
    } else {
      break; // Stop when the next header is encountered
    }
    nextElement = header.nextElementSibling;
  }
});








