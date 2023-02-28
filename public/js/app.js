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
  const trimmedStr = postdata.replace(/^[\r\n]+|[\r\n]+$/gm, '');
  fetch('/posttojira?postdata='+encodeURIComponent(trimmedStr))
  .then((response) => {
    response.json().then((data) => {
      console.log('Success:', data.data)
      jiraResult.textContent="Test Case with KEY : " + data.data.key + " is posted to JIRA"
    })
  })
  .catch((error) => {
    console.error('Error:', error);
  });
})