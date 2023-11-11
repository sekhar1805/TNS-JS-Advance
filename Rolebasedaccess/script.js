/*
## **Problem Statement**

Implement role-based access in html.

Your input will be the role and the file, the user is trying to access. 

**Valid role:**

- `teacher`
- `student`

**Valid files:**

- `attendance`
- `class-work`
- `home-work`

**Rules:**

- `teacher` can access `attendance` and `home-work`.
- `student` can access `class-work` and `home-work`.

**Output: (In `h1` header tag)**
- `ACESSS GRANTED` in green, if the user can access the file.
- `ACCESS DENIED` in red if not
- `ERROR: INVALID ROLE OR FILE` in console for non-valid role of file.

**Sample Input:**

1.
```
teacher attendance
```
2.
```
student attendance
```

**Sample Output:**

1.
```
ACCESS GRANTED
```
2.
```
ACCESS DENIED
```

### **Write any JS code in `script.js` file.**

### **Write any CSS code in `style.css` file.**
*/
document.getElementById("accessButton").addEventListener("click", () => {
  const roleInput = document.getElementById("roleInput").value.toLowerCase();
  const fileInput = document.getElementById("fileInput").value.toLowerCase();
  const resultElement = document.getElementById("result");

  if (
    (roleInput === "teacher" &&
      (fileInput === "attendance" || fileInput === "home-work")) ||
    (roleInput === "student" &&
      (fileInput === "class-work" || fileInput === "home-work"))
  ) {
    resultElement.textContent = "ACCESS GRANTED";
    resultElement.classList.add("access-granted");
    resultElement.classList.remove("access-denied");
  } else {
    resultElement.textContent = "ACCESS DENIED";
    resultElement.classList.remove("access-granted");
    resultElement.classList.add("access-denied");
    if (
      roleInput !== "teacher" &&
      roleInput !== "student" &&
      fileInput !== "attendance" &&
      fileInput !== "class-work" &&
      fileInput !== "home-work"
    ) {
      console.error("ERROR: INVALID ROLE AND FILE");
    }
  }
});
