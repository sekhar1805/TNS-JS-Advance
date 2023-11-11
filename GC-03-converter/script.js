/*
## **Problem Statement**

You all have seen that the calculator app of any android phone has dedicated converter features where it converts data of one unit to any other unit of the same parameter.

Make a converter using HTML and JS.

The converter will have three parameters and some units of each parameter.

**Valid Parameters and Units:**

- `Length`: `meter`<->`foot`, `centimeter`<->`inch`.
- `Volume`: `cubic meter` <-> `litter`
- `Area`: `square foot` <-> `acre`


The user will input a code and data to convert. There should be a complete guide that what the code will be.

**Sample Input:**

Suppose to convert meter to foot, the code is 1a.

```
1a 1
```

**Sample Output:**

```
3.281
```

***Hint:***

- *1 meter = 3.281 foot*
- *1 inch = 2.54 centimeter*
- *1 cubi meter = 1000 litter*
- *1 acre = 1076.391 square foot*

### **Write any JS code in `script.js` file.**
*/

function convert() {
  const conversion = document.getElementById("conversion").value;
  const value = parseFloat(document.getElementById("value").value);

  let result = 0;

  switch (conversion) {
    case "1a":
      result = value * 3.281;
      break;
    case "1b":
      result = value / 3.281;
      break;
    case "2a":
      result = value * 2.54;
      break;
    case "2b":
      result = value / 2.54;
      break;
    case "3a":
      result = value * 1000;
      break;
    case "3b":
      result = value / 1000;
      break;
    case "4a":
      result = value / 1076.391;
      break;
    case "4b":
      result = value * 1076.391;
      break;
    default:
      result = "Invalid Conversion Code";
  }

  document.getElementById("result").textContent = result;
}
