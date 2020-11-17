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
    "title" : "Leather Gloves",
    "type" : "accessories",
    "picture_url" : "Gloves.JPG",
    "location" : "???",
    "condition" : "Missing",
    "applicable costumes" : ["Ashe", "Forrest" , "Robin"]
  },
  {
    "title" : "Silver Wig",
    "type" : "wigs",
    "picture_url" : "wig.jpg",
    "location" : "Wig Drawer",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Ashe"]
  },
  {
    "title" : "Blue Boots",
    "type" : "shoes",
    "picture_url" : "hunter.jpeg",
    "location" : "Shoe cubby",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Ashe"]
  },
  {
    "title" : "Brown Slacks",
    "type" : "clothing",
    "picture_url" : "brownpants.jpg",
    "location" : "Cosplay closet",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Ashe"]
  },
  {
    "title" : "Green Contacts",
    "type" : "contacts",
    "picture_url" : "greencontacts.jpg",
    "location" : "Contacts Bin",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Ashe"]
  },
  {
    "title" : "Ashe Jacket",
    "type" : "clothing",
    "picture_url" : "Ashe.jpg",
    "location" : "Cosplay closet",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Ashe"]
  },
  {
    "title" : "Bloomers",
    "type" : "clothing",
    "picture_url" : "bloomers.jpg",
    "location" : "Cosplay closet",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Shinku"]
  },
  {
    "title" : "Mary Janes",
    "type" : "shoes",
    "picture_url" : "blackmaryjanes.JPG",
    "location" : "Shoe cubby",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Shinku", "Willow"]
  },
  {
    "title" : "Petticoat",
    "type" : "clothing",
    "picture_url" : "petticoat.jpg",
    "location" : "Cosplay closet",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Shinku"]
  },
  {
    "title" : "Shinku Dress",
    "type" : "clothing",
    "picture_url" : "rozendress.jpg",
    "location" : "Cosplay closet",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Shinku"]
  },
  {
    "title" : "Blonde Pigtail Wig",
    "type" : "wigs",
    "picture_url" : "shinkuwig.jpg",
    "location" : "Wig bin",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Shinku"]
  },
  {
    "title" : "Rose Ring",
    "type" : "accessories",
    "picture_url" : "ring.jpg",
    "location" : "Jewlery Drawer",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Shinku"]
  },
  {
    "title" : "White Tights",
    "type" : "clothing",
    "picture_url" : "whitetights.JPG",
    "location" : "Cosplay closet",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Shinku"]
  },
  {
    "title" : "Leather Boots",
    "type" : "shoes",
    "picture_url" : "brownboots.jpg",
    "location" : "Cosplay closet",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Forrest", "Robin"]
  },
  {
    "title" : "Leather Gauntlets",
    "type" : "accessories",
    "picture_url" : "leathergauntlets.jpg",
    "location" : "Accessories Drawer",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Forrest"]
  },
  {
    "title" : "White Blouse",
    "type" : "clothing",
    "picture_url" : "whiteblouse.jpg",
    "location" : "Cosplay closet",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Forrest"]
  },
  {
    "title" : "Gladiator Sandals",
    "type" : "shoes",
    "picture_url" : "sandals.jpg",
    "location" : "Cosplay closet",
    "condition" : "Needs Repairs",
    "applicable costumes" : ["Forrest"]
  },
  {
    "title" : "Thoron Book",
    "type" : "props",
    "picture_url" : "thoron.jpg",
    "location" : "Prop Drawer",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Robin"]
  },
  {
    "title" : "Silver Pigtail Wig",
    "type" : "wigs",
    "picture_url" : "robinwig.JPG",
    "location" : "Wig Bin",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Robin"]
  },
  {
    "title" : "Robin Costume",
    "type" : "clothing",
    "picture_url" : "robinoutfit.jpg",
    "location" : "Cosplay closet",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Robin"]
  },
  {
    "title" : "Black Wig",
    "type" : "wigs",
    "picture_url" : "blackwig.jpg",
    "location" : "Wig Bin",
    "condition" : "Needs Repairs",
    "applicable costumes" : ["Willow"]
  },
  {
    "title" : "Green Flats",
    "type" : "shoes",
    "picture_url" : "flats.jpg",
    "location" : "Shoe Cubby",
    "condition" : "Needs Repairs",
    "applicable costumes" : ["Syaoran"]
  },
  {
    "title" : "Syaoran Hat",
    "type" : "accessories",
    "picture_url" : "hat.jpg",
    "location" : "Cosplay closet",
    "condition" : "Ready to Go",
    "applicable costumes" : ["Syaoran"]
  },
  { "title" : "Syaoran Costume",
  "type" : "clothing",
  "picture_url" : "syaorancostume.JPG",
  "location" : "Cosplay closet",
  "condition" : "Needs Repairs",
  "applicable costumes" : ["Syaoran"]
  },
  { "title" : "Syaoran Sword",
  "type" : "props",
  "picture_url" : "sword.jpg",
  "location" : "Cosplay closet",
  "condition" : "Ready to Go",
  "applicable costumes" : ["Syaoran"]
  },
  { "title" : "Short Brown Wig",
  "type" : "wigs",
  "picture_url" : "brownwig.jpg",
  "location" : "Wig Bin",
  "condition" : "Ready to Go",
  "applicable costumes" : ["Syaoran"]
  },
]

for (var i = 0; i < costumePieces.length; i++) {
  createElement(costumePieces[i]);
}

function createElement(incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let newImageDIV = document.createElement("DIV");
  let newImage = document.createElement("IMG");
  newImage.classList.add("image");
  newImage.src = incomingJSON['picture_url'];
  if (incomingJSON['condition'] === "Missing" || incomingJSON['condition'] === "missing" || incomingJSON['condition'] === "Needs Repairs") {
    newImageDIV.classList.add("missing");
    newImage.classList.add("missing");
  }
  newImageDIV.appendChild(newImage);
  newContentElement.appendChild(newImageDIV);
  if (incomingJSON['condition'] === "Missing" || incomingJSON['condition'] === "missing" || incomingJSON['condition'] === "Needs Repairs") {
    let missingText = document.createElement("H4");
    missingText.classList.add('contentTitle');
    missingText.innerText = incomingJSON['condition'];
    newContentElement.appendChild(missingText);
  }


  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newLocationHeading = document.createElement("H5");
  newLocationHeading.classList.add('contentTitle');
  newLocationHeading.innerText = incomingJSON['location'];
  newContentElement.appendChild(newLocationHeading);

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
