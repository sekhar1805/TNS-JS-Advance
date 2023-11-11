/*
## **Problem Statement**

Make a signature builder using HTML, CSS and JS.

To provide a stylisis signature take the user's name using a text field input.

Choose some stylisis font (at least 5 & at most 10) from internet to make the signature.

Show a full name signature and a short name signature. Short name has first letter of first name and full last name.

Update the full-name signature field live when the user is writing the name.

Also give a sample in each font after the loading of the page to show some sample text.

### **Write any JS code in `script.js` file.**

### **Write any CSS code in `style.css` file.**
*/
function updateSignatures() {
  const name = document.getElementById("name").value;
  const font = document.getElementById("font").value;
  const fullNameSignature = document.getElementById("full-name-signature");
  const shortNameSignature = document.getElementById("short-name-signature");

  fullNameSignature.style.fontFamily = font;
  shortNameSignature.style.fontFamily = font;

  fullNameSignature.textContent = name;
  const names = name.split(" ");
  if (names.length >= 2) {
    shortNameSignature.textContent =
      names[0].charAt(0) + " " + names[names.length - 1];
  } else {
    shortNameSignature.textContent = name;
  }
}
