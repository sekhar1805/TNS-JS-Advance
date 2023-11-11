/*
## **Problem Statement**

There is a open source API, which responeses with Star Wars film related information.

One endpoint is: https://swapi.dev/api/people/1.

In the details section, you can see that all the films, vehicles related to this people is another API.

Write a JS script, which will fetch all data from the above mentioned api and print it on the screen. Instead of APIs for films, vehicles etc. print only there name.

**Wrong Output:**

```
Films:
  - https://swapi.dev/api/films/1/ 
  - https://swapi.dev/api/films/2/ 
  - https://swapi.dev/api/films/3/ 
  - https://swapi.dev/api/films/6/
```

**Correct Input:**

```
Films:
  - A New Hope
  - The Empire Strikes Back
  - Return of the Jedi
  - Revenge of the Sith
```

Click on the API to see the response first before you start coding.

### **Write any JS code in `script.js` file.**
*/
const characterUrl = "https://swapi.dev/api/people/1";
// fetch film names
const fetchFilmNames = async (filmUrls) => {
  return Promise.all(
    filmUrls.map(async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data.title;
    })
  );
};

// Fetching data from given Url
const fetchCharacterData = async () => {
  try {
    const characterResponse = await fetch(characterUrl);
    const characterData = await characterResponse.json();
    console.log(characterData);
    const filmUrls = characterData.films;
    const filmNames = await fetchFilmNames(filmUrls);
    console.log(filmNames);
    const filmList = document.getElementById("films");
    filmNames.forEach((name) => {
      const filmItem = document.createElement("li");
      filmItem.textContent = name;
      filmList.appendChild(filmItem);
    });
  } catch (error) {
    console.error("An Error occured:", error);
  }
};
fetchCharacterData();
