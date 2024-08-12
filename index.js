const getQuoteBtn = document.getElementById("button1");
const twitterBtn = document.getElementById("button2");
const showQuote = document.getElementById("quote");
const showAuthor = document.getElementById("author");

const apiKey = "eNEPf+oSw1k3/tHQ4Lb4mA==YzKiTJsvgYzl6Unn";
const api_url = `https://api.api-ninjas.com/v1/quotes?category=happiness`;

async function getQuote(url) {
  // const response = await fetch(url);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  });
  const data = await response.json();

  // console.log(data);
  showQuote.innerHTML = data[0].quote;
  showAuthor.innerHTML = data[0].author;
}

getQuote(api_url);

getQuoteBtn.addEventListener("click", () => {
  getQuote(api_url);
});

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      showQuote.innerHTML +
      "    - " +
      showAuthor.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}

twitterBtn.addEventListener("click", () => {
  tweet();
});

// var category = 'happiness'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//     headers: { 'X-Api-Key': 'apiKey'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

// fetch(api_url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// import requests
// category = 'happiness'
// api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
// response = requests.get(api_url, headers={'X-Api-Key': 'YOUR_API_KEY'})
// if response.status_code == requests.codes.ok:
//     print(response.text)
// else:
//     print("Error:", response.status_code, response.text)
