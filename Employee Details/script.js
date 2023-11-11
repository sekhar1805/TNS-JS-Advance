/*
## **Problem Statement**

Suppose you are making emails, usernames, and a password for all the employees of a company. The format of email, username, and password is as follows

email: `<first_name>.<last_name>@abc.com`

username: `<first_name><last_name_with_first_letter_capital>`

password: `<last_name>#<first_name_with_first_letter_capital>`

Take all name input at once where each name will be separated by a space and first and last names will be joined with an underscore.

Output all the names, emails, usernames, and passwords on the screen under the `h2` tag.

Use function to implement any repetitive work.

**Sample Input:**

```
Lionel_Messi Cristiano_Ronaldo Luis_Suarez
```

**Sample Output:**

```
Lionel Messi
lionel.messi@abc.com
lionelMessi
messi#Lionel

Cristiano Ronaldo
cristiano.ronaldo@abc.com
cristianoRonaldo
ronaldo#Cristiano

Luis Suarez
luis.suarez@abc.com
luisSuarez
suarez#Luis
```

Put all HTML element inside the span tag and use no header

```
<span id = "solution"><\span>
```

### **Write any JS code in `script.js` file.**
*/

/* forked solution
var employeeNameString = prompt("Enter employee names:");
var employeeNames = employeeNameString.split(" ");

let HTMLString = "";

employeeNames.forEach((item) => {
  var name = item.replace("_", " ");
  var firstName = name.split(" ")[0].toLowerCase();
  var lastName = name.split(" ")[1].toLowerCase();
  name = `${ToCamelCase(firstName)} ${ToCamelCase(lastName)}`;
  var email = `${firstName}.${lastName}@abc.com`;
  var userName = `${firstName}${ToCamelCase(lastName)}`;
  var password = `${lastName}#${ToCamelCase(firstName)}`;
  HTMLString += `${name}\n${email}\n${userName}\n${password}\n\n`;
});
document.getElementById("solution").innerText = HTMLString;

function ToCamelCase(string) {
  return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
}
*/
const inputNames = prompt("Enter your Name e.g, firstName_lastName");
const names = inputNames.split(" ");

const generateEmail = (firstName, lastName) =>
  `${firstName.toLowerCase()}.${lastName.toLowerCase()}@abc.com`;
const generateUserName = (firstName, lastName) =>
  `${firstName.toLowerCase()}${lastName[0].toUpperCase()}${lastName.slice(1)}`;
const generatepassword = (firstName, lastName) =>
  `${lastName.toLowerCase()}#${firstName[0].toUpperCase()}${firstName.slice(
    1
  )}`;
const solution = document.getElementById("solution");

names.forEach((name) => {
  const [firstName, lastName] = name.split("_");
  const nameElement = document.createElement("h2");

  const emailElement = document.createElement("p");
  const userNameElement = document.createElement("p");
  const passwordElement = document.createElement("p");
  nameElement.textContent = `${firstName} ${lastName}`;
  emailElement.textContent = generateEmail(firstName, lastName);
  userNameElement.textContent = generateUserName(firstName, lastName);
  passwordElement.textContent = generatepassword(firstName, lastName);

  [nameElement, emailElement, userNameElement, passwordElement].forEach(
    (element) => solution.appendChild(element)
  );
});
