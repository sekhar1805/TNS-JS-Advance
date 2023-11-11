/*
## **Problem Statement**

Write an HTML script to output the capital and flag image to the user when a country of Asia is input.

There should be an input field for the country.

If the input country is not in Asia, output a alert: 
```
INVALID COUNTRY: COUNTRY IS EITHER INVALID OR NOT IN ASIA
```
**The list of country:**

- Afghanistan : Kabul
- Armenia : Yerevan
- Azerbaijan : Baku
- Bahrain	: Manama
- Bangladesh : Dhaka
- Bhutan : Thimphu
- Brunei : Bandar Seri Begawan
- Cambodia : Phnom Penh
- China : Beijing
- Georgia : Tbilisi
- India : New Delhi
- Indonesia : Jakarta
- Iran : Tehran
- Iraq : Baghdad
- Israel : Jerusalem
- Japan : Tokyo
- Jordan : Amman
- Kazakhstan : Nur-Sultan
- Kuwait : Kuwait City
- Kyrgyzstan : Bishkek
- Laos : Vientiane
- Lebanon : Beirut
- Malaysia : Kuala Lumpur
- Maldives : Malé
- Mongolia : Ulaanbaatar
- Myanmar : Naypyidaw
- Nepal : Kathmandu
- North Korea : Pyongyang
- Oman : Muscat
- Pakistan : Islamabad
- Palestine : Ramallah
- Philippines : Manila
- Qatar : Doha
- Russia : Moscow
- Saudi Arabia : Riyadh
- Singapore : Singapore
- South Korea : Seoul
- Sri Lanka : Sri Jayawardenepura Kotte
- Syria : Damascus
- Taiwan : Taipei
- Tajikistan : Dushanbe
- Thailand : Bangkok
- Turkey : Ankara
- Turkmenistan : Ashgabat
- United Arab Emirates : Abu Dhabi
- Uzbekistan : Tashkent
- Vietnam : Hanoi
- Yemen : Sana'a
*/
document.addEventListener("DOMContentLoaded", () => {
  const getCountryInfo = async (country) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );
      if (response.ok) {
        const [countryInfo] = await response.json();
        console.log(countryInfo);
        const capital = countryInfo.capital;
        const flagUrl = countryInfo.flags.png;
        return { capital, flagUrl };
      } else {
        throw new Error("Country not found");
      }
    } catch (error) {
      throw error;
    }
  };

  const getCountryInfoAndDisplay = async () => {
    const countryInput = document.getElementById("country");
    const capitalElement = document.getElementById("capital");
    const flagElement = document.getElementById("flag");
    const country = countryInput.value.trim();

    if (country) {
      try {
        const { capital, flagUrl } = await getCountryInfo(country);
        // console.log(capital);
        capitalElement.textContent = capital;
        flagElement.src = flagUrl;
        flagElement.style.display = "block";
      } catch (error) {
        alert("INVALID COUNTRY: COUNTRY IS EITHER INVALID OR NOT IN ASIA");
        capitalElement.textContent = "";
        flagElement.src = "";
        flagElement.style.display = "none";
      }
    } else {
      alert("Please enter a valid country.");
    }
  };

  const getButton = document.getElementById("get-info");
  getButton.addEventListener("click", getCountryInfoAndDisplay);
});
