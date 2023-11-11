/*
## **Problem Statement**

Write an HTML script to give the user a Spend Analysis Program, where the user will be given a budget and some categories to buy from of zero to any no. of units. At last display the user the total price.

Also display price of each unit with the category name.

**Categories & Price of Each Unit:**
- Fashion: ₹5,000
- Electronics: ₹30,000
- Digital Photography: ₹50,000
- Tour & Travels: ₹2,00,000
- Real State: ₹50,00,000

**Budget:** ₹50,00,00,000

Put an up and down arrow beside the user input space to add or subtract no. of unit for that category.

Put a Submit Button to submit the user's cohice and then publish the total price.

Total price should be in - 
- Green colour if it under the budget.
- Yellow colour if it exceeds the budget by not more than 25% of the budget.
- Red colour if it exceeds by more than 25% of the budget.

### **Write any JS code in `script.js` file.**
*/
let fashionUnit = 0,
  electronicsUnit = 0,
  photoUnit = 0,
  tourUnit = 0,
  rsUnit = 0;
function changeUnit(condition, unitName) {
  switch (unitName) {
    case "fashion": {
      switch (condition) {
        case 1: {
          fashionUnit++;
          break;
        }
        case 0: {
          if (fashionUnit > 0) fashionUnit--;
          break;
        }
      }
      document.getElementById("fashion").innerText = fashionUnit;
      break;
    }
    case "electronics": {
      switch (condition) {
        case 1: {
          electronicsUnit++;
          break;
        }
        case 0: {
          if (electronicsUnit > 0) electronicsUnit--;
          break;
        }
      }
      document.getElementById("electronics").innerText = electronicsUnit;
      break;
    }
    case "photo": {
      switch (condition) {
        case 1: {
          photoUnit++;
          break;
        }
        case 0: {
          if (photoUnit > 0) photoUnit--;
          break;
        }
      }
      document.getElementById("photo").innerText = photoUnit;
      break;
    }
    case "tour": {
      switch (condition) {
        case 1: {
          tourUnit++;
          break;
        }
        case 0: {
          if (tourUnit > 0) tourUnit--;
          break;
        }
      }
      document.getElementById("tour").innerText = tourUnit;
      break;
    }
    case "rs":
      {
        switch (condition) {
          case 1: {
            rsUnit++;
            break;
          }
          case 0: {
            if (rsUnit > 0) rsUnit--;
            break;
          }
        }
      }
      document.getElementById("rs").innerText = rsUnit;
      break;
  }
}

function submit() {
  var totalSpend =
    fashionUnit * 5000 +
    electronicsUnit * 30000 +
    photoUnit * 50000 +
    tourUnit * 200000 +
    rsUnit * 5000000;
  let color;
  if (totalSpend <= 500000000) color = "green";
  else if (500000000 < totalSpend && totalSpend <= 750000000) color = "#FEBD00";
  else color = "red";
  var spend = document.getElementById("spend");
  spend.innerText = totalSpend;
  spend.style.color = color;
}
