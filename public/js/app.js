//import * as utils from '../../src/utils/utils'
//dotenv.config();
//import { Configuration, OpenAIApi } from "openai";
console.log("app.js client side javascript is loaded!!");
const textForm = document.querySelector("form#get-resp");
const postForm = document.querySelector("form#post-resp");
const textSearchValue = document.querySelector("#myTextArea");
const txtResult = document.querySelector("#result");
const jiraResult = document.querySelector("#result2");
const jiraurl = 'https://openaipocjira.atlassian.net/rest/api/2/issue/';
const token = 'cmF2aS5nYWp1bDIyQGdtYWlsLmNvbTpBVEFUVDN4RmZHRjBuV3VVZzVTNmJGUFZud0I2a29iYkctVjUwdmNzY0x5YzRzcG9mTzY3NVRwNVI0WGRnYldWb2pLVVdkMmkyNTc4Nzdkd2ZiR0EydmlJVUJ6NFlZZEhKV241SGhuU29oQVFEUW1COFdjeE02S0xtZzNNTy10dzFSTjJCN0pTWWMtYXp3MkhIWk9kWmFFQVBRUjlWT3VKRTkxLU96bFhKR3VKS3dWdG1xZXVHRzg9NDY0QjhEQkI=';
textForm.addEventListener("submit", (e) => {
  //prevent the browser from refreshing
  e.preventDefault();
  const prompt = textSearchValue.value;
  debugger;
  fetch('/index?prompt=' + encodeURIComponent(prompt))
    .then((response) => {
     response.json().then((data)=>{
      txtResult.textContent=data.result.choices[0].text
     })
    })
    .catch((error) => {
      console.log("Error occurred: ", error);
    });
});

postForm.addEventListener("submit", (e) => {
  //prevent the browser from refreshing
  e.preventDefault();
  const postdata = document.querySelector('#result').value
  fetch('/posttojira?postdata='+encodeURIComponent(postdata))
  .then((response) => {
    response.json().then((data) => {
      console.log('Success:', data.data)
      jiraResult.textContent=JSON.stringify(data.data)
    })
  })
  .catch((error) => {
    console.error('Error:', error);
  });
})