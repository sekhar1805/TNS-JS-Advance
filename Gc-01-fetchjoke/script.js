/*
## **Problem Statement**

There is a api which will respond with random joke eachtime it is called. Write a script with HTML and JS to output a joke everytime user clicks a Button which is at the center of the screen. .

The API: https://backend-omega-seven.vercel.app/api/getjoke

The return object will have two parameter: `question` and `punchline`. Output both in seperate line.

### **Write any JS code in `script.js` file.**
*/
document.addEventListener("DOMContentLoaded", () => {
  const getJokeButton = document.getElementById("get-joke");
  const jokeQuestion = document.getElementById("joke-question");
  const jokePunchline = document.getElementById("joke-punchline");

  getJokeButton.addEventListener("click", async () => {
    try {
      const response = await fetch(
        "https://backend-omega-seven.vercel.app/api/getjoke"
      );
      const data = await response.json();
      console.log(data[0]);
      jokeQuestion.textContent = data[0].question;
      jokePunchline.textContent = data[0].punchline;
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  });
});
