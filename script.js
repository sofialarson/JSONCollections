let accessoriesGridElement = document.getElementById('accessoriesGrid');
let clothingGridElement = document.getElementById('clothingGrid');
let contactsGridElement = document.getElementById('contactsGrid');
let propsGridElement = document.getElementById('propsGrid');
let shoesGridElement = document.getElementById('shoesGrid');
let wigsGridElement = document.getElementById('wigsGrid');

let costumePieces = [
  {
    "title" : "Wooden Bow",
    "type" : "props",
    "picture_url" : "bow.jpg",
    "location" : "Dorm Amazon Boxes",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Ashe"]
  },
  {
    "title" : "Brown Leather Gloves",
    "type" : "accessories",
    "picture_url" : "Gloves.JPG",
    "location" : "Glove Drawer",
    "condition" : "Missing",
    "applicable costumes" : ["Ashe", "Forrest" , "Robin"]
  },
  {
    "title" : "Silver Short Wig",
    "type" : "wigs",
    "picture_url" : "wig.jpg",
    "location" : "Wig Drawer",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Ashe"]
  },
]

for (var i = 0; i < costumePieces.length; i++) {
  createElement(costumePieces[i]);
}

function createElement(incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let newImage = document.createElement("IMG");
  newImage.classList.add("image");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  if (incomingJSON['type'] == 'accessories') {
    accessoriesGridElement.appendChild(newContentElement);
  }
  else if (incomingJSON['type'] == 'clothing') {
    clothingGridElement.appendChild(newContentElement);
  }
  else if (incomingJSON['type'] == 'contacts') {
    contactsGridElement.appendChild(newContentElement);
  }
  else if (incomingJSON['type'] == 'props') {
    propsGridElement.appendChild(newContentElement);
  }
  else if (incomingJSON['type'] == 'shoes') {
    shoesGridElement.appendChild(newContentElement);
  }
  else {
    wigsGridElement.appendChild(newContentElement);
  }

}
